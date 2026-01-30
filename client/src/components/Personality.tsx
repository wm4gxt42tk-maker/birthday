import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import radiantImg from "@assets/generated_images/radiant_and_joyful_personality_expression.png";
import kindImg from "@assets/generated_images/gentle_and_kind_soul_expression.png";
import dreamerImg from "@assets/generated_images/dreamy_and_ambitious_personality_expression.png";

const traits = [
  {
    id: 1,
    title: "Radiant Joy",
    description: "The way you light up my life even through a screen. Your laughter is my favorite song, and your happiness is everything to me.",
    image: radiantImg,
  },
  {
    id: 2,
    title: "Gentle Soul",
    description: "Your kindness knows no bounds. You have this incredible way of making everyone around you feel loved and heard, especially me.",
    image: kindImg,
  },
  {
    id: 3,
    title: "The Dreamer",
    description: "I love your ambition and the way you look at the world. You inspire me to reach for the stars every single day.",
    image: dreamerImg,
  },
];

export function Personality() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white/70 to-primary/5 overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <span className="block uppercase tracking-[0.2em] text-xs font-medium text-primary mb-2">
            The Woman I Love
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground italic">What Makes You, You</h2>
        </header>

        <div className="space-y-4">
          {traits.map((trait) => (
            <motion.div
              key={trait.id}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group cursor-pointer rounded-[20px] overflow-hidden border transition-all duration-300
                ${activeId === trait.id ? "bg-white shadow-[0_8px_32px_rgba(255,92,138,0.12)] border-primary/20" : "bg-white/80 border-primary/10 hover:border-primary/20 hover:shadow-[0_4px_20px_rgba(255,92,138,0.08)]"}
                hover:-translate-y-0.5
              `}
              onClick={() => setActiveId(activeId === trait.id ? null : trait.id)}
            >
              <div className="p-6 md:p-8 flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-serif text-foreground">{trait.title}</h3>
                <motion.div
                  animate={{ rotate: activeId === trait.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 rounded-full bg-primary/10 text-primary"
                >
                  <ChevronRight size={24} />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: activeId === trait.id ? "auto" : 0, opacity: activeId === trait.id ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 md:px-8 pb-8 grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <img src={trait.image} alt={trait.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-lg font-display italic text-primary">"A reflection of your beautiful heart..."</p>
                    <p className="text-muted-foreground leading-relaxed">{trait.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
