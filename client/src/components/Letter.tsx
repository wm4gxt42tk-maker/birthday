import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Letter() {
  const reducedMotion = useReducedMotion();

  const letterCard = (
    <div className="max-w-3xl mx-auto relative z-10 rounded-[20px] bg-white/95 p-8 md:p-16 shadow-[0_4px_24px_rgba(255,92,138,0.1)] border border-primary/10">
           {/* "Stamp" or Seal */}
           <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
              <Heart fill="currentColor" size={32} />
           </div>

           <div className="font-serif text-lg md:text-xl leading-relaxed text-foreground/90 space-y-6">
             <p className="font-display text-4xl mb-8 text-foreground">Meri Saanu</p>

             <p className="italic text-foreground/80">
               "Budi vayo mero Sana ni... tara jhan jhan ramri po hudai chha ta 🤪!"
             </p>

             <h3 className="font-display text-2xl md:text-3xl text-foreground pt-4">A Celebration of You</h3>
             <p>
               Happy Birthday, my dear Saanu! Today is all about you. At 23, you are stepping into such a beautiful age. "Budi vayo mero Sana ni" vanda vandai, timi ekdam mature, strong, ra independent woman baniraheko dekhda malai ekdam proud feel hunchha.
             </p>
             <p>
               Aaja timro birthday ma timro jati pani sapana haru chhan, tyo sabai pura hos. Timi sadhai yesari nai khusi rairahanu. Timro life ma success ko naya naya dhoka haru khulun, ra timlai kaile pani kunai kurako dukha naparos.
             </p>

             <h3 className="font-display text-2xl md:text-3xl text-foreground pt-4">To My Real-Life Superwoman 🦸‍♀️</h3>
             <p>
               I want to take a moment to admire the person you are today. Timi eklai bidesh gayera jasari independent vayera baseki chhau, tyo herda malai dherai inspiration milchha.
             </p>
             <p>
               <span className="font-semibold">Your Discipline:</span> Timro gym, timro kaam, ra timro lifestyle balance gareko dekhda timi sachikai euta Superwoman hau.
             </p>
             <p>
               <span className="font-semibold">Your Spirit:</span> Jati nai thake pani, jati nai garo vayepani, timi kaile pani smile garna nachhoda. Timro tyo positive energy nai timro sabai vanda thulo strength ho.
             </p>
             <p>
               <span className="font-semibold">Your Heart:</span> Timi jati tadha vayepani, timro tyo heart ko warmth ma samma feel hunchha.
             </p>

             <h3 className="font-display text-2xl md:text-3xl text-foreground pt-4">Wishes & Dreams ✨</h3>
             <p>
               Aaja timro birthday ma, I wish for nothing but the best for you:
             </p>
             <ul className="list-disc list-inside space-y-2 pl-2">
               <li>May this year bring you closer to every goal you've ever set.</li>
               <li>May your smile stay as bright as it is today, forever.</li>
               <li>May you always find the strength to keep being the amazing, disciplined, and hard-working person you are.</li>
             </ul>
             <p>
               Ma sadhai timro side ma hunechhu, timro harek sapanahuru pura garna support garnechhu. Timro sabai wishes yo year pura hos, mero mayalu budi.
             </p>

             <h3 className="font-display text-2xl md:text-3xl text-foreground pt-4">A Small Token for You 🎁</h3>
             <p>
               Timro lagi sano maya ko token pathayeko chhu, hope timlai ramro lagne chha. I wish ma aafai yo courier box ma basera timlai vetna auna sakthe, ani tei vetera birthday celebrate garna paauthe.
             </p>
             <p>
               Timi jaha vaye pani, yaad rakha ki timlai admire garne ra timro progress ma khusi hune manchhe sadhai timro saath ma chha.
             </p>

             <p className="pt-8">
               Happy Birthday once again, meri budi, meri saanu, meri mayalu! Celebrate your day to the fullest. Love you love you love you love you sosososo much! ♡ ♡
             </p>

             <p className="pt-8 font-display text-3xl">
               Sadhai Timro,<br/>
               <span className="text-primary">Bidit</span>
             </p>
           </div>
    </div>
  );

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/10 to-accent/20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/4" />
      {reducedMotion ? (
        letterCard
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {letterCard}
        </motion.div>
      )}
    </section>
  );
}
