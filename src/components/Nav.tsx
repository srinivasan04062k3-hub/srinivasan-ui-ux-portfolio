import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/lib/use-theme";

const SECTIONS = [
  { href: "#work", label: "Work", id: "work" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#resume", label: "Resume", id: "resume" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: progress }}
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent"
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : ""
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#main"
            className="font-display text-sm font-semibold tracking-[0.16em] uppercase rounded-full px-1 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Srinivasan S
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {SECTIONS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={active === l.id ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  active === l.id
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle colour theme"
              className="grid size-11 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-foreground px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-background transition-transform hover:scale-[1.03] md:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Let's Connect
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="grid size-11 place-items-center rounded-full border border-border bg-surface md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden"
          >
            {SECTIONS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active === l.id ? "true" : undefined}
                className="block border-b border-border py-4 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3.5 text-sm font-semibold text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Let's Connect
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
