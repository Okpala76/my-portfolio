import { siteContent } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--color-line)] py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-[color:var(--color-muted)] md:flex-row md:items-center md:justify-between">
          <p>
            (c) {year} {siteContent.person.fullName}
          </p>
          <p>{siteContent.person.location}</p>
        </div>
      </Container>
    </footer>
  );
}