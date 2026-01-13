import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Letter() {
  return (
    <section className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm p-8 md:p-16 rounded-sm shadow-xl border border-white/50 relative"
        >
           {/* "Stamp" or Seal */}
           <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
              <Heart fill="currentColor" size={32} />
           </div>

           <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 space-y-6">
             <p className="font-display text-4xl mb-8 text-foreground">My Dearest One,</p>
             
             <p>
               Happy 23rd Birthday! Even though we're miles apart right now, I wanted to create something special for you—a digital bridge between us. Since we first talked back in 2020 and really found each other again this past spring, every day has been a countdown to when we can finally be in the same room.
             </p>
             
             <p>
               Starting our relationship on September 1st, 2025, was the best decision I've ever made. Watching you grow into the person you are today has been the greatest privilege of my life. Your kindness, your laughter, and the way you light up my screen—it all makes me fall in love with you over and over again.
             </p>
             
             <p>
               Here's to year twenty-three. May it be filled with adventures, quiet moments of joy, and all the success you deserve. I promise to be there for every step of the way.
             </p>
             
             <p className="pt-8 font-display text-3xl">
               Forever yours,<br/>
               <span className="text-primary">Me</span>
             </p>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
