import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import radiantImg from "@assets/generated_images/radiant_and_joyful_personality_expression.png";
import kindImg from "@assets/generated_images/gentle_and_kind_soul_expression.png";
import dreamerImg from "@assets/generated_images/dreamy_and_ambitious_personality_expression.png";

const traits = [
  {
    id: 1,
    title: "Radiant Joy",
    description: "The way you light up my life even through a screen. Your laughter is my favorite song, and your happiness is everything to me.",
    image: radiantImg
  },
  {
    id: 2,
    title: "Gentle Soul",
    description: "Your kindness knows no bounds. You have this incredible way of making everyone around you feel loved and heard, especially me.",
    image: kindImg
  },
  {
    id: 3,
    title: "The Dreamer",
    description: "I love your ambition and the way you look at the world. You inspire me to reach for the stars every single day.",
    image: dreamerImg
  }
];

export function Personality() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-widest text-sm font-semibold text-primary mb-2 block">The Woman I Love</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground italic">What Makes You, You</h2>
        </motion.div>

        <div className="space-y-6">
          {traits.map((trait) => (
            <motion.div
              key={trait.id}
              initial={false}
              className={`group cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 border border-primary/10 ${activeId === trait.id ? 'bg-white shadow-xl' : 'bg-secondary/10 hover:bg-secondary/20'}`}
              onClick={() => setActiveId(activeId === trait.id ? null : trait.id)}
            >
              <div className="p-8 flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-serif text-foreground">{trait.title}</h3>
                <motion.div
                  animate={{ rotate: activeId === trait.id ? 90 : 0 }}
                  className="p-2 rounded-full bg-white text-primary"
                >
                  <ChevronRight size={24} />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: activeId === trait.id ? "auto" : 0, opacity: activeId === trait.id ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <img src={trait.image} alt={trait.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-4">
                    <p className="text-xl font-display italic text-primary">"A reflection of your beautiful heart..."</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">{trait.description}</p>
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
