import { motion } from "framer-motion";
import videoCallImg from "@assets/generated_images/video_call_interface_with_hearts_and_sparks.png";
import timezonesImg from "@assets/generated_images/two_phones_displaying_different_timezones_with_connecting_line.png";
import schoolDestinyImg from "@assets/generated_images/aesthetic_school_hallway_with_two_missed_paths_reaching_for_each_other.png";
import heroBg from "@assets/generated_images/soft_romantic_pastel_abstract_background.png";

const photos = [
  { id: 1, src: schoolDestinyImg, alt: "Destined to Meet", size: "large", caption: "Same school, same batch, but our paths were waiting for the right moment." },
  { id: 2, src: videoCallImg, alt: "Our Video Calls", size: "tall", caption: "Countless hours across the screen, feeling closer than ever." },
  { id: 3, src: timezonesImg, alt: "Different Places, One Heart", size: "wide", caption: "Miles apart, but our hearts beat as one." },
  { id: 4, src: heroBg, alt: "Digital Connection", size: "normal", caption: "Building our world in this digital space." },
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
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 italic">Our Digital Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">From missed paths in school to finding our destiny across the screen. We haven't met in person yet, but every call brings us closer.</p>
          <div className="h-1 w-20 bg-primary/40 mx-auto rounded-full mt-6" />
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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-8 opacity-0 group-hover:opacity-100">
                <p className="text-white font-display text-xl italic">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
