import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/use-theme";

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
          <span className="font-display text-sm font-medium tracking-tight">Srinivasan<span className="text-accent">.</span></span>
        </Link>

        <nav className={`hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex ${scrolled ? "glass" : ""}`}>
          {[
            { href: "#work", label: "Work" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#process", label: "Process" },
            { href: "#contact", label: "Contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
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
  );
}
