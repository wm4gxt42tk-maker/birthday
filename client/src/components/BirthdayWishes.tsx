import { motion } from "framer-motion";

export function BirthdayWishes() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.05),transparent)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-light mb-8 text-foreground">
            To My Dearest <span className="italic text-primary">Birthday Girl</span>
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            <p>
              Today isn't just another day. It's the celebration of the moment the world became a much brighter place exactly 23 years ago.
            </p>
            <p className="font-serif italic text-foreground">
              May this year be as incredible as you are.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
