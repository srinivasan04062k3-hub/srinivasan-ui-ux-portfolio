import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type Ripple = { id: number; x: number; y: number };

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const rippleId = useRef(0);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.6 });
  const trailX = useSpring(x, { stiffness: 90, damping: 22, mass: 0.9 });
  const trailY = useSpring(y, { stiffness: 90, damping: 22, mass: 0.9 });
  const dotX = useSpring(x, { stiffness: 1200, damping: 60 });
  const dotY = useSpring(y, { stiffness: 1200, damping: 60 });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest?.("a, button, [data-cursor-hover]"));
    };
    const onDown = (e: MouseEvent) => {
      setPressed(true);
      const id = ++rippleId.current;
      setRipples((r) => [...r, { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => setRipples((r) => r.filter((i) => i.id !== id)), 650);
    };
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* soft glow trail */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9997] size-24 rounded-full opacity-40 blur-2xl"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          background: "color-mix(in oklab, var(--accent) 60%, transparent)",
        }}
      />

      {/* outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hover ? 62 : 34,
          height: hover ? 62 : 34,
          borderColor: hover
            ? "color-mix(in oklab, var(--accent) 90%, transparent)"
            : "color-mix(in oklab, var(--foreground) 45%, transparent)",
          backgroundColor: hover
            ? "color-mix(in oklab, var(--accent) 12%, transparent)"
            : "transparent",
          scale: pressed ? 0.82 : 1,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
      />

      {/* inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hover ? 5 : 7,
          height: hover ? 5 : 7,
          backgroundColor: hover ? "var(--accent)" : "var(--foreground)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* click ripples */}
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            aria-hidden
            initial={{ opacity: 0.55, scale: 0 }}
            animate={{ opacity: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none fixed z-[9996] size-24 rounded-full border-2"
            style={{
              left: r.x,
              top: r.y,
              translateX: "-50%",
              translateY: "-50%",
              borderColor: "color-mix(in oklab, var(--accent) 70%, transparent)",
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
