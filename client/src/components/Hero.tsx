import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-rose-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-pink-50/30" />
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-2 px-4 rounded-full bg-white/70 backdrop-blur-md border border-primary/30 text-sm font-medium tracking-widest text-foreground/90 mb-6 shadow-lg">
            🎂 23RD BIRTHDAY CELEBRATION 🎂
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight text-foreground mb-4">
            Happy <span className="italic text-primary">23rd</span> Birthday <br />
            <span className="font-serif text-foreground drop-shadow-sm">Meri Saanu</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            To the most beautiful soul, celebrating twenty-three years of light, love, and laughter.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer no-print"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        aria-hidden
      >
        <div className="p-3 rounded-full bg-white/40 backdrop-blur-sm border border-primary/20 text-foreground/70 shadow-sm animate-bounce">
          <ArrowDown size={24} strokeWidth={1.5} />
        </div>
      </motion.div>
    </section>
  );
}
