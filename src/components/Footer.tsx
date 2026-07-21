export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="font-display text-4xl font-medium tracking-tight md:text-5xl">
            Let's design<br />
            something<br />
            <span className="text-muted-foreground">that matters.</span>
            <span className="text-accent">.</span>
          </div>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            Open to junior UI/UX roles, internships, and freelance case-study
            collaborations starting 2026.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Contact</div>
          <a href="mailto:srinivasan.04062k3@gmail.com" className="block text-lg hover:text-accent">
            srinivasan.04062k3@gmail.com
          </a>
          <a href="tel:+919342784192" className="block text-lg hover:text-accent">
            +91 93427 84192
          </a>
        </div>

        <div className="space-y-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Elsewhere</div>
          {[
            { label: "Behance", href: "https://www.behance.net/srinivasan128" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/srinivasan-s-a44872291/" },
            { label: "Dribbble", href: "https://dribbble.com/" },
            { label: "Read.cv", href: "https://read.cv/" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between text-lg hover:text-accent"
            >
              <span>{l.label}</span>
              <span className="text-muted-foreground transition-transform group-hover:translate-x-1">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Giant wordmark */}
      <div aria-hidden className="pointer-events-none overflow-hidden px-2 pb-4 pt-8">
        <div className="text-center font-display font-medium leading-[0.85] tracking-[-0.05em] text-muted-foreground/15 text-[22vw]">
          SRINIVASAN
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border px-6 py-6 text-xs text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} Srinivasan S · Designed & built with obsession in Chennai.</div>
        <div>Made in Figma → shipped with Lovable</div>
      </div>
    </footer>
  );
}
