import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section id="contact" className="mt-16 mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
          Contact
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-600">
          Have a project in mind? Send a message, or email me directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-zinc-800 hover:text-zinc-950"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>

      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
        <ContactForm />
      </div>
    </section>
  );
}
