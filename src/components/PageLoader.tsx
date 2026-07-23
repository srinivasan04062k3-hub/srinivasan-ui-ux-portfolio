import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function PageLoader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  // Skip on repeat visits
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("loader:seen")) {
      setDone(true);
      return;
    }
    sessionStorage.setItem("loader:seen", "1");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 800 : 4000;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      // ease-out
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const letters = useMemo(() => "PORTFOLIO".split(""), []);

  // Circular progress
  const R = 42;
  const C = 2 * Math.PI * R;
  const offset = C - (progress / 100) * C;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="aurora-bg noise fixed inset-0 z-[10000] flex flex-col items-center justify-center overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Floating particles */}
          <div className="pointer-events-none absolute inset-0">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute size-1 rounded-full bg-accent/60"
                initial={{
                  x: `${(i * 37) % 100}%`,
                  y: `${(i * 53) % 100}%`,
                  opacity: 0,
                }}
                animate={{
                  y: [`${(i * 53) % 100}%`, `${((i * 53) % 100) - 10}%`],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4 + (i % 5),
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Radial glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center gap-10 px-6">
            {/* Top text */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-xs font-bold uppercase text-muted-foreground md:text-sm"
              style={{ letterSpacing: "0.5rem" }}
            >
              SRINIVASAN
            </motion.div>

            {/* Hero PORTFOLIO */}
            <motion.h1
              className="font-display font-extrabold uppercase leading-none tracking-tight text-transparent"
              style={{
                fontSize: "clamp(3.5rem, 15vw, 11rem)",
                backgroundImage:
                  "linear-gradient(110deg, var(--foreground) 0%, var(--foreground) 35%, var(--accent) 50%, var(--foreground) 65%, var(--foreground) 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 24px color-mix(in oklab, var(--accent) 30%, transparent))",
              }}
              animate={{
                backgroundPosition: ["200% 0%", "-200% 0%"],
                scale: [1, 1.015, 1],
              }}
              transition={{
                backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {letters.map((l, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ opacity: 0, y: "0.6em", filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.25 + i * 0.06,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </motion.h1>

            {/* Bottom text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 0.7, 1] }}
              transition={{ delay: 0.8, duration: 2.2, times: [0, 0.3, 0.7, 1], repeat: Infinity, repeatType: "reverse" }}
              className="font-display text-base uppercase text-muted-foreground md:text-xl"
              style={{ letterSpacing: "0.4rem" }}
            >
              UI/UX DESIGNER
            </motion.div>

            {/* Circular progress */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative mt-4 grid place-items-center"
            >
              <svg width="110" height="110" viewBox="0 0 110 110" className="-rotate-90">
                <circle
                  cx="55"
                  cy="55"
                  r={R}
                  stroke="color-mix(in oklab, var(--foreground) 12%, transparent)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="55"
                  cy="55"
                  r={R}
                  stroke="var(--accent)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={C}
                  strokeDashoffset={offset}
                  style={{
                    filter: "drop-shadow(0 0 6px color-mix(in oklab, var(--accent) 70%, transparent))",
                    transition: "stroke-dashoffset 120ms linear",
                  }}
                />
              </svg>
              <div className="absolute font-mono text-sm tabular-nums text-foreground">
                {String(progress).padStart(3, "0")}%
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
