export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <div className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Let's create something meaningful.
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">
            Open to UI/UX Designer, Junior Product Designer and UI/UX internship
            opportunities. Based in Bengaluru, Karnataka, India.
          </p>
        </div>

        <div className="space-y-3">
          <div className="eyebrow">Contact</div>
          <a href="mailto:srinivasan.04062k3@gmail.com" className="block hover:underline">
            srinivasan.04062k3@gmail.com
          </a>
          <a href="tel:+919342784192" className="block hover:underline">
            +91 93427 84192
          </a>
        </div>

        <div className="space-y-3">
          <div className="eyebrow">Elsewhere</div>
          {[
            { label: "Behance", href: "https://www.behance.net/srinivasan128" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/srinivasan-s-a44872291/" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between hover:underline"
            >
              <span>{l.label}</span>
              <span className="text-muted-foreground transition-transform group-hover:translate-x-1">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-border px-5 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
        <div>Srinivasan S. — UI/UX Designer</div>
        <div>Designed &amp; built with Figma + Lovable.</div>
      </div>
    </footer>
  );
}
