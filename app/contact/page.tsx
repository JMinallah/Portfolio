import type { Metadata } from "next";
import { BookPage } from "@/components/BookPage";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a project in mind? Get in touch.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <BookPage>
      <h1 className="text-sm font-semibold uppercase tracking-widest text-stone-500">
        Let&apos;s work together
      </h1>
      <p className="mt-6 text-base text-stone-600">
        Have a project in mind? Email me directly:
      </p>
      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-2 inline-block break-all text-2xl font-semibold tracking-tight text-forest underline-offset-4 hover:underline sm:text-3xl"
      >
        {siteConfig.email}
      </a>

      <p className="mt-10 text-sm text-stone-500">Or send a message here.</p>
      <div className="mt-4">
        <ContactForm />
      </div>
    </BookPage>
  );
}
