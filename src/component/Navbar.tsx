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
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a className="font-semibold" href="#">
            {siteContent.person.fullName}
          </a>

          <nav className="hidden gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-700 hover:text-neutral-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="rounded-xl bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:opacity-90"
            href={`mailto:${siteContent.contact.email}`}
          >
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
}
