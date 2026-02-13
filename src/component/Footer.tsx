import { siteContent } from "@/content/site";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteContent.person.fullName}
          </p>
          <p>{siteContent.person.location}</p>
        </div>
      </Container>
    </footer>
  );
}
