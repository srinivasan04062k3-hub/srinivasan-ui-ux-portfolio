import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MagneticButton, Reveal } from "@/components/motion-primitives";
import { projects, assets } from "@/lib/projects";

import figmaLogo from "@/assets/tools/figma.png.asset.json";
import framerLogo from "@/assets/tools/framer.png.asset.json";
import notionLogo from "@/assets/tools/notion.png.asset.json";
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

const FEATURED_ORDER = ["rapido-ambulance", "spatial-living", "savesmart", "meetmind-ai"];

const SKILLS = [
  "UX Research",
  "User Flows",
  "Information Architecture",
  "Wireframing",
  "Interaction Design",
  "Visual Design",
  "Prototyping",
  "Usability Testing",
  "Accessibility",
  "Design Systems",
];

const TOOLS: { name: string; logo?: string }[] = [
  { name: "Figma", logo: figmaLogo.url },
  { name: "FigJam" },
  { name: "Framer", logo: framerLogo.url },
  { name: "Notion", logo: notionLogo.url },
  { name: "Miro" },
  { name: "Lovable", logo: lovableLogo.url },
  { name: "AI tools" },
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
  { t: "Problem-first", d: "I frame the problem and the user need before opening Figma." },
  { t: "Systematic thinker", d: "An engineering background gives me a structured way to break down complexity." },
  { t: "User-focused", d: "I keep the user and their context at the center of every design decision." },
  { t: "Accessibility-minded", d: "Contrast, tap targets, focus states and readable hierarchy by default." },
  { t: "Continuous learner", d: "Currently deepening design systems, motion and product thinking." },
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
        <Skills />
        <Tools />
        <Education />
        <WhyMe />
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
          <h1 className="font-display text-[2.4rem] font-medium leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
            Srinivasan S
            <span className="mt-2 block text-muted-foreground">UI/UX Designer</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            I design clear digital experiences for complex problems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton
              href="#work"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-background transition-transform hover:scale-[1.02]"
            >
              View Work <ArrowRight className="size-4" />
            </MagneticButton>
            <MagneticButton
              href={RESUME}
              download="Srinivasan_S_Resume.pdf"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Download Resume <Download className="size-4" />
            </MagneticButton>
          </div>
        </div>

        <Reveal delay={0.15} className="justify-self-center lg:justify-self-end">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow-card)]">
            <img
              src={assets.profile}
              alt="Portrait of Srinivasan S, UI/UX Designer"
              className="h-[380px] w-[300px] object-cover md:h-[460px] md:w-[360px]"
              loading="eager"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Selected Work ---------------- */
function Work() {
  const featured = FEATURED_ORDER.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <section id="work" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Work" title="Selected Work" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p!.slug} delay={i * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[0_30px_70px_-40px_rgba(16,24,40,0.4)]">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p!.slug }}
                  aria-label={`View ${p!.title} case study`}
                  className="relative block overflow-hidden bg-surface"
                >
                  <img
                    src={p!.image}
                    alt={`${p!.title} — ${p!.category} case study cover`}
                    loading="lazy"
                    className="h-48 w-full object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="font-display text-sm text-muted-foreground">Project {p!.index}</div>
                    <h3 className="mt-3 font-display text-xl font-medium tracking-tight md:text-2xl">
                      {p!.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p!.category}</p>
                  </div>

                  <Link
                    to="/projects/$slug"
                    params={{ slug: p!.slug }}
                    aria-label={`View ${p!.title} case study in detail`}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-background transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    Case Study <ArrowUpRight className="size-4" />
                  </Link>
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
        <SectionHeading eyebrow="About" title="Problem-first UI/UX designer." />
        <Reveal delay={0.1} className="space-y-5 text-base text-muted-foreground text-pretty">
          <p>
            A problem-first UI/UX designer who starts with user needs, business context, and clear
            goals before moving to pixels.
          </p>
          <p>
            Mechanical Engineering background gives me a structured, analytical approach to breaking
            down complex problems into simple, usable interfaces.
          </p>
          <p>
            Currently focused on product design, UX research, and interaction design — building
            concept case studies and shipping thoughtful digital experiences.
          </p>
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

/* ---------------- Skills ---------------- */
function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="Skills" />
        <div className="mt-12 flex flex-wrap gap-3">
          {SKILLS.map((s, i) => (
            <Reveal key={s} delay={i * 0.03}>
              <span className="inline-flex rounded-full border border-border bg-card px-5 py-2.5 text-sm">
                {s}
              </span>
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
    <section className="border-y border-border bg-surface px-5 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="eyebrow">Tools I use</div>
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
                    {t.name.charAt(0)}
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
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Education & Certification" title="Education & Certification" />
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
    <section className="border-y border-border bg-surface px-5 py-20 md:px-8 md:py-28">
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

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's create something meaningful together."
            subtitle="Available for: UI/UX Designer, Junior Product Designer, UI/UX Internship"
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
            <a
              href={BEHANCE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Behance <ArrowUpRight className="size-4" aria-hidden />
            </a>
            <a
              href={RESUME}
              download="Srinivasan_S_Resume.pdf"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Resume <Download className="size-4" aria-hidden />
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
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
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
