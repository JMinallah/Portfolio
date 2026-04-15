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
  { href: "#writing", label: "Writing" },
];

export default function FooterMinimal({
  name = "Your Name",
  email = "hello@example.com",
  links = defaultLinks,
}: FooterMinimalProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{name}</p>
            <Link
              href={`mailto:${email}`}
              className="mt-1 inline-block text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              {email}
            </Link>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {links.map((link) => {
              const isExternal =
                link.href.startsWith("https://") || link.href.startsWith("http://");

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-1 border-t border-black/10 pt-4 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-zinc-400">
          <p>© {year} {name}. All rights reserved.</p>
          <p>Built with Next.js and tailored for performance.</p>
        </div>
      </div>
    </footer>
  );
}
