import Link from "next/link";

type FooterLink = {
  href: string;
  label: string;
};

type FooterMinimalProps = {
  name?: string;
  email?: string;
  links?: FooterLink[];
};

const defaultLinks: FooterLink[] = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "/blog", label: "Writing" },
];

export default function FooterMinimal({
  name = "Your Name",
  email = "hello@example.com",
  links = defaultLinks,
}: FooterMinimalProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-8 py-8 text-sm text-zinc-500 sm:flex-row sm:px-10 lg:px-12">
        <p>
          © {year} {name}
        </p>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((link) => {
            const isExternal =
              link.href.startsWith("https://") || link.href.startsWith("http://");

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="text-zinc-600 transition-colors hover:text-zinc-950"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={`mailto:${email}`}
              className="text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {email}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
