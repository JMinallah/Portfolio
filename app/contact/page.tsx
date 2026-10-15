import type { Metadata } from "next";
import Link from "next/link";
import { BookPage } from "@/components/BookPage";
import { ContactForm } from "@/components/ContactForm";
import { transitionTypesFor } from "@/lib/book";
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
    <BookPage
      left={
        <>
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
        </>
      }
      right={
        <>
          <h2 className="text-sm text-stone-500 spread:font-semibold spread:uppercase spread:tracking-widest">
            <span className="spread:hidden">Or send a message here.</span>
            <span className="hidden spread:inline">Send a message</span>
          </h2>
          <div className="mt-4 spread:mt-6">
            <ContactForm />
          </div>
          <p className="mt-10 text-right">
            <Link
              href="/end"
              transitionTypes={transitionTypesFor("/contact", "/end")}
              className="text-sm font-medium text-stone-500 hover:text-forest"
            >
              Turn the page →
            </Link>
          </p>
        </>
      }
    />
  );
}
