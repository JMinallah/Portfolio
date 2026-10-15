import type { Metadata } from "next";
import Link from "next/link";
import { BookPage } from "@/components/BookPage";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmail } from "@/components/CopyEmail";
import { transitionTypesFor } from "@/lib/book";
import { cvHref } from "@/lib/cv";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a project in mind? Write me a letter, or email me directly.",
  alternates: {
    canonical: "/contact",
  },
};

const sectionLabel =
  "font-serif text-sm font-semibold uppercase tracking-[0.18em] text-stone-500";

const rise = (n: number) => ({ "--rise": n }) as React.CSSProperties;

export default function ContactPage() {
  const cv = cvHref();

  return (
    <BookPage
      left={
        <>
          <h1 className={sectionLabel}>Correspondence</h1>
          <p className="rise mt-6 text-lg leading-relaxed text-forest" style={rise(0)}>
            Have a project in mind, or just want to say hello? I read every message.
          </p>

          <div className="rise mt-6" style={rise(1)}>
            <CopyEmail email={siteConfig.email} />
            <p className="mt-3 text-sm text-stone-500">
              {siteConfig.location.city}, {siteConfig.location.country} · usually
              replies within a day or two
            </p>
          </div>

          <ul className="rise mt-8 space-y-2" style={rise(2)}>
            {siteConfig.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-2 text-sm"
                >
                  <span className="font-serif font-semibold text-forest">{social.label}</span>
                  <span
                    aria-hidden="true"
                    className="min-w-3 flex-1 border-b border-dotted border-forest/25 transition-colors group-hover:border-forest/60"
                  />
                  <span className="text-stone-600 group-hover:text-forest">
                    {social.handle} ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {cv ? (
            <a
              href={cv}
              download
              className="rise mt-8 inline-block rounded-full border border-forest/30 px-5 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-champagne"
              style={rise(3)}
            >
              Download my CV ↓
            </a>
          ) : null}
        </>
      }
      right={
        <>
          <h2 className={sectionLabel}>Write me a letter</h2>
          <div className="rise mt-6" style={rise(1)}>
            <ContactForm />
          </div>
          <p className="mt-8 text-right">
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
