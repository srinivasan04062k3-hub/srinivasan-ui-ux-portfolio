import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export function PageLoader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("loader:seen")) {
      setDone(true);
      return;
    }
    sessionStorage.setItem("loader:seen", "1");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 500 : 3000;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setProgress(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const letters = useMemo(() => "PORTFOLIO".split(""), []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.5em] text-muted-foreground">
            Srinivasan S
          </div>

          <h1 className="mt-6 font-display font-medium uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2.5rem, 11vw, 8rem)" }}>
            {letters.map((l, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: "0.5em" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {l}
              </motion.span>
            ))}
          </h1>

          <div className="mt-6 text-xs uppercase tracking-[0.35em] text-muted-foreground md:text-sm">
            UI/UX Designer
          </div>

          <div className="mt-10 h-px w-56 overflow-hidden bg-border md:w-80">
            <div
              className="h-full bg-accent"
              style={{ width: `${progress}%`, transition: "width 120ms linear" }}
            />
          </div>
          <div className="mt-3 text-xs tabular-nums text-muted-foreground">{progress}%</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
