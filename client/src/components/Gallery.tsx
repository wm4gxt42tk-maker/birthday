import { motion } from "framer-motion";
import img1 from "@assets/generated_images/aesthetic_birthday_cake_with_candles.png";
import img2 from "@assets/generated_images/bouquet_of_peonies_and_roses.png";
import img3 from "@assets/generated_images/romantic_sunset_picnic_setting.png";
import heroBg from "@assets/generated_images/soft_romantic_pastel_abstract_background.png";

const photos = [
  { id: 1, src: img1, alt: "Birthday Cake", size: "large" },
  { id: 2, src: img2, alt: "Flowers", size: "tall" },
  { id: 3, src: img3, alt: "Picnic Date", size: "wide" },
  { id: 4, src: heroBg, alt: "Us Together", size: "normal" }, // Using bg as placeholder for "us"
];

export function Gallery() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Our Memories</h2>
          <div className="h-1 w-20 bg-primary/40 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl shadow-sm group cursor-pointer
                ${photo.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${photo.size === "tall" ? "md:row-span-2" : ""}
                ${photo.size === "wide" ? "md:col-span-2" : ""}
              `}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
