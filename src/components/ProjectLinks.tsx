import { ExternalLink, Eye, MousePointerClick } from "lucide-react";
import type { ProjectLinks as Links } from "@/lib/projects";
import { MagneticButton } from "@/components/motion-primitives";

type Props = {
  links?: Links;
  accent?: string;
  size?: "sm" | "md";
  className?: string;
  /** stop link clicks from bubbling to a parent <Link> */
  stopPropagation?: boolean;
};

export function ProjectLinks({ links, accent = "#8B7CF6", size = "md", className = "", stopPropagation }: Props) {
  if (!links || (!links.caseStudy && !links.prototype)) return null;

  const pad = size === "sm" ? "px-4 py-2 text-xs" : "px-5 py-3 text-sm";
  const iconSize = size === "sm" ? "size-3.5" : "size-4";

  const stop = stopPropagation
    ? (e: React.MouseEvent) => e.stopPropagation()
    : undefined;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`} onClick={stop}>
      {links.caseStudy && (
        <MagneticButton
          href={links.caseStudy}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/5 ${pad} font-medium backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:shadow-[0_10px_40px_-10px_var(--accent-glow)]`}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `linear-gradient(120deg, ${accent}55, transparent 60%)`,
            }}
          />
          <Eye className={`${iconSize} transition-transform duration-300 group-hover:scale-110`} />
          <span>View UX Case Study</span>
          <ExternalLink className={`${iconSize} opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100`} />
        </MagneticButton>
      )}
      {links.prototype && (
        <MagneticButton
          href={links.prototype}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full ${pad} font-medium text-background transition-all duration-300 hover:shadow-[0_10px_40px_-10px_var(--accent-glow)]`}
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background: `linear-gradient(120deg, ${accent}, color-mix(in oklab, ${accent} 60%, black))`,
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `linear-gradient(120deg, color-mix(in oklab, ${accent} 80%, white), ${accent})`,
            }}
          />
          <MousePointerClick className={`${iconSize} transition-transform duration-300 group-hover:scale-110`} />
          <span>Interactive Prototype</span>
          <ExternalLink className={`${iconSize} opacity-80 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
        </MagneticButton>
      )}
    </div>
  );
}

export function BehanceButton({ className = "" }: { className?: string }) {
  return (
    <MagneticButton
      href="https://www.behance.net/srinivasan128"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:shadow-[0_10px_40px_-10px_rgba(20,113,255,0.5)] ${className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "linear-gradient(120deg, #1471FF66, transparent 60%)" }}
      />
      <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
        <path d="M8.7 6.5c1.5 0 2.7.3 3.5 1 .8.6 1.2 1.5 1.2 2.7 0 .8-.2 1.4-.6 1.9-.4.5-.9.9-1.6 1.2 1 .3 1.7.7 2.2 1.4.5.6.7 1.4.7 2.4 0 1.4-.5 2.5-1.4 3.2-.9.8-2.3 1.1-4 1.1H1V6.5h7.7Zm-.3 5.4c.6 0 1.1-.1 1.5-.4.4-.3.5-.7.5-1.3 0-.6-.2-1-.5-1.3-.4-.2-.9-.4-1.6-.4H4.4v3.4h4Zm.2 5.9c.7 0 1.3-.2 1.7-.5.4-.3.6-.9.6-1.5 0-.7-.2-1.2-.6-1.5-.4-.3-1-.5-1.7-.5H4.4v4h4.2ZM23 7.5v1.7h-6.7V7.5H23Zm-.4 8.5c.1.7-.1 1.2-.5 1.6-.4.4-.9.6-1.6.6-.9 0-1.5-.3-2-.8-.5-.6-.7-1.4-.7-2.5v-.2H23c0-1.7-.5-3-1.4-3.9-.9-1-2.2-1.5-3.8-1.5-1.6 0-2.9.5-3.8 1.5-.9 1-1.4 2.3-1.4 4s.5 3 1.4 4c.9.9 2.2 1.4 3.9 1.4 1.3 0 2.4-.3 3.3-.9.9-.6 1.4-1.4 1.6-2.4h-2.2Z" />
      </svg>
      <span>View Behance Portfolio</span>
      <ExternalLink className="size-4 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
    </MagneticButton>
  );
}
