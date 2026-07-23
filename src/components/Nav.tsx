import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/use-theme";

const SECTIONS = [
  { href: "#work", label: "Work", id: "work" },
  { href: "#about", label: "About", id: "about" },
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#process", label: "Process", id: "process" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
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
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
        aria-hidden
      >
        <div
          className="h-full w-full animate-gradient"
          style={{
            backgroundImage:
              "linear-gradient(90deg,#ff0080,#ff8c00,#ffee00,#00e676,#00e5ff,#3d5afe,#d500f9,#ff0080)",
            backgroundSize: "200% 100%",
          }}
        />
      </motion.div>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-3" : "py-5"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link to="/" className="group flex items-center gap-2">
            <div className="size-8 rounded-full bg-foreground text-background grid place-items-center font-display font-semibold">
              S
            </div>
            <span className="font-display text-sm font-medium tracking-tight">
              Srinivasan<span className="text-accent">.</span>
            </span>
          </Link>

          <nav className={`hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${scrolled ? "glass" : ""}`}>
            {SECTIONS.map((l) => {
              const isActive = active === l.id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid size-10 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-muted"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex"
            >
              Let's talk
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
}
