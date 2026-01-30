import { motion } from "framer-motion";
import { MessageCircle, Award, Clock, TrendingUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const stats = [
  { icon: MessageCircle, label: "Total Messages", value: "Uncountable", sub: "too many to count" },
  { icon: Award, label: "Top Sender", value: "Bidit 😉", sub: "86,021 messages" },
  { icon: Clock, label: "Most Active", value: "12 AM", sub: "Late night talks" },
  { icon: TrendingUp, label: "Top Word", value: "saanu", sub: "5,719 uses" },
];

const emojis = ["😍", "😘", "🫂", "❤️", "🥹", "🤣", "🤪", "💋"];

export function ChatAnalysis() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white/90 via-secondary/10 to-accent/15 overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        {/* Love dashboard header */}
        <header className="text-center mb-12 md:mb-16">
          <span className="block uppercase tracking-[0.2em] text-xs font-medium text-primary mb-2">
            Our Connection
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">Chat Insights</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">The data behind our daily connection</p>
        </header>

        {/* Stats grid – love dashboard cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="rounded-[20px] bg-white/95 p-6 md:p-8 border border-primary/10 shadow-[0_4px_24px_rgba(255,92,138,0.08)] text-center
                hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(255,92,138,0.12)] hover:border-primary/20 transition-all duration-200 focus-within:ring-2 focus-within:ring-primary/30"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                <stat.icon size={24} strokeWidth={1.5} />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{stat.label}</div>
              <div className="text-xl md:text-2xl font-serif font-medium text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-primary/80">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Language of love – emoji strip */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={reducedMotion ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-[20px] bg-white/80 border border-primary/10 p-8 md:p-12 text-center shadow-[0_4px_24px_rgba(255,92,138,0.06)]"
        >
          <h3 className="text-lg font-serif text-foreground mb-6">Our Language of Love</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {emojis.map((emoji, i) => (
              <motion.span
                key={i}
                initial={reducedMotion ? false : { scale: 0 }}
                whileInView={reducedMotion ? undefined : { scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 200 }}
                className="text-3xl md:text-4xl"
                aria-hidden
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
