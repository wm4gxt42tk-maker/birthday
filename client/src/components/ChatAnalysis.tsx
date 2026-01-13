import { motion } from "framer-motion";
import { MessageCircle, Award, Clock, TrendingUp } from "lucide-react";

export function ChatAnalysis() {
  const stats = [
    { icon: MessageCircle, label: "Total Messages", value: "170,254", sub: "257.3/day" },
    { icon: Award, label: "Top Sender", value: "Jane", sub: "86,021 messages" },
    { icon: Clock, label: "Most Active", value: "12 AM", sub: "Late night talks" },
    { icon: TrendingUp, label: "Top Word", value: "love", sub: "5,719 uses" }
  ];

  const emojis = ["😭", "🥹", "❤️", "😘", "💋", "😌", "😩", "😫"];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Chat Insights</h2>
          <p className="text-muted-foreground">The data behind our daily connection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-secondary/10 border border-primary/5 text-center"
            >
              <stat.icon className="mx-auto text-primary mb-4" size={32} strokeWidth={1.5} />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{stat.label}</div>
              <div className="text-2xl font-serif text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-primary/70">{stat.sub}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-accent/10 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-xl font-serif mb-8">Our Language of Love</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {emojis.map((emoji, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (i * 0.05), type: "spring" }}
                className="text-4xl"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
