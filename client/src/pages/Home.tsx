import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Letter } from "@/components/Letter";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20">
      <Hero />
      <Gallery />
      <Letter />
      <Features />
      
      <footer className="py-12 text-center text-muted-foreground text-sm">
        <p>Made with ❤️ for your special day</p>
      </footer>
    </main>
  );
}
