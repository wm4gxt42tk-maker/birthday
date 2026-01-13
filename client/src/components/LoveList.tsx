import { motion } from "framer-motion";
import { Check } from "lucide-react";
import legoImg from "@assets/generated_images/couple_as_lego_characters_portrait.png";

export function LoveList() {
  const reasons = [
    "The way your smile lights up the room and instantly makes my day better.",
    "How you always know exactly what to say when I’m feeling down.",
    "Your goofy side that never fails to make me laugh.",
    "You notice the details about me that most people miss.",
    "How you're not afraid to be yourself, and it inspires me.",
    "You don't just hear my words, you understand them.",
    "You are just a little baby and I love that baby"
  ];

  return (
    <section className="py-24 px-4 bg-accent/10 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-foreground">Things I Love About You</h2>
          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </div>
                <p className="text-muted-foreground italic leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-3 scale-105 -z-10" />
          <div className="overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
            <img src={legoImg} alt="Us as Legos" className="w-full aspect-square object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-primary/10">
            <p className="font-display text-2xl text-primary">Us as Legos!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
