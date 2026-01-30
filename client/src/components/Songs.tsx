import { motion, AnimatePresence } from "framer-motion";
import { Music, X } from "lucide-react";
import { useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/** Extract YouTube video ID from watch URL */
function getVideoId(url: string): string {
  const match = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})(?:\?|&|$)/);
  return match ? match[1] : "";
}

const playlists = [
  {
    title: "Kasari Bhanu",
    artist: "Swoopna Suman",
    url: "https://www.youtube.com/watch?v=7SaM24Cjzj0",
  },
  {
    title: "Baacha Bhayo",
    artist: "Swoopna Suman",
    url: "https://www.youtube.com/watch?v=PHWHxbg9dQU",
  },
  {
    title: "Ekkasi",
    artist: "Yabesh Thapa",
    url: "https://www.youtube.com/watch?v=pR3ynBB1Ins",
  },
  {
    title: "Rajnigandha",
    artist: "Lil Jhola & Jamesy",
    url: "https://www.youtube.com/watch?v=fNBBK5L19to",
  },
];

export function Songs() {
  const reducedMotion = useReducedMotion();
  const [playingVideo, setPlayingVideo] = useState<{
    videoId: string;
    title: string;
    artist: string;
  } | null>(null);

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-accent/10 to-white/90 overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <header className="text-center mb-12 md:mb-16">
          <span className="block uppercase tracking-[0.2em] text-xs font-medium text-primary mb-2">
            For You
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4 text-foreground">Our Soundtrack</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Songs that remind me of you</p>
        </header>

        <div className="space-y-3">
          {playlists.map((song, i) => {
            const videoId = getVideoId(song.url);
            const isPlaying = playingVideo?.videoId === videoId;
            return (
              <motion.button
                key={song.url}
                type="button"
                onClick={() =>
                  setPlayingVideo(
                    isPlaying ? null : { videoId, title: song.title, artist: song.artist }
                  )
                }
                initial={reducedMotion ? false : { opacity: 0, x: -12 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`w-full flex items-center gap-4 p-5 md:p-6 rounded-[20px] bg-white/90 border shadow-[0_4px_20px_rgba(255,92,138,0.06)]
                  hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,92,138,0.1)] hover:bg-white transition-all duration-200 text-left
                  focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2
                  ${isPlaying ? "border-primary ring-2 ring-primary/30" : "border-primary/10"}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Music size={22} strokeWidth={1.5} />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-serif text-lg font-medium text-foreground truncate">{song.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                </div>
                <span className="text-sm text-primary font-medium shrink-0">
                  {isPlaying ? "Playing" : "Play"}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Small embedded YouTube player window */}
        <AnimatePresence>
          {playingVideo && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-6 right-6 z-50 w-[320px] md:w-[360px] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.2)] border-4 border-white bg-white"
            >
              <div className="flex items-center justify-between px-3 py-2 bg-primary/10 border-b border-primary/10">
                <p className="text-sm font-medium text-foreground truncate">
                  {playingVideo.title} · {playingVideo.artist}
                </p>
                <button
                  type="button"
                  onClick={() => setPlayingVideo(null)}
                  className="p-1.5 rounded-full hover:bg-primary/20 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Close player"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  title={`Play ${playingVideo.title}`}
                  src={`https://www.youtube.com/embed/${playingVideo.videoId}?playsinline=1&rel=0`}
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
