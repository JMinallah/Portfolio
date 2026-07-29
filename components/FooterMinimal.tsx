import Link from "next/link";

type FooterMinimalProps = {
  name?: string;
  email?: string;
};

export default function FooterMinimal({
  name = "Your Name",
  email = "hello@example.com",
}: FooterMinimalProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-umber-900/10 bg-umber-50">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-8 py-4 text-center text-sm text-umber-500 sm:px-10 lg:px-12">
        <p>
          © {year} {name}
        </p>
        <span className="text-umber-300" aria-hidden="true">
          &middot;
        </span>
        <Link
          href={`mailto:${email}`}
          className="text-umber-600 transition-colors hover:text-umber-950"
        >
          {email}
        </Link>
      </div>
    </footer>
  );
}
