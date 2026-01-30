import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import heroBg from "@assets/generated_images/soft_romantic_pastel_abstract_background.png";
import cakeImg from "@assets/generated_images/aesthetic_birthday_cake_with_candles.png";

export function Hero() {
  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px] z-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-8 relative inline-block">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto"
            >
              <img src={cakeImg} alt="Birthday Cake" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-4 -right-4 text-4xl"
            >
              🎂
            </motion.div>
          </div>

          <span className="inline-block py-1 px-3 rounded-full bg-white/40 backdrop-blur-md border border-white/40 text-sm font-medium tracking-wider text-foreground/80 mb-6 shadow-sm">
            EST. 2003
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tight text-foreground mb-4">
            Happy <span className="italic text-primary">23rd</span> Birthday <br/>
            <span className="font-serif text-primary-foreground drop-shadow-sm">Meri Saanu</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-foreground/80 max-w-2xl mx-auto mt-6 leading-relaxed">
            To the most beautiful soul, celebrating twenty-three years of light, love, and laughter.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="p-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-sm text-foreground/70 animate-bounce">
          <ArrowDown size={24} strokeWidth={1.5} />
        </div>
      </motion.div>
    </section>
  );
}
