import { Container } from "@/component/Container";
import { Footer } from "@/component/Footer";
import { Navbar } from "@/component/Navbar";
import { ProjectCard } from "@/component/ProjectCard";
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
      <main>
        <Container>
          {/* HERO */}
          <section className="py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-[160px_1fr] md:items-center">
              <div className="flex justify-center md:justify-start">
                <div className="relative h-40 w-40 overflow-hidden ">
                  <Image
                    src={person.headshotSrc}
                    alt={`${person.fullName} headshot`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-neutral-600">{person.location}</p>
                <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {person.fullName}
                </h1>
                <p className="text-lg text-neutral-700">{hero.headline}</p>
                <p className="text-neutral-600">{hero.subheadline}</p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                    href={person.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                  <a
                    className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
                    href={`mailto:${contact.email}`}
                  >
                    Email
                  </a>
                  <a
                    className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
                    href={contact.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>

                <div className="text-sm text-neutral-600">
                  <span className="mr-3">📧 {contact.email}</span>
                  {contact.phone ? <span>📱 {contact.phone}</span> : null}
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <Section title="About">
            <div className="space-y-4 text-neutral-700">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Section>

          {/* PROJECTS */}
          <Section title="Projects">
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </Section>

          {/* SKILLS */}
          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <SkillPill key={skill} label={skill} />
              ))}
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section title="Experience">
            <div className="space-y-6">
              {work.map((job) => (
                <div
                  key={`${job.company}-${job.role}`}
                  className="rounded-2xl border border-neutral-200 p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-sm text-neutral-600">{job.period}</p>
                  </div>
                  <p className="text-neutral-700">{job.company}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-700">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* EDUCATION */}
          <Section title="Education">
            <div className="space-y-4">
              {education.map((e) => (
                <div
                  key={`${e.school}-${e.period}`}
                  className="rounded-2xl border border-neutral-200 p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{e.school}</h3>
                    <p className="text-sm text-neutral-600">{e.period}</p>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-700">
                    {e.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
