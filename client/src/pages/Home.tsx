import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Letter } from "@/components/Letter";
import { Features } from "@/components/Features";
import { TimeCounter } from "@/components/TimeCounter";
import { ChatAnalysis } from "@/components/ChatAnalysis";
import { SpinWheel } from "@/components/SpinWheel";
import { Songs } from "@/components/Songs";
import { LoveList } from "@/components/LoveList";
import { BirthdayWishes } from "@/components/BirthdayWishes";
import { Personality } from "@/components/Personality";
import movieNightImg from "@assets/generated_images/cozy_ai_couple_movie_night_portrait.png";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/20" role="main">
      <Hero />
      <BirthdayWishes />
      <Letter />
      <Personality />
      <TimeCounter />

      {/* Us in Another World – card panel */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-white/80 to-secondary/10 overflow-hidden print:break-before">
        <div className="max-w-[1000px] mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif mb-4 italic text-primary">
              Us in Another World
            </h2>
            <p className="text-muted-foreground">Until we can have this for real...</p>
          </header>
          <div className="relative rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(255,92,138,0.12)] border-4 border-white group">
            <img
              src={movieNightImg}
              alt="AI Couple Movie Night"
              className="relative z-10 w-full rounded-[20px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-[20px] flex items-center justify-center pointer-events-none" />
            <div className="absolute inset-0 rounded-[20px] flex items-center justify-center pointer-events-none">
              <p className="text-white text-center text-lg md:text-2xl font-serif italic px-6 drop-shadow-lg">
                In a world where distance doesn't matter, where our souls are intertwined, where every moment feels like a dream come true.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <LoveList />
      <ChatAnalysis />
      <Songs />
      <Features />

      <footer className="py-12 text-center text-muted-foreground text-sm border-t border-primary/10 bg-white/50">
        <p>Made with ❤️ for your special day</p>
      </footer>
    </main>
  );
}
