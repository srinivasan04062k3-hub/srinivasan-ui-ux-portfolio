import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Mail, MapPin } from "lucide-react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MagneticButton, Reveal, SplitText } from "@/components/motion-primitives";
import { ProjectLinks } from "@/components/ProjectLinks";
import { projects, assets } from "@/lib/projects";

import figmaLogo from "@/assets/tools/figma.png.asset.json";
import framerLogo from "@/assets/tools/framer.png.asset.json";
import notionLogo from "@/assets/tools/notion.png.asset.json";
import chatgptLogo from "@/assets/tools/chatgpt.png.asset.json";
import geminiLogo from "@/assets/tools/gemini.png.asset.json";
import claudeLogo from "@/assets/tools/claude.png.asset.json";
import lovableLogo from "@/assets/tools/lovable.png.asset.json";

const TITLE = "Srinivasan S. — UI/UX Designer";
const DESCRIPTION =
  "UI/UX Designer creating intuitive, accessible, and meaningful digital experiences. Based in Bengaluru, India.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://srinivasan-ui-ux-portfolio.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://srinivasan-ui-ux-portfolio.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Srinivasan S",
          jobTitle: "UI/UX Designer",
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
          email: "mailto:srinivasan.04062k3@gmail.com",
          sameAs: [
            "https://www.behance.net/srinivasan128",
            "https://www.linkedin.com/in/srinivasan-s-a44872291/",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const BEHANCE = "https://www.behance.net/srinivasan128";
const LINKEDIN = "https://www.linkedin.com/in/srinivasan-s-a44872291/";
const RESUME = "/Srinivasan_S_Resume.pdf";
const EMAIL = "srinivasan.04062k3@gmail.com";

const DISCIPLINES = [
  "UI/UX Design",
  "Product Design",
  "UX Research",
  "Interaction Design",
  "Visual Design",
  "Prototyping",
];

const SKILLS = [
  {
    group: "UX Design",
    items: [
      "User Research",
      "User Flows",
      "Information Architecture",
      "Personas",
      "Journey Mapping",
      "Wireframing",
      "Usability Testing",
    ],
  },
  {
    group: "UI Design",
    items: [
      "Visual Design",
      "Typography",
      "Color Systems",
      "Design Systems",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    group: "Prototyping",
    items: [
      "Low-Fidelity Wireframes",
      "High-Fidelity UI",
      "Interactive Prototypes",
      "Micro-interactions",
    ],
  },
  {
    group: "AI-Assisted Design",
    items: [
      "Generative AI",
      "AI-assisted Ideation",
      "AI-assisted Research",
      "AI-assisted Prototyping",
    ],
  },
];

const TOOLS: { name: string; logo?: string }[] = [
  { name: "Figma", logo: figmaLogo.url },
  { name: "FigJam" },
  { name: "Framer", logo: framerLogo.url },
  { name: "Photoshop" },
  { name: "Illustrator" },
  { name: "Notion", logo: notionLogo.url },
  { name: "Miro" },
  { name: "ChatGPT", logo: chatgptLogo.url },
  { name: "Gemini", logo: geminiLogo.url },
  { name: "Claude", logo: claudeLogo.url },
  { name: "Lovable", logo: lovableLogo.url },
];

const PROCESS = [
  { n: "01", t: "Discover", d: "Understand users, context and the problem." },
  { n: "02", t: "Define", d: "Identify pain points and design opportunities." },
  { n: "03", t: "Ideate", d: "Explore multiple solutions and concepts." },
  { n: "04", t: "Structure", d: "Create information architecture, user flows and wireframes." },
  { n: "05", t: "Design", d: "Create visual systems and high-fidelity interfaces." },
  { n: "06", t: "Prototype", d: "Build realistic interactive experiences." },
  { n: "07", t: "Test", d: "Identify usability issues and refine the design." },
  { n: "08", t: "Deliver", d: "Prepare polished UI, components and documentation." },
];

const EDUCATION = [
  {
    title: "Bachelor of Mechanical Engineering",
    place: "Sona College of Technology, Salem",
    time: "2021 – 2024",
  },
  {
    title: "Diploma in Mechanical Engineering",
    place: "Muthayammal Polytechnic College, Namakkal",
    time: "2018 – 2021",
  },
];

const UIUX_EDUCATION = [
  {
    title: "UI/UX Design Course",
    place: "Intellipaat",
    time: "December 2025 – July 2026",
  },
  {
    title: "Executive Post Graduate Certification in UI/UX Design with Generative AI and Agentic AI",
    place: "iHUB DivyaSampark, IIT Roorkee — certification",
    time: "Certification programme",
  },
];

const WHY = [
  { t: "User-Centered", d: "I focus on understanding users and their needs before designing solutions." },
  { t: "Problem Solver", d: "My engineering background helps me approach complex problems systematically." },
  { t: "Creative Thinker", d: "I explore multiple solutions before selecting the strongest direction." },
  { t: "AI-Assisted", d: "I use modern AI tools to accelerate exploration, ideation and design workflows." },
  { t: "Detail-Oriented", d: "I care about typography, spacing, hierarchy, accessibility and interaction details." },
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground text-pretty md:text-lg">{subtitle}</p>}
    </Reveal>
  );
}

function Home() {
  return (
    <>
      <PageLoader />
      <Nav />
      <ScrollToTop />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <About />
        <Process />
        <Skills />
        <Tools />
        <Education />
        <WhyMe />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium">
            <span className="size-2 rounded-full bg-accent" aria-hidden />
            Open to UI/UX &amp; Product Design Opportunities
          </div>

          <h1 className="mt-7 font-display text-[2.4rem] font-medium leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            <SplitText text="Hi, I'm Srinivasan" />
            <span className="mt-2 block text-muted-foreground">UI/UX Designer</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            I design intuitive, accessible, and meaningful digital experiences that solve real user
            problems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="#work"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-background transition-transform hover:scale-[1.02]"
            >
              View My Work <ArrowRight className="size-4" />
            </MagneticButton>
            <MagneticButton
              href={RESUME}
              download=""
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Download Resume <Download className="size-4" />
            </MagneticButton>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-2">
            {[
              { label: "LinkedIn", href: LINKEDIN, external: true },
              { label: "Behance", href: BEHANCE, external: true },
              { label: "Email", href: `mailto:${EMAIL}`, external: false },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {l.label}
                <ArrowUpRight className="size-3.5 text-muted-foreground" aria-hidden />
              </a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden /> Bengaluru, Karnataka, India
          </div>
        </div>

        <Reveal delay={0.15} className="justify-self-center lg:justify-self-end">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]">
              <img
                src={assets.profile}
                alt="Portrait of Srinivasan S, UI/UX Designer"
                className="h-[380px] w-[300px] object-cover md:h-[460px] md:w-[360px]"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)] md:block">
              <div className="eyebrow">Focus</div>
              <div className="mt-1 text-sm font-medium">Product &amp; Interaction Design</div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-y border-border py-5">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {DISCIPLINES.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Selected Case Studies ---------------- */
function Work() {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Work"
          title="Selected Case Studies"
          subtitle="Exploring real-world problems through research, UX thinking, interaction design and visual design."
        />

        <div className="mt-14 space-y-10 md:space-y-16">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[0_30px_70px_-40px_rgba(16,24,40,0.4)]">
                <div className="grid gap-0 lg:grid-cols-2">
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    aria-label={`View ${p.title} case study`}
                    className="relative block overflow-hidden bg-muted"
                  >
                    <img
                      src={p.image}
                      alt={`${p.title} — ${p.category} case study cover`}
                      loading="lazy"
                      className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] md:h-full md:min-h-[380px]"
                    />
                  </Link>

                  <div className="flex flex-col justify-center gap-5 p-6 md:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-display text-sm text-muted-foreground">Project {p.index}</span>
                      <span
                        className="rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em]"
                        style={{ background: `${p.color}1a`, color: p.color }}
                      >
                        {p.label}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight md:text-4xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.category}</p>
                    </div>

                    <p className="max-w-xl text-base text-muted-foreground text-pretty">{p.overview.split(". ")[0]}.</p>

                    <dl className="grid gap-x-6 gap-y-3 border-y border-border py-4 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="eyebrow">Role</dt>
                        <dd className="mt-1">{p.role}</dd>
                      </div>
                      <div>
                        <dt className="eyebrow">Project type</dt>
                        <dd className="mt-1">{p.label} · {p.year}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="eyebrow">Tools</dt>
                        <dd className="mt-1">{p.tools.join(" · ")}</dd>
                      </div>
                    </dl>

                    {p.outcome?.[0] && (
                      <p className="flex items-start gap-2 text-sm font-medium text-foreground">
                        <span
                          aria-hidden
                          className="mt-1.5 size-2 shrink-0 rounded-full"
                          style={{ background: p.color }}
                        />
                        <span>Outcome: {p.outcome[0]}</span>
                      </p>
                    )}

                    <ul className="flex flex-wrap gap-2">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <Link
                        to="/projects/$slug"
                        params={{ slug: p.slug }}
                        aria-label={`View ${p.title} case study in detail`}
                        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-background transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                      >
                        View Case Study <ArrowUpRight className="size-4" />
                      </Link>
                      <ProjectLinks links={p.links} accent={p.color} size="sm" stopPropagation />
                      {!p.links?.prototype && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                          <span aria-hidden className="size-1.5 rounded-full bg-muted-foreground/60" />
                          Concept / research-only
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-border bg-surface px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
        <SectionHeading eyebrow="About" title="From Engineering to UI/UX Design." />
        <Reveal delay={0.1} className="space-y-5 text-base text-muted-foreground text-pretty">
          <div className="flex items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground w-fit">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>
              <span className="font-semibold text-accent">Currently:</span>{" "}
              learning motion design & design systems, shipping concept case studies, and actively
              seeking junior UI/UX roles in Bengaluru.
            </span>
          </div>
          <p>
            I come from a Mechanical Engineering background, where I developed a structured approach
            to problem solving and understanding complex systems.
          </p>
          <p>
            My interest in digital products led me to transition into UI/UX Design. I now focus on
            understanding users, defining problems, creating user flows, designing interfaces and
            building interactive prototypes.
          </p>
          <p>
            I combine structured thinking with creativity to design simple and meaningful digital
            experiences.
          </p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {DISCIPLINES.map((d) => (
              <li key={d} className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground">
                {d}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="group mt-4 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background outline-none transition-[filter] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Let's connect — scroll to contact section"
          >
            Let's Connect
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  return (
    <section id="process" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Process" title="My Design Process" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04} className="bg-card">
              <div className="h-full p-7">
                <div className="font-display text-sm text-accent">{s.n}</div>
                <h3 className="mt-3 text-base font-semibold uppercase tracking-[0.12em]">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-border bg-surface px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="What I work on" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {s.group}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Tools ---------------- */
function Tools() {
  return (
    <section className="px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="eyebrow">Tools</div>
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="mt-6 flex flex-wrap gap-3">
            {TOOLS.map((t) => (
              <li
                key={t.name}
                className="flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-2.5 text-sm transition-transform hover:-translate-y-0.5"
              >
                {t.logo ? (
                  <span className="grid size-7 place-items-center overflow-hidden rounded-lg bg-white">
                    <img src={t.logo} alt="" aria-hidden className="size-5 object-contain" loading="lazy" />
                  </span>
                ) : (
                  <span className="grid size-7 place-items-center rounded-lg bg-muted text-[0.7rem] font-semibold">
                    {t.name.slice(0, 2)}
                  </span>
                )}
                {t.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Education ---------------- */
function Education() {
  return (
    <section className="border-y border-border bg-surface px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Education" title="Education & Certification" />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="eyebrow">Academic</h3>
            <div className="mt-5 space-y-4">
              {EDUCATION.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.05}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="text-base font-medium">{e.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{e.place}</div>
                    <div className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">{e.time}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <h3 className="eyebrow">UI/UX Education</h3>
            <div className="mt-5 space-y-4">
              {UIUX_EDUCATION.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.05}>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <div className="text-base font-medium text-pretty">{e.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{e.place}</div>
                    <div className="mt-3 text-xs uppercase tracking-[0.14em] text-muted-foreground">{e.time}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why me ---------------- */
function WhyMe() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why me" title="Why work with me?" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                <div className="h-1 w-10 rounded-full bg-accent" aria-hidden />
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.14em]">{w.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Resume CTA ---------------- */
function ResumeCTA() {
  return (
    <section id="resume" className="scroll-mt-24 px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto max-w-7xl rounded-3xl border border-border bg-foreground px-6 py-14 text-background md:px-14 md:py-20">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-medium tracking-tight text-balance md:text-5xl">
            Want to know more about my experience?
          </h2>
          <p className="mt-5 max-w-2xl text-base opacity-75 text-pretty">
            I'm currently looking for UI/UX Designer, Junior Product Designer and UI/UX Internship
            opportunities where I can learn, contribute and grow with a product team.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={RESUME}
              download
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Download Resume <Download className="size-4" />
            </a>
            <a
              href={RESUME}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-background/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-background/10"
            >
              View Resume <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Have a project, opportunity, or idea?"
            subtitle="Let's create something meaningful together."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-background transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Email Me <Mail className="size-4" aria-hidden />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              LinkedIn <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
        <Reveal delay={0.1} className="space-y-3">

          {[
            { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, icon: true },
            { label: "LinkedIn", value: "linkedin.com/in/srinivasan-s", href: LINKEDIN },
            { label: "Behance", value: "behance.net/srinivasan128", href: BEHANCE },
            { label: "Phone", value: "+91 93427 84192", href: "tel:+919342784192", icon: false },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.icon ? {} : { target: "_blank", rel: "noreferrer" })}
              className="flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-4 transition-colors hover:bg-muted"
            >
              <span className="flex items-center gap-3">
                {c.icon && <Mail className="size-4 text-muted-foreground" aria-hidden />}
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">{c.label}</span>
                  <span className="block break-all text-sm md:text-base">{c.value}</span>
                </span>
              </span>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" aria-hidden />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
