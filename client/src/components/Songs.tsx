import { motion } from "framer-motion";
import { Music, Play } from "lucide-react";

export function Songs() {
  const playlists = [
    { title: "The Power Of Love", artist: "Céline Dion", url: "https://www.youtube.com/watch?v=Y8HOfcYWZoo" },
    { title: "Hotline Blink", artist: "Drake", url: "https://www.youtube.com/watch?v=uxpDa-c-4Mc" },
    { title: "Perfect", artist: "Ed Sheeran", url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g" }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Soundtrack</h2>
          <p className="text-muted-foreground">Songs that remind me of you</p>
        </div>

        <div className="space-y-4">
          {playlists.map((song, i) => (
            <motion.a
              key={i}
              href={song.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center p-6 bg-secondary/10 rounded-2xl hover:bg-primary/5 transition-colors group"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                <Music size={20} />
              </div>
              <div className="flex-grow">
                <h3 className="font-serif text-lg text-foreground">{song.title}</h3>
                <p className="text-sm text-muted-foreground">{song.artist}</p>
              </div>
              <Play className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
