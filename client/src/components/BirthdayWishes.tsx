import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function BirthdayWishes() {
  const reducedMotion = useReducedMotion();

  const content = (
    <>
      <h2 className="text-4xl md:text-6xl font-display font-light mb-8 text-foreground">
        To My Dearest <span className="italic text-primary">Birthday Girl</span>
      </h2>
      <div className="space-y-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto prose-width">
        <p>
          Today isn't just another day. It's the celebration of the moment the world became a much brighter place exactly 23 years ago.
        </p>
        <p className="font-serif italic text-foreground">
          May this year be as incredible as you are.
        </p>
      </div>
    </>
  );

  const wrapperClass = "max-w-[1000px] mx-auto px-4 py-16 md:py-20 text-center";

  if (reducedMotion) {
    return (
      <section className="relative bg-gradient-to-b from-white/80 to-secondary/5 py-24">
        <div className={wrapperClass}>{content}</div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-b from-white/80 to-secondary/5 py-24">
      <motion.div
        className={wrapperClass}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    </section>
  );
}
