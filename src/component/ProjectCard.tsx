import type { PortfolioProject } from "@/content/site";

export function ProjectCard(props: { project: PortfolioProject }) {
  const { project } = props;

  return (
    <div className="rounded-2xl border border-neutral-200 p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <div className="flex gap-2">
          {project.links.live ? (
            <a
              className="text-sm text-neutral-700 hover:text-neutral-900 underline underline-offset-4"
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          ) : null}
          {project.links.github ? (
            <a
              className="text-sm text-neutral-700 hover:text-neutral-900 underline underline-offset-4"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          ) : null}
        </div>
      </div>

      <p className="mt-2 text-neutral-700">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-xl bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
