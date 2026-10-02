import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section className="h-full rounded-2xl border border-forest bg-forest p-5">
      <h2 className="text-lg font-semibold tracking-tight text-champagne">Contact</h2>
      <p className="mt-1 text-xs text-champagne/70">
        Have a project in mind? Email{" "}
        <a
          href={`mailto:${siteConfig.email}`}
          className="font-medium text-champagne hover:underline"
        >
          {siteConfig.email}
        </a>{" "}
        or send a message.
      </p>
      <div className="mt-4">
        <ContactForm />
      </div>
    </section>
  );
}
