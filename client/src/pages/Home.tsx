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
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <Hero />
      <BirthdayWishes />
      <Letter />
      <Personality />
      <TimeCounter />
      
      {/* AI Couple Night Section */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 italic text-primary">Us in Another World</h2>
            <p className="text-muted-foreground">Until we can have this for real...</p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl -rotate-1 scale-105 transition-transform group-hover:rotate-0 group-hover:scale-100" />
            <img 
              src={movieNightImg} 
              alt="AI Couple Movie Night" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      <Gallery />
      <LoveList />
      <ChatAnalysis />
      <Letter />
      <SpinWheel />
      <Songs />
      <Features />
      
      <footer className="py-12 text-center text-muted-foreground text-sm">
        <p>Made with ❤️ for your special day</p>
      </footer>
    </main>
  );
}
