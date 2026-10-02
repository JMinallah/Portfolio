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
    <form action={formAction} className="grid gap-3">
      {/* Honeypot field — hidden from real users, visible to most bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-xs text-champagne/80">
          Name
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-stone-300 bg-champagne px-3 py-1.5 text-sm text-forest outline-none focus:border-forest"
          />
        </label>
        <label className="grid gap-1 text-xs text-champagne/80">
          Email
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-stone-300 bg-champagne px-3 py-1.5 text-sm text-forest outline-none focus:border-forest"
          />
        </label>
      </div>

      <label className="grid gap-1 text-xs text-champagne/80">
        Message
        <textarea
          name="message"
          required
          rows={3}
          className="w-full rounded-lg border border-stone-300 bg-champagne px-3 py-1.5 text-sm text-forest outline-none focus:border-forest"
        />
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="justify-self-start rounded-full bg-champagne px-4 py-2 text-sm font-medium text-forest transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>

      {state.status !== "idle" ? (
        <p
          role="status"
          className={
            state.status === "success"
              ? "text-sm text-green-400"
              : "text-sm text-red-400"
          }
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
