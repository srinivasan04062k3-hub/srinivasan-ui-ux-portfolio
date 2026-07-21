import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="font-display text-5xl font-medium tracking-[-0.04em] md:text-8xl">
              <span className="text-foreground">SRINIVASAN</span>
              <span className="text-accent"> S.</span>
            </div>

            <div className="h-px w-48 overflow-hidden bg-border">
              <motion.div
                className="h-full bg-foreground"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="font-mono text-xs tabular-nums text-muted-foreground">
              {String(progress).padStart(3, "0")} / 100
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
