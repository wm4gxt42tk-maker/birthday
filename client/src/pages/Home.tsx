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

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <Hero />
      <BirthdayWishes />
      <Personality />
      <TimeCounter />
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
