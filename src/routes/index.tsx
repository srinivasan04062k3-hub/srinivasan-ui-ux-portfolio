import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  Sparkles,
  Palette,
  Layers,
  Search,
  Wrench,
  Cpu,
  Grid3x3,
} from "lucide-react";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MagneticButton, Reveal, SplitText, TiltCard } from "@/components/motion-primitives";
import { ProjectLinks, BehanceButton } from "@/components/ProjectLinks";
import { projects, assets } from "@/lib/projects";


export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <PageLoader />
      <Nav />
      <main className="relative overflow-x-clip">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Practice />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />

    </>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-32 pb-16"
    >
      {/* Animated multi-color aurora background + light rays + noise */}
      <div className="aurora-bg light-rays noise absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,transparent,var(--background))]" />


      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Available for junior UI/UX roles · 2026
        </div>

        <h1 className="font-display text-[15vw] font-medium leading-[0.95] tracking-[-0.04em] text-balance md:text-[9rem]">
          <SplitText text="Designing" />
          <br />
          <span className="italic text-muted-foreground"><SplitText text="thoughtful" /></span>
          <br />
          <SplitText text="experiences." />
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal delay={0.8}>
            <p className="max-w-xl text-lg text-muted-foreground text-pretty md:text-xl">
              Hi, I'm <span className="text-foreground">Srinivasan S</span> — a UI/UX designer
              solving real-world problems through user-centered design, motion, and a genuine
              obsession with craft.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background"
              >
                View case studies <ArrowDown className="size-4" />
              </MagneticButton>
              <MagneticButton
                href="/Srinivasan_S_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-medium"
              >
                Resume <Download className="size-4" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-medium hover:bg-muted"
              >
                Contact
              </MagneticButton>
              <BehanceButton />
            </div>
          </Reveal>
        </div>
      </motion.div>

      {/* Floating profile card — portrait with orbiting info badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute right-[3%] top-[9%] hidden md:block"
      >
        <div className="animate-float relative">
          <div className="absolute -inset-12 rounded-[2.5rem] bg-accent/30 blur-3xl" />
          <div className="relative aspect-[4/5] w-[22rem] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-2xl lg:w-[26rem]">
            <img src={assets.profile} alt="Srinivasan S portrait" className="size-full object-cover" />
          </div>

          {/* Floating pill — top-left */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute -left-6 -top-4 flex items-center gap-3 rounded-full border border-border bg-background/95 px-4 py-2.5 shadow-xl backdrop-blur"
          >
            <div className="grid size-9 place-items-center rounded-full bg-[#6366F1] text-white">
              <Palette className="size-4" />
            </div>
            <div className="pr-1">
              <div className="text-sm font-semibold leading-tight">Design Systems</div>
              <div className="text-[11px] text-muted-foreground leading-tight">Figma · Variants</div>
            </div>
          </motion.div>

          {/* Floating pill — bottom-right */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="absolute -bottom-4 -right-6 flex items-center gap-3 rounded-full border border-border bg-background/95 px-4 py-2.5 shadow-xl backdrop-blur"
          >
            <div className="grid size-9 place-items-center rounded-full bg-foreground text-background">
              <Search className="size-4" />
            </div>
            <div className="pr-1">
              <div className="text-sm font-semibold leading-tight">User Research</div>
              <div className="text-[11px] text-muted-foreground leading-tight">Interviews · Maze</div>
            </div>
          </motion.div>

          {/* Role tag centered under photo */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background whitespace-nowrap shadow-xl">
            UI/UX Designer
          </div>
        </div>
      </motion.div>


      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
        >
          Scroll
          <div className="h-8 w-px bg-border" />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = [
    "Product Design",
    "UX Research",
    "Design Systems",
    "Motion",
    "Prototyping",
    "Accessibility",
    "AR / VR",
    "AI Interfaces",
  ];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-6">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-8 px-8 font-display text-3xl font-medium tracking-tight md:text-5xl">
            <span>{it}</span>
            <span className="text-accent">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-32">
      <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</div>
            <div className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight">
              A designer<br />with a<br /><span className="italic text-muted-foreground">researcher's</span><br />mind.
            </div>
          </Reveal>
        </div>

        <div className="space-y-10 text-lg leading-relaxed text-pretty md:text-xl">
          <Reveal>
            <p>
              I began in the sciences, learning to interrogate assumptions before touching a
              single deliverable. That instinct now shapes every product I design — I don't
              start with pixels, I start with <span className="text-foreground">why this, why now, for whom.</span>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground">
              My work lives at the intersection of <span className="text-foreground">human-centered research</span>,
              <span className="text-foreground"> systems thinking</span>, and{" "}
              <span className="text-foreground">AI-powered workflows</span>. I care deeply about
              accessibility, motion that means something, and interfaces that respect the person
              on the other side of the screen.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { k: "Based in", v: "Chennai, India" },
                { k: "Focus", v: "Product · Motion · Systems" },
                { k: "Tools", v: "Figma, Framer, Rive, Spline" },
                { k: "Currently", v: "Building case-study portfolio" },
              ].map((it) => (
                <div key={it.k} className="border-t border-border pt-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{it.k}</div>
                  <div className="mt-1 text-base font-medium">{it.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  const groups = [
    { icon: Search, title: "UX Research", items: ["Interviews", "Usability testing", "Journey mapping", "Personas", "Competitive audit"] },
    { icon: Palette, title: "UI Design", items: ["Visual systems", "Iconography", "Motion", "Typography", "Colour"] },
    { icon: Layers, title: "Design Systems", items: ["Tokens", "Components", "Auto Layout", "Documentation", "Governance"] },
    { icon: Cpu, title: "AI Tools", items: ["GPT for research synth", "Midjourney", "Runway", "Uizard", "Galileo"] },
    { icon: Grid3x3, title: "Prototyping", items: ["Figma", "Framer", "ProtoPie", "Rive", "Spline"] },
    { icon: Wrench, title: "Tools", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Notion, Miro"] },
  ];
  return (
    <section id="skills" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Skills</div>
              <h2 className="mt-4 font-display text-5xl font-medium tracking-tight md:text-6xl">
                A generalist's toolkit<br /><span className="text-muted-foreground italic">with specialist depth.</span>
              </h2>
            </div>
            <div className="max-w-sm text-muted-foreground">
              I move fluidly between research, systems and motion — and pair every artefact
              with the thinking behind it.
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <TiltCard className="group relative h-full rounded-3xl border border-border bg-background p-8 transition-shadow hover:shadow-2xl">
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity group-hover:opacity-100" style={{ background: `radial-gradient(600px circle at var(--x,50%) var(--y,50%), color-mix(in oklab, var(--accent) 12%, transparent), transparent 40%)` }} />
                <g.icon className="size-6 text-accent" />
                <div className="mt-8 font-display text-2xl font-medium">{g.title}</div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {g.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="size-1 rounded-full bg-accent" /> {it}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Tools — brand logos strip */}
        <Reveal delay={0.1}>
          <div className="mt-20 rounded-3xl border border-border bg-background p-8 md:p-10">
            <div className="mb-8 flex items-baseline justify-between gap-4">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tools I use daily</div>
              <div className="hidden text-xs text-muted-foreground sm:block">Design · Prototype · Ship</div>
            </div>
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {[
                { name: "Figma", slug: "figma", color: "F24E1E" },
                { name: "Framer", slug: "framer", color: "0055FF" },
                { name: "Rive", slug: "rive", color: "1D1D1D" },
                { name: "Spline", slug: "spline", color: "F24E1E" },
                { name: "Photoshop", slug: "adobephotoshop", color: "31A8FF" },
                { name: "Illustrator", slug: "adobeillustrator", color: "FF9A00" },
                { name: "After Effects", slug: "adobeaftereffects", color: "9999FF" },
                { name: "Notion", slug: "notion", color: "111111" },
                { name: "Miro", slug: "miro", color: "FFD02F" },
                { name: "Maze", slug: "maze", color: "635BFF" },
                { name: "ProtoPie", slug: "protopie", color: "6A2AF7" },
                { name: "Lottie", slug: "lottiefiles", color: "00DDB3" },
                { name: "GitHub", slug: "github", color: "111111" },
                { name: "VS Code", slug: "visualstudiocode", color: "007ACC" },
                { name: "Webflow", slug: "webflow", color: "146EF5" },
                { name: "Behance", slug: "behance", color: "1769FF" },
              ].map((t) => (
                <div
                  key={t.name}
                  data-cursor-hover
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-transparent p-4 transition-all hover:-translate-y-1 hover:border-border hover:bg-surface hover:shadow-lg"
                >
                  <div className="grid size-12 place-items-center">
                    <img
                      src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                      alt={t.name}
                      loading="lazy"
                      className="size-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    {t.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- WORK ---------- */
function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-32">
      <Reveal>
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected Work · {projects.length} case studies</div>
            <h2 className="mt-4 font-display text-5xl font-medium tracking-tight md:text-7xl">
              Case studies,<br /><span className="italic text-muted-foreground">not screenshots.</span>
            </h2>
          </div>
          <Sparkles className="hidden size-8 text-accent md:block" />
        </div>
      </Reveal>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <div
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface"
              data-cursor-hover
            >
              <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
                <div className="flex flex-col justify-between gap-10 p-8 md:p-12">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{p.index} / {String(projects.length).padStart(2,"0")}</span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{p.category}</span>
                  </div>
                  <div>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="block"
                    >
                      <div className="font-display text-4xl font-medium tracking-tight md:text-6xl">{p.title}</div>
                      <p className="mt-4 max-w-md text-muted-foreground">{p.subtitle}</p>
                    </Link>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-border px-3 py-1 text-xs">{p.year}</span>
                      <span className="rounded-full border border-border px-3 py-1 text-xs">{p.role}</span>
                      <span className="rounded-full border border-border px-3 py-1 text-xs">{p.duration}</span>
                    </div>
                    <ProjectLinks links={p.links} accent={p.color} size="sm" className="mt-6" />
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-transform hover:translate-x-1"
                    >
                      Read case study <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                    </Link>
                  </div>
                </div>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="relative aspect-[4/3] overflow-hidden md:aspect-auto"
                  style={{ background: p.color + "18" }}
                >
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 size-full object-cover"
                    initial={{ scale: 1.05 }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- PRACTICE ---------- */
function Practice() {
  const tiles: { title: string; tag: string; h: string; img?: string; href?: string }[] = [
    { title: "Onboarding sequence", tag: "Motion study", h: "h-72", img: projects[0]?.screens[0]?.image },
    { title: "Analytics dashboard", tag: "Data-heavy UI", h: "h-96", img: projects[1]?.screens[0]?.image },
    { title: "Wallet card pull", tag: "Micro-interaction", h: "h-64", img: projects[1]?.screens[2]?.image },
    { title: "AR measure tool", tag: "Spatial", h: "h-80", img: projects[2]?.screens[1]?.image },
    { title: "Voice input pattern", tag: "Multi-modal", h: "h-60", img: projects[3]?.screens[1]?.image },
    { title: "Empty-state kit", tag: "Illustration", h: "h-72", img: projects[3]?.screens[2]?.image },
  ];
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="columns-2 gap-4 md:columns-3">
          {tiles.map((t, i) => {
            const Tag: any = t.href ? "a" : "div";
            const tagProps = t.href ? { href: t.href, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <Reveal key={t.title} delay={i * 0.04} className="mb-4 break-inside-avoid">
                <Tag
                  {...tagProps}
                  className={`group relative block overflow-hidden rounded-2xl border border-border ${t.h}`}
                  data-cursor-hover
                >
                  {t.img ? (
                    <img src={t.img} alt={t.title} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, color-mix(in oklab, var(--accent) ${10 + (i*7)%25}%, var(--surface)), var(--surface))` }} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                    <div>
                      <div className="text-sm font-medium text-white">{t.title}</div>
                      <div className="text-xs text-white/70">{t.tag}</div>
                    </div>
                    <ArrowUpRight className="size-4 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { k: "01", t: "Empathize", d: "Interviews, shadowing, diary studies to understand the real problem." },
    { k: "02", t: "Define", d: "Synthesize into personas, jobs-to-be-done and a sharp problem statement." },
    { k: "03", t: "Research", d: "Competitive audits, opportunity mapping, technical constraints." },
    { k: "04", t: "Ideate", d: "Sketching, storyboards, Crazy 8s — quantity to reach quality." },
    { k: "05", t: "Wireframe", d: "Low & mid fidelity to test flow, hierarchy and information architecture." },
    { k: "06", t: "Prototype", d: "High-fidelity, motion-rich prototypes tested with real users." },
    { k: "07", t: "Test", d: "Usability testing, task success, SUS scoring, iteration." },
    { k: "08", t: "Deliver", d: "Design system, spec, motion guidelines, dev handoff." },
  ];
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-32">
      <Reveal>
        <div className="mb-20 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Process</div>
            <h2 className="mt-4 font-display text-5xl font-medium tracking-tight md:text-7xl">
              How I<br /><span className="italic text-muted-foreground">actually work.</span>
            </h2>
          </div>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute left-[19px] top-0 h-full w-px bg-border md:left-1/2" />
        <div className="space-y-8">
          {steps.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.04}>
              <div className={`grid gap-6 md:grid-cols-2 md:items-center ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                <div className="relative pl-14 md:pl-0">
                  <div className="absolute left-0 top-1 size-10 rounded-full bg-foreground text-background grid place-items-center font-mono text-xs md:left-1/2 md:-translate-x-1/2">
                    {s.k}
                  </div>
                  <div className={`rounded-3xl border border-border bg-surface p-8 ${i % 2 ? "md:mr-16" : "md:ml-16"}`}>
                    <div className="font-display text-2xl font-medium">{s.t}</div>
                    <div className="mt-2 text-muted-foreground">{s.d}</div>
                  </div>
                </div>
                <div />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-surface">
      <div className="aurora-bg absolute inset-0 -z-10 opacity-80" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
          <h2 className="mt-4 font-display text-6xl font-medium tracking-tight md:text-8xl">
            Have a project<br />in mind?<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            I'm currently open to junior UI/UX roles, internships and freelance case-study
            collaborations. The fastest way to reach me is email.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:srinivasan.04062k3@gmail.com" className="group flex items-center gap-4 border-b border-border pb-4">
              <Mail className="size-5 text-accent" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="text-lg font-medium group-hover:text-accent">srinivasan.04062k3@gmail.com</div>
              </div>
            </a>
            <a href="tel:+919342784192" className="group flex items-center gap-4 border-b border-border pb-4">
              <Phone className="size-5 text-accent" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                <div className="text-lg font-medium group-hover:text-accent">+91 93427 84192</div>
              </div>
            </a>
            <a href="https://www.behance.net/srinivasan128" target="_blank" rel="noreferrer" className="group flex items-center gap-4 border-b border-border pb-4">
              <ArrowUpRight className="size-5 text-accent" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Behance</div>
                <div className="text-lg font-medium group-hover:text-accent">behance.net/srinivasan128</div>
              </div>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            className="rounded-3xl border border-border bg-background p-8 shadow-xl md:p-10"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const fd = new FormData(form);
              const subject = encodeURIComponent(`Portfolio enquiry from ${fd.get("name")}`);
              const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
              window.location.href = `mailto:srinivasan.04062k3@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="font-display text-xl">Send a message</div>
            <div className="mt-6 space-y-5">
              {[
                { name: "name", label: "Your name", type: "text" },
                { name: "email", label: "Email", type: "email" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</span>
                  <input required name={f.name} type={f.type} className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-accent" />
                </label>
              ))}
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
                <textarea required name="message" rows={4} className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-accent" />
              </label>
            </div>
            <button type="submit" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]">
              Send message <ArrowUpRight className="size-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
