import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal, SplitText, MaskReveal } from "@/components/motion-primitives";
import { ProjectLinks } from "@/components/ProjectLinks";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return { project: p };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Case Study · Srinivasan S` },
        { name: "description", content: p.overview.slice(0, 155) },
        { property: "og:title", content: `${p.title} — Case Study` },
        { property: "og:description", content: p.overview.slice(0, 155) },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: CaseStudy,
  notFoundComponent: () => (
    <div className="grid min-h-dvh place-items-center bg-background">
      <div className="text-center">
        <div className="font-display text-6xl">404</div>
        <Link to="/" className="mt-4 inline-block text-accent">← Back home</Link>
      </div>
    </div>
  ),
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData() as { project: Project };
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const { scrollYProgress: heroP } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroP, [0, 1], [0, 200]);
  const heroScale = useTransform(heroP, [0, 1], [1, 1.15]);

  const nextIdx = projects.findIndex((x) => x.slug === p.slug) + 1;
  const next = projects[nextIdx % projects.length];

  return (
    <>
      <Nav />
      <motion.div style={{ width: progressWidth }} className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent" />

      <main id="main" tabIndex={-1} className="pt-24">
        {/* HERO BANNER */}
        <section ref={heroRef} className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-24">
            <Link to="/" className="mb-16 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="size-4" /> All work
            </Link>
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span>{p.category}</span>
              <span>·</span>
              <span>{p.year}</span>
              <span>·</span>
              <span>{p.duration}</span>
            </div>
            <h1 className="mt-6 font-display text-6xl font-medium leading-[0.95] tracking-[-0.03em] md:text-[9rem]">
              <SplitText text={p.title} />
            </h1>
            <p className="mt-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">{p.subtitle}</p>

            <ProjectLinks links={p.links} accent={p.color} className="mt-8" />

            <div className="mt-12 grid gap-6 border-t border-border pt-8 md:grid-cols-4">
              {[
                { k: "Role", v: p.role },
                { k: "Duration", v: p.duration },
                { k: "Year", v: p.year },
                { k: "Tools", v: p.tools.join(", ") },
              ].map((it) => (
                <div key={it.k}>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.k}</div>
                  <div className="mt-2 font-medium">{it.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto max-w-[100rem] px-6">
            <motion.div style={{ y: heroY }} className="overflow-hidden rounded-3xl border border-border" >
              <motion.img
                style={{ scale: heroScale }}
                src={p.image}
                alt={p.title}
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* OVERVIEW */}
        <Section title="Overview" eyebrow="01">
          <p className="text-2xl leading-relaxed text-pretty md:text-3xl">{p.overview}</p>
        </Section>

        {/* PROBLEM */}
        <Section title="Problem Statement" eyebrow="02">
          <div className="grid gap-6 md:grid-cols-2">
            <Card label="Business Problem" body={p.problem.business} />
            <Card label="User Problem" body={p.problem.user} />
          </div>
        </Section>

        {/* GOALS */}
        <Section title="Goals" eyebrow="03">
          <div className="grid gap-4 md:grid-cols-2">
            {p.goals.map((g, i) => (
              <Reveal key={g} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
                  <div className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-4" />
                  </div>
                  <div className="text-lg">{g}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* RESEARCH */}
        <Section title="Research" eyebrow="04">
          <div className="space-y-3">
            {p.research.map((r, i) => (
              <Reveal key={r} delay={i * 0.05}>
                <div className="flex items-baseline gap-6 border-b border-border py-6">
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <p className="flex-1 text-lg text-pretty">{r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PERSONAS */}
        <Section title="User Personas" eyebrow="05">
          <div className="grid gap-6 md:grid-cols-2">
            {p.personas.map((pr, i) => (
              <Reveal key={pr.name} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-surface p-8">
                  <div className="flex items-center gap-4">
                    <div className="size-14 rounded-full grid place-items-center font-display text-xl font-medium" style={{ background: p.color + "22", color: p.color }}>
                      {pr.name[0]}
                    </div>
                    <div>
                      <div className="font-display text-xl font-medium">{pr.name}</div>
                      <div className="text-sm text-muted-foreground">{pr.role}</div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4 text-sm">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">Goal</div>
                      <div className="mt-1 text-base">{pr.goal}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">Pain</div>
                      <div className="mt-1 text-base">{pr.pain}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* FEATURES / SOLUTION */}
        <Section title="Solution Highlights" eyebrow="06">
          <div className="grid gap-4 md:grid-cols-2">
            {p.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-surface p-8">
                  <div className="font-mono text-xs text-muted-foreground">Feature {String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-3 font-display text-2xl font-medium">{f.title}</div>
                  <p className="mt-3 text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROCESS */}
        <Section title="Design Process" eyebrow="07">
          <div className="grid gap-4 md:grid-cols-3">
            {p.process.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <div className="font-mono text-xs text-accent">Step {String(i + 1).padStart(2, "0")}</div>
                  <div className="mt-2 font-display text-xl font-medium">{s.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* SCREENS DEEP DIVE */}
        <Section title="Screens" eyebrow="08" wide>
          <div className="space-y-24">
            {p.screens.map((s, i) => (
              <MaskReveal key={s.title} delay={i * 0.05}>
                <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
                  <div className={i % 2 ? "md:order-2" : ""}>
                    <div className="font-mono text-xs text-muted-foreground">Screen {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="mt-2 font-display text-4xl font-medium tracking-tight">{s.title}</h3>
                    <div className="mt-8 space-y-6 text-lg">
                      <Detail label="Purpose" body={s.purpose} />
                      <Detail label="Design decisions" body={s.decisions} />
                      <Detail label="Interaction" body={s.interaction} />
                    </div>
                  </div>
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl border border-border ${i % 2 ? "md:order-1" : ""}`} style={{ background: p.color + "18" }}>
                    <motion.img
                      src={s.image ?? p.image}
                      alt={s.title}
                      loading="lazy"
                      className="size-full object-cover"
                      initial={{ scale: 1.06 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </MaskReveal>
            ))}
          </div>
        </Section>

        {/* DESIGN SYSTEM */}
        <Section title="Design System" eyebrow="09">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-surface p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Typography</div>
              <div className="mt-4 font-display text-3xl">{p.designSystem.typography}</div>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Colour Palette</div>
              <div className="mt-6 grid grid-cols-4 gap-3">
                {p.designSystem.colors.map((c) => (
                  <div key={c} className="flex flex-col gap-2">
                    <div className="aspect-square rounded-xl" style={{ background: c }} />
                    <div className="font-mono text-[10px] text-muted-foreground">{c}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-8">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Components</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.designSystem.components.map((c) => (
                  <span key={c} className="rounded-full border border-border px-3 py-1 text-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CHALLENGES / IMPACT */}
        <Section title="Challenges & Impact" eyebrow="10">
          <div className="grid gap-6 md:grid-cols-3">
            <ListCard title="Challenges" items={p.challenges} />
            <ListCard title="Impact" items={p.outcome} accent />
            <ListCard title="Key learnings" items={p.learnings} />
          </div>
        </Section>

        {/* FUTURE SCOPE */}
        <Section title="Future Scope" eyebrow="11">
          <div className="grid gap-4 md:grid-cols-2">
            {p.futureScope.map((f, i) => (
              <Reveal key={f} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-surface p-6 text-lg">
                  <span className="mr-2 font-mono text-xs text-accent">→</span> {f}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* NEXT PROJECT */}
        <section className="border-t border-border">
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group block"
            data-cursor-hover
          >
            <div className="mx-auto max-w-7xl px-6 py-24">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Next case study</div>
              <div className="mt-4 flex items-end justify-between gap-6">
                <div className="font-display text-6xl font-medium tracking-tight md:text-9xl">
                  {next.title}
                </div>
                <ArrowUpRight className="size-10 transition-transform group-hover:rotate-45 md:size-16" />
              </div>
              <div className="mt-4 text-lg text-muted-foreground">{next.subtitle}</div>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, eyebrow, children, wide }: { title: string; eyebrow: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <section className="border-t border-border">
      <div className={`mx-auto ${wide ? "max-w-7xl" : "max-w-6xl"} px-6 py-24`}>
        <Reveal>
          <div className="mb-12 flex items-baseline gap-6">
            <span className="font-mono text-xs text-muted-foreground">{eyebrow}</span>
            <h2 className="font-display text-4xl font-medium tracking-tight md:text-5xl">{title}</h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Card({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-8">
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <p className="mt-4 text-lg leading-relaxed text-pretty">{body}</p>
    </div>
  );
}

function Detail({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-pretty">{body}</div>
    </div>
  );
}

function ListCard({ title, items, accent }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div className={`rounded-3xl border p-8 ${accent ? "border-accent bg-accent/10" : "border-border bg-surface"}`}>
      <div className="font-display text-xl font-medium">{title}</div>
      <ul className="mt-6 space-y-4">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-sm leading-relaxed">
            <span className={`mt-2 size-1.5 shrink-0 rounded-full ${accent ? "bg-accent" : "bg-foreground"}`} /> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
