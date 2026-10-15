"use client";

import { useRef, useState } from "react";

// The email address with a Copy button, for visitors whose mailto links
// don't open an email app.
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const addressRef = useRef<HTMLAnchorElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard refused: select the address so it can be copied by hand.
      const range = document.createRange();
      if (addressRef.current) range.selectNodeContents(addressRef.current);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <a
        ref={addressRef}
        href={`mailto:${email}`}
        className="font-serif text-xl font-semibold text-forest underline-offset-4 [overflow-wrap:anywhere] hover:underline min-[400px]:text-2xl sm:text-[1.7rem]"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="rounded-full border border-forest/25 px-3 py-1 text-xs font-semibold text-forest transition hover:bg-forest hover:text-champagne"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <span role="status" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
    </div>
  );
}
