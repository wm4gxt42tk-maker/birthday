import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function TimeCounter() {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const startDate = new Date("2025-09-01T00:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
      const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12);
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      setTimeLeft({ years, months, days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Years", value: timeLeft.years },
    { label: "Months", value: timeLeft.months },
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const content = (
    <>
      <Heart className="mx-auto text-primary mb-6 animate-pulse" size={48} fill="currentColor" aria-hidden />
      <h2 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">Time Together</h2>
      <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
        Every second since September 1st, 2025, has been a gift.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[20px] bg-white/90 p-4 md:p-6 shadow-[0_4px_20px_rgba(255,92,138,0.08)] border border-primary/10 text-center hover:-translate-y-0.5 transition-transform duration-200"
          >
            <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
              {String(stat.value).padStart(2, "0")}
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  );

  const wrapperClass = "max-w-[1000px] mx-auto px-4 py-16 md:py-20 text-center";

  if (reducedMotion) {
    return (
      <section className="relative py-24 px-4 bg-gradient-to-b from-accent/20 to-secondary/10">
        <div className={wrapperClass}>{content}</div>
      </section>
    );
  }

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-accent/20 to-secondary/10">
      <motion.div
        className={wrapperClass}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {content}
      </motion.div>
    </section>
  );
}
