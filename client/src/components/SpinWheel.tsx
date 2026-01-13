import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export function SpinWheel() {
  const prizes = [
    "Movie Night", "Gym on Video Call", "Late Night Call", 
    "Truth or Dare", "Virtual Date", "Digital Gift", 
    "A Long Letter", "Secret Message"
  ];

  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null);
    
    // Simulate spin
    setTimeout(() => {
      const winner = prizes[Math.floor(Math.random() * prizes.length)];
      setResult(winner);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <section className="py-24 px-4 bg-secondary/20">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-12">Spin to Win!</h2>
        
        <div className="relative aspect-square max-w-[400px] mx-auto mb-12">
          <motion.div
            animate={{ rotate: isSpinning ? 1440 : 0 }}
            transition={{ duration: 2, ease: "circOut" }}
            className="w-full h-full rounded-full border-8 border-primary/20 relative overflow-hidden bg-white shadow-xl"
          >
            {prizes.map((prize, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-serif text-xs px-4"
                style={{ transform: `translate(-50%, -50%) rotate(${i * (360 / prizes.length)}deg)` }}
              >
                <div className="ml-24">{prize}</div>
              </div>
            ))}
            {/* Divider lines */}
            <div className="absolute inset-0">
               {[...Array(prizes.length)].map((_, i) => (
                 <div 
                   key={i}
                   className="absolute top-1/2 left-1/2 w-1/2 h-px bg-primary/10 origin-left"
                   style={{ transform: `rotate(${i * (360 / prizes.length) - (180 / prizes.length)}deg)` }}
                 />
               ))}
            </div>
          </motion.div>
          
          {/* Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-8 h-8 bg-primary rotate-45 rounded-sm shadow-md" />
          </div>
        </div>

        <button
          onClick={spin}
          disabled={isSpinning}
          className="px-12 py-4 bg-primary text-white rounded-full font-serif text-xl shadow-lg hover:scale-105 transition-transform disabled:opacity-50"
        >
          {isSpinning ? "Spinning..." : "Push Here"}
        </button>

        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 p-6 bg-white rounded-2xl border border-primary/20 shadow-sm"
          >
            <Sparkles className="mx-auto text-primary mb-2" />
            <p className="text-xl font-serif">You won: <span className="text-primary font-bold">{result}</span></p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
