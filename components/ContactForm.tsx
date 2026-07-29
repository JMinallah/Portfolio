"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form action={formAction} className="mt-6 grid gap-4">
      {/* Honeypot field — hidden from real users, visible to most bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm text-umber-700">
          Name
          <input
            type="text"
            name="name"
            required
            className="rounded-lg border border-umber-300 px-3 py-2 text-sm text-umber-900 outline-none focus:border-umber-500"
          />
        </label>
        <label className="grid gap-1.5 text-sm text-umber-700">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-lg border border-umber-300 px-3 py-2 text-sm text-umber-900 outline-none focus:border-umber-500"
          />
        </label>
      </div>

      <label className="grid gap-1.5 text-sm text-umber-700">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-lg border border-umber-300 px-3 py-2 text-sm text-umber-900 outline-none focus:border-umber-500"
        />
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="justify-self-start rounded-full bg-umber-900 px-5 py-2.5 text-sm font-medium text-umber-50 transition hover:bg-umber-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>

      {state.status !== "idle" ? (
        <p
          role="status"
          className={
            state.status === "success"
              ? "text-sm text-moss-600"
              : "text-sm text-clay-600"
          }
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
