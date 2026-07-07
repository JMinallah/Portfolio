"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: real users never fill this in; bots usually do.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: "Thanks for reaching out!" };
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
      "RESEND_API_KEY is not set — cannot send contact form email. See .env.local.example."
    );
    return {
      status: "error",
      message:
        "Contact form isn't configured yet (missing RESEND_API_KEY). Please email directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: siteConfig.email,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return { status: "success", message: "Thanks — I'll get back to you soon." };
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}
