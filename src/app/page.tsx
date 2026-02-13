import { Container } from "@/component/Container";
import { Footer } from "@/component/Footer";
import { Navbar } from "@/component/Navbar";
import { ProjectCard } from "@/component/ProjectCard";
import { Reveal } from "@/component/Reveal";
import { Section } from "@/component/Section";
import { SkillPill } from "@/component/SkillPill";
import { siteContent } from "@/content/site";
import Image from "next/image";

export default function HomePage() {
  const { person, contact, hero, about, projects, skills, work, education } =
    siteContent;

  return (
    <>
      <Navbar />
      <main className="pb-16">
        <Container>
          {/* HERO */}
          <section className="py-14 md:py-20">
            <Reveal className="surface-strong rounded-3xl p-6 md:p-10">
              <div className="grid gap-8 md:grid-cols-[180px_1fr] md:items-center">
                <div className="flex justify-center md:justify-start">
                  <div className="relative h-44 w-44 overflow-hidden rounded-3xl border border-white/80 bg-white/70 shadow-lg">
                    <Image
                      src={person.headshotSrc}
                      alt={`${person.fullName} headshot`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="space-y-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-line)] bg-white/70 px-3 py-1 text-xs font-medium text-[color:var(--color-muted)]">
                    {person.location}
                  </span>
                  <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                    <span className="bg-[linear-gradient(120deg,var(--color-ink),var(--color-accent),var(--color-green))] bg-clip-text text-transparent">
                      {person.fullName}
                    </span>
                  </h1>
                  <p className="text-lg text-[color:var(--color-ink)] md:text-xl">
                    {hero.headline}
                  </p>
                  <p className="text-[color:var(--color-muted)]">
                    {hero.subheadline}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      className="rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-green))] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-lg"
                      href={person.resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Resume
                    </a>
                    <a
                      className="rounded-full border border-[color:var(--color-line)] bg-white/70 px-5 py-2 text-sm font-semibold text-[color:var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-white"
                      href={`mailto:${contact.email}`}
                    >
                      Email
                    </a>
                    <a
                      className="rounded-full border border-[color:var(--color-line)] bg-white/70 px-5 py-2 text-sm font-semibold text-[color:var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-white"
                      href={contact.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      className="rounded-full border border-[color:var(--color-line)] bg-white/70 px-5 py-2 text-sm font-semibold text-[color:var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-white"
                      href={contact.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>

                  <div className="text-sm text-[color:var(--color-muted)]">
                    <span className="mr-3">Email: {contact.email}</span>
                    {contact.phone ? <span>Phone: {contact.phone}</span> : null}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* ABOUT */}
          <Section title="About">
            <Reveal>
              <div className="space-y-4 text-[color:var(--color-muted)]">
                {about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </Section>

          {/* PROJECTS */}
          <Section title="Projects">
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.name} delayMs={index * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </Section>

          {/* SKILLS */}
          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Reveal
                  key={skill}
                  delayMs={index * 40}
                  className="inline-flex"
                >
                  <SkillPill label={skill} />
                </Reveal>
              ))}
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section title="Experience">
            <div className="space-y-6">
              {work.map((job, index) => (
                <Reveal key={`${job.company}-${job.role}`} delayMs={index * 100}>
                  <div className="card rounded-2xl p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-[color:var(--color-ink)]">
                        {job.role}
                      </h3>
                      <p className="text-sm text-[color:var(--color-muted)]">
                        {job.period}
                      </p>
                    </div>
                    <p className="text-[color:var(--color-ink)]">
                      {job.company}
                    </p>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-[color:var(--color-muted)]">
                      {job.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>

          {/* EDUCATION */}
          <Section title="Education">
            <div className="space-y-4">
              {education.map((e, index) => (
                <Reveal key={`${e.school}-${e.period}`} delayMs={index * 100}>
                  <div className="card rounded-2xl p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-[color:var(--color-ink)]">
                        {e.school}
                      </h3>
                      <p className="text-sm text-[color:var(--color-muted)]">
                        {e.period}
                      </p>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-[color:var(--color-muted)]">
                      {e.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
