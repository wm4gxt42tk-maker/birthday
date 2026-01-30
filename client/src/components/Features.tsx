import { motion } from "framer-motion";
import { Star, Heart, Camera, MapPin } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const features = [
  {
    icon: Star,
    title: "Our First Hello ",
    description: "From our first video call where it all began to our daily 'I love you' texts, every moment with you feels like the first time. 5 months down, a lifetime to go.",
  },
  {
    icon: Heart,
    title: "Mero Pyaro Manxey",
    description: "You aren't just my girlfriend; you're my life and my future. I find new reasons to fall for you every single day. Timi mero comfort hau, mero home.",
  },
  {
    icon: Heart,
    title: "Pinkie Promise 🤙",
    description: "No matter how hard it gets or how busy life becomes, I’m never leaving. I’ll always come back to you. We will get through this together, always.",
  },
  {
    icon: MapPin,
    title: "Miles Apart, Hearts Together",
    description: "Timi jati tadha vayepani, you are the warmest thing in my heart. Distance is just a challenge, and we are winning.",
  },
];

export function Features() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white/80 to-primary/5">
      <div className="max-w-[1000px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <span className="block uppercase tracking-[0.2em] text-xs font-medium text-primary mb-2">
            Highlights
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">What's Good Here</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="group p-8 rounded-[20px] bg-white/90 border border-primary/10 shadow-[0_4px_24px_rgba(255,92,138,0.06)] text-center
                hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,92,138,0.1)] hover:border-primary/20 transition-all duration-200"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                <feature.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-sm mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
