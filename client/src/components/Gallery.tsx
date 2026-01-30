import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import videoCallImg from "@assets/generated_images/video_call_interface_with_hearts_and_sparks.png";
import timezonesImg from "@assets/generated_images/two_phones_displaying_different_timezones_with_connecting_line.png";
import schoolDestinyImg from "@assets/generated_images/aesthetic_school_hallway_with_two_missed_paths_reaching_for_each_other.png";
import appImg from "@assets/generated_images/app.png";

const photos = [
  {
    id: 1,
    src: schoolDestinyImg,
    alt: "Destined to Meet",
    size: "large",
    caption: "Same school, same batch, but our paths were waiting for the right moment.",
  },
  {
    id: 2,
    src: videoCallImg,
    alt: "Our Video Calls",
    size: "tall",
    caption: "Countless hours across the screen, feeling closer than ever.",
  },
  {
    id: 3,
    src: timezonesImg,
    alt: "Different Places, One Heart",
    size: "wide",
    caption: "Miles apart, but our hearts beat as one.",
  },
  {
    id: 4,
    src: appImg,
    alt: "Digital Connection",
    size: "normal",
    caption: "Building our world in this digital space.",
  },
];

export function Gallery() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-secondary/10 to-white/80 overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4 italic">Our Digital Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From missed paths in school to finding our destiny across the screen. We haven't met in person yet, but every call brings us closer.
          </p>
          <div className="h-1 w-16 bg-primary/30 mx-auto rounded-full mt-6" />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={reducedMotion ? undefined : { y: -4, scale: 1.02 }}
              className={`relative overflow-hidden rounded-[20px] shadow-[0_4px_24px_rgba(255,92,138,0.08)] border border-primary/10 group cursor-pointer
                ${photo.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${photo.size === "tall" ? "md:row-span-2" : ""}
                ${photo.size === "wide" ? "md:col-span-2" : ""}
              `}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <p className="text-white font-display text-lg italic">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
