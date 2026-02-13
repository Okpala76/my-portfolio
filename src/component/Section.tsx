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
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">
        {props.title}
      </h2>
      {props.children}
    </section>
  );
}
