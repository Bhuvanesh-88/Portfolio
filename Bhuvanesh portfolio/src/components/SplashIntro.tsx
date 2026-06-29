import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplashIntroProps {
  onComplete: () => void;
}

export default function SplashIntro({ onComplete }: SplashIntroProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Progress interval
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
        // Delay callback to match fade-out animation
        const finishTimer = setTimeout(() => {
          onComplete();
        }, 600);
        return () => clearTimeout(finishTimer);
      }, 300);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="splash-container"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Futuristic subtle background grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1524_1px,transparent_1px),linear-gradient(to_bottom,#0c1524_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Minimal Animated Monogram Logo */}
            <motion.div
              className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-slate-950 border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.25)] mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Spinning outer ring accents */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-t-cyan-400 border-r-transparent border-b-cyan-400 border-l-transparent"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />

              {/* Inner glowing initials */}
              <span className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent font-sans">
                BT
              </span>
            </motion.div>

            {/* Title / Specialized Label */}
            <motion.div
              className="text-center"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase">
                System Initializing
              </h2>
              <p className="text-xs text-slate-400 mt-2 font-mono h-4">
                {progress < 40 && "Loading assets..."}
                {progress >= 40 && progress < 80 && "Mapping neural network..."}
                {progress >= 80 && progress < 100 && "Compiling portfolio module..."}
                {progress === 100 && "Ready."}
              </p>
            </motion.div>

            {/* Smooth Loading Bar */}
            <div className="w-64 h-1 bg-slate-950 rounded-full overflow-hidden mt-6 border border-slate-800 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-indigo-600 rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            {/* Percentage Indicator */}
            <motion.div
              className="mt-2 text-[10px] font-mono text-slate-500 tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
            >
              {Math.min(progress, 100)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
