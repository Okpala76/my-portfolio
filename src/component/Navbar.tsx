import { siteContent } from "@/content/site";
import { Container } from "./Container";

const navItems: ReadonlyArray<{ label: string; href: string }> = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)] bg-white/70 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a
            className="text-base font-semibold tracking-tight text-[color:var(--color-ink)]"
            href="#"
          >
            {siteContent.person.fullName}
          </a>

          <nav className="hidden gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[color:var(--color-muted)] transition hover:text-[color:var(--color-ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-green))] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-lg"
            href={`mailto:${siteContent.contact.email}`}
          >
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
}
