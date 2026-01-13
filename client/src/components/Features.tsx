import { motion } from "framer-motion";
import { Star, Heart, Camera, MapPin } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Since 2020",
    description: "From our first hello years ago to our daily conversations now."
  },
  {
    icon: Heart,
    title: "Infinite Love",
    description: "A love supply that never runs out, refilled daily with hugs and kisses."
  },
  {
    icon: Camera,
    title: "Future Memories",
    description: "So much empty space in the camera roll waiting for our next adventures."
  },
  {
    icon: MapPin,
    title: "Miles Apart, Hearts Together",
    description: "Distance is just a test to see how far love can travel. We're winning."
  }
];

export function Features() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="uppercase tracking-widest text-sm font-semibold text-primary mb-2 block">Highlights</span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">What's Good Here</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-colors duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-white text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
