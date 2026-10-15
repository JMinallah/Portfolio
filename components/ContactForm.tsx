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
        <label className="grid gap-1 text-xs font-medium text-stone-600">
          Name
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-forest/15 bg-white/60 px-3 py-2 text-sm text-forest outline-none transition focus:border-forest focus:bg-white"
          />
        </label>
        <label className="grid gap-1 text-xs font-medium text-stone-600">
          Email
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-forest/15 bg-white/60 px-3 py-2 text-sm text-forest outline-none transition focus:border-forest focus:bg-white"
          />
        </label>
      </div>

      <label className="grid gap-1 text-xs font-medium text-stone-600">
        Message
        <textarea
          name="message"
          required
          rows={3}
          className="w-full rounded-lg border border-forest/15 bg-white/60 px-3 py-2 text-sm text-forest outline-none transition focus:border-forest focus:bg-white"
        />
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="justify-self-start rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-champagne transition hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>

      {state.status !== "idle" ? (
        <p
          role="status"
          className={
            state.status === "success"
              ? "text-sm text-green-700"
              : "text-sm text-red-700"
          }
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
