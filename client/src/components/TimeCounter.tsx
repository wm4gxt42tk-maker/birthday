import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export function TimeCounter() {
  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Relationship started on Sept 1st, 2025
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

  return (
    <section className="py-24 px-4 bg-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Heart className="mx-auto text-primary mb-6 animate-pulse" size={48} fill="currentColor" />
          <h2 className="text-4xl md:text-5xl font-serif mb-12">Time Together</h2>
          <p className="text-lg text-muted-foreground mb-12">Every second since September 1st, 2025, has been a gift.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
                <div className="text-3xl md:text-4xl font-display text-primary font-bold mb-1">
                  {String(stat.value).padStart(2, '0')}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
