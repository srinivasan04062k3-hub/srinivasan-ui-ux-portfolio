import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { PropsWithChildren, ReactNode } from "react";
import { useRef } from "react";

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  strength = 25,
  ...rest
}: PropsWithChildren<{
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  download?: string;
  target?: string;
  rel?: string;
}>) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 20 });
  const sy = useSpring(y, { stiffness: 300, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(((e.clientX - r.left) / r.width - 0.5) * strength);
    y.set(((e.clientY - r.top) / r.height - 0.5) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Inner = (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      data-cursor-hover
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} {...rest}>
        {Inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className="focus:outline-none">
      {Inner}
    </button>
  );
}

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(srx, (v) => `${v}deg`);
  const rotateY = useTransform(sry, (v) => `${v}deg`);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        rx.set(-py * 8);
        ry.set(px * 8);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 30,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SplitText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] pr-[0.25em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ---------- Blur → focus reveal (About) ---------- */
export function BlurReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Stagger container / item (Skills) ---------- */
export function Stagger({
  children,
  className = "",
  stagger = 0.07,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 26, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Image mask reveal (Work / case studies) ---------- */
export function MaskReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1.05, delay, ease: [0.76, 0, 0.24, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Ambient floating particles ---------- */
export function Particles({ count = 22 }: { count?: number }) {
  const dots = Array.from({ length: count }, (_, i) => {
    const seed = (i * 9301 + 49297) % 233280;
    const r = seed / 233280;
    return {
      left: `${(r * 100).toFixed(2)}%`,
      top: `${((r * 761) % 100).toFixed(2)}%`,
      size: 2 + ((i * 7) % 5),
      duration: 9 + ((i * 3) % 11),
      delay: (i % 7) * 0.8,
      opacity: 0.18 + ((i % 5) * 0.07),
    };
  });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden motion-reduce:hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size, opacity: d.opacity }}
          animate={{ y: [0, -40, 0], x: [0, 12, 0], opacity: [d.opacity, d.opacity * 2, d.opacity] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
