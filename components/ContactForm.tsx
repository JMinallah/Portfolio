"use client";

import { useActionState, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

// The contact form as a letter: "Dear Jovia," at the top, the message on
// ruled lines, and the sender's name and address signed at the bottom. Once
// sent, the letter folds away and a confirmation takes its place.
export function ContactForm() {
  // Bumping the key starts a fresh letter (and a fresh form state).
  const [letter, setLetter] = useState(0);
  return <Letter key={letter} onWriteAnother={() => setLetter((n) => n + 1)} />;
}

function Letter({ onWriteAnother }: { onWriteAnother: () => void }) {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  const sent = state.status === "success";

  return (
    <div className="grid">
      <form
        action={formAction}
        aria-label="Letter to Jovia"
        aria-hidden={sent || undefined}
        inert={sent}
        className={`letter-paper [grid-area:1/1] ${sent ? "letter-fold" : ""}`}
      >
        {/* Honeypot field: hidden from people, filled in by most bots. */}
        <input
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <p className="font-serif text-lg italic text-forest">Dear Jovia,</p>

        <label htmlFor="letter-message" className="sr-only">
          Your message
        </label>
        <textarea
          id="letter-message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project, or just say hello…"
          className="letter-lines mt-2 w-full resize-y bg-transparent text-base text-forest outline-none placeholder:text-stone-400"
        />

        <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-5">
          <label className="letter-field">
            <span>From</span>
            <input type="text" name="name" required autoComplete="name" placeholder="Your name" />
          </label>
          <label className="letter-field">
            <span>Reply to</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          {state.status === "error" ? (
            <p role="alert" className="text-sm text-terracotta">
              {state.message}
            </p>
          ) : (
            <span />
          )}
          <button
            type="submit"
            disabled={isPending}
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-champagne transition hover:brightness-125 disabled:cursor-wait disabled:opacity-70"
          >
            {isPending ? "Sending…" : "Send letter →"}
          </button>
        </div>
      </form>

      {sent ? (
        <div
          role="status"
          className="letter-sent flex flex-col items-center justify-center self-center text-center [grid-area:1/1]"
        >
          <span aria-hidden="true" className="envelope" />
          <p className="mt-6 font-serif text-2xl font-semibold text-forest">
            {state.message}
          </p>
          {state.replyTo ? (
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-stone-600">
              I&apos;ll reply to you at{" "}
              <span className="font-medium text-forest">{state.replyTo}</span>, usually
              within a day or two.
            </p>
          ) : null}
          <button
            type="button"
            onClick={onWriteAnother}
            className="mt-6 text-sm font-semibold text-forest underline-offset-4 hover:underline"
          >
            Write another letter
          </button>
        </div>
      ) : null}
    </div>
  );
}
