import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import legoImg from "@assets/generated_images/couple_as_lego_characters_portrait.png";

const reasons = [
  "That Smile! 🤩 It literally lights up the room and fixes my mood in a second!",
  "Superwoman Strength! 💪 Timi Independent vayera baseko dekhda I'm just WOW.",
  "Gym Discipline! 🏋️‍♀️ Your dedication to fitness inspires me (even if I'm lazy!).",
  "My Little Baby! 👶 23 vaye pani, mero lagi timi sadhai mero bachha nai rahanechhau.",
  "The Unstoppable You! 🤒 Jati thake pani, birami vaye pani, tyo smile garna nachhodne bani.",
  "Our Connection! 🔌 The way we're emotionally synced is just \"Next Level\" magic.",
  "Best Supporter! 📣 You always know exactly what to say to make me feel better.",
  "Goofy Soul! 🤪 Your \"nathatkan pan\" and those funny faces are my favorite.",
  "Detail Queen! 🔍 You notice the little things about me that nobody else sees.",
  "Real & Raw! 💯 You're never afraid to be yourself, and that's so attractive.",
  "Deep Listener! 👂 You don't just hear; you actually understand me.",
  "Patience Level: Pro! 🧘‍♀️ How you handle everything with so much grace.",
  "Instant Calm! 🌊 Just a thought of you makes my world feel peaceful.",
  "Boss Girl Energy! 💼 Seeing you grow and handle your life so maturely.",
  "My Proudest Flex! 😤 Saying \"She's mine\" is the biggest flex of my life.",
  "Voice Like Music! 🎶 Those long video calls are the highlight of my day.",
  "The Way You Care! ❤️ After every misunderstanding, you always come back to \"us.\"",
  "Our Future Dreams! 🏡 Walking, laughing, and planning life together in my dreams.",
  "Super Organized! 📅 The way you balance work and life like a pro.",
  "Sunlight Warmth! ☀️ Even from miles away, you're the warmest part of my life.",
  "My Safe Space! 🫂 You're not just my GF; you're my \"Home.\"",
  "The \"Naughty\" Baby! 😈 All those \"kissie\" promises we have to fulfill later! 😘",
  "Simply YOU! 💖 Because there is nobody else in this world like my Sana.",
];

export function LoveList() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-accent/15 to-white/80 overflow-hidden">
      <div className="max-w-[1000px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -20 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[20px] bg-white/90 p-8 md:p-10 shadow-[0_4px_24px_rgba(255,92,138,0.08)] border border-primary/10"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-foreground">
            23 Things I Love About You
          </h2>
          <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
            {reasons.map((reason, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check size={14} className="text-primary" />
                </div>
                <p className="text-muted-foreground italic leading-relaxed text-sm md:text-base">{reason}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/10 rounded-[20px] rotate-2 scale-[1.02] -z-10" />
          <div className="overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(255,92,138,0.15)] border-4 border-white">
            <img src={legoImg} alt="Us as Legos" className="w-full aspect-square object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white px-6 py-4 rounded-2xl shadow-lg border border-primary/10">
            <p className="font-display text-xl text-primary">Us ❤️❤️❤️❤️❤️!</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
