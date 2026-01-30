import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SectionProps {
  /** Optional section label (e.g. "The Woman I Love") */
  label?: string;
  /** Main heading */
  title: ReactNode;
  /** Optional subtitle/description */
  subtitle?: ReactNode;
  /** Card-style panel (rounded, shadow). Default true */
  card?: boolean;
  /** Max width: "narrow" (65ch) | "content" (1000px) | "wide" (1200px). Default "content" */
  maxWidth?: "narrow" | "content" | "wide";
  /** Extra class for the outer section */
  className?: string;
  /** Extra class for the inner container */
  containerClassName?: string;
  children: ReactNode;
}

const maxWidthClasses = {
  narrow: "max-w-3xl",
  content: "max-w-[1000px]",
  wide: "max-w-6xl",
};

/**
 * Reusable section: centered container, optional card panel, fade-in on scroll.
 * Respects prefers-reduced-motion.
 */
export function Section({
  label,
  title,
  subtitle,
  card = true,
  maxWidth = "content",
  className = "",
  containerClassName = "",
  children,
}: SectionProps) {
  const reducedMotion = useReducedMotion();

  const content = (
    <>
      {(label || title || subtitle) && (
        <header className="text-center mb-10 md:mb-14">
          {label && (
            <span className="block uppercase tracking-[0.2em] text-xs font-medium text-primary mb-2">
              {label}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </>
  );

  const containerClasses = `mx-auto px-4 py-16 md:py-20 ${maxWidthClasses[maxWidth]} ${containerClassName}`;
  const panelClasses = "rounded-[20px] p-8 md:p-12 bg-white/95 border border-primary/10 shadow-[0_4px_24px_rgba(255,92,138,0.08)]";

  const inner = card ? <div className={panelClasses}>{content}</div> : content;

  if (reducedMotion) {
    return (
      <section className={`relative ${className}`} data-section>
        <div className={containerClasses}>{inner}</div>
      </section>
    );
  }

  return (
    <section className={`relative ${className}`} data-section>
      <motion.div
        className={containerClasses}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {inner}
      </motion.div>
    </section>
  );
}
