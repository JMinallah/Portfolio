import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section className="mx-auto flex h-full w-full max-w-6xl flex-col justify-start px-4 pt-28 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-umber-900 md:text-3xl">
          Contact
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-umber-600">
          Have a project in mind? Send a message, or email me directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-umber-800 hover:text-umber-950"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>

      <div className="rounded-3xl border border-umber-200 bg-umber-50 p-6 shadow-sm md:p-10">
        <ContactForm />
      </div>
    </section>
  );
}
