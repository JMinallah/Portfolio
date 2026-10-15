"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  /** On success: the address the reply will go to. */
  replyTo?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real users never fill this in; bots usually do.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: "Your letter is on its way." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set, so the contact form can't send. See .env.example."
    );
    return {
      status: "error",
      message: `The form isn't working right now. Please email me at ${siteConfig.email} instead.`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    // Resend reports delivery problems (bad key, daily limit, unverified
    // recipient) in `error` rather than by throwing.
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject: `A letter from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (error) throw error;

    return {
      status: "success",
      message: "Your letter is on its way.",
      replyTo: email,
    };
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return {
      status: "error",
      message: `Your letter couldn't be sent. Please try again, or email me at ${siteConfig.email}.`,
    };
  }
}
