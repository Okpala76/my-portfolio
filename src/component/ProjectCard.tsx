import type { PortfolioProject } from "@/content/site";

export function ProjectCard(props: { project: PortfolioProject }) {
  const { project } = props;

  return (
    <div className="card rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-[color:var(--color-ink)]">
          {project.name}
        </h3>
        <div className="flex gap-2">
          {project.links.live ? (
            <a
              className="text-sm font-semibold text-[color:var(--color-ink)] underline decoration-[color:var(--color-accent)] underline-offset-4"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          ) : null}
          {project.links.github ? (
            <a
              className="text-sm font-semibold text-[color:var(--color-ink)] underline decoration-[color:var(--color-green)] underline-offset-4"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-2 text-[color:var(--color-muted)]">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--color-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
