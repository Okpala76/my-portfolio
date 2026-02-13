type SectionId = "about" | "projects" | "skills" | "experience" | "education";

function toSectionId(title: string): SectionId {
  const normalized = title.toLowerCase();
  if (
    normalized === "about" ||
    normalized === "projects" ||
    normalized === "skills" ||
    normalized === "experience" ||
    normalized === "education"
  ) {
    return normalized;
  }
  return "about";
}

export function Section(props: { title: string; children: React.ReactNode }) {
  const id = toSectionId(props.title);

  return (
    <section id={id} className="py-10">
      <h2 className="relative mb-6 text-2xl font-semibold tracking-tight text-[color:var(--color-ink)] after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-12 after:rounded-full after:bg-[linear-gradient(135deg,var(--color-accent),var(--color-green))]">
        {props.title}
      </h2>
      {props.children}
    </section>
  );
}
