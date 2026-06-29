import React, { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { Trophy, Check, TrendingUp, Cpu, Flame } from "lucide-react";
import { resumeData } from "../data";

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 1500 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Detect prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, value]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  const trophies = [
    {
      title: "Salesforce Billing Mastery",
      metric: 1000,
      suffix: "+ / mo",
      subtitle: "Salesforce Cases Resolved",
      detail: "Optimized resolution workflows for over 1,000 monthly complex Salesforce transactions maintaining top-tier SLA.",
      badge: "SLA Champion",
      icon: Trophy,
      color: "from-cyan-500/20 to-indigo-500/10",
      accent: "text-cyan-400",
    },
    {
      title: "Reporting Error Mitigation",
      metric: 35,
      suffix: "% Less Errors",
      subtitle: "Analytical Excellence",
      detail: "Developed customized, automated Excel MIS tracking sheets reducing logging errors and operational latency.",
      badge: "Process Enhancer",
      icon: TrendingUp,
      color: "from-cyan-500/20 to-slate-500/10",
      accent: "text-cyan-400",
    },
    {
      title: "Large-Scale Billing Auditing",
      metric: 50000,
      suffix: "+ Transactions",
      subtitle: "High-Volume Oversight",
      detail: "Spearheaded transaction health auditing dashboarding modules, safeguarding financial data precision.",
      badge: "Data Sentinel",
      icon: Cpu,
      color: "from-cyan-500/20 to-indigo-500/10",
      accent: "text-cyan-400",
    },
    {
      title: "Customer Support Speed",
      metric: 25,
      suffix: "% Efficiency Gain",
      subtitle: "Daily Ticket Delivery",
      detail: "Streamlined team ticket triage protocols at Teleperformance to shorten standard query queue delays.",
      badge: "Velocity Lead",
      icon: Flame,
      color: "from-cyan-500/20 to-slate-500/10",
      accent: "text-cyan-400",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1">
          Key Performance Indicators
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
          Measurable Business Achievements
        </h2>
        <p className="text-sm text-slate-400 max-w-2xl font-sans mt-1">
          Strictly verified business and operational metrics derived directly from corporate environments (Porter & Teleperformance).
        </p>
        <div className="w-12 h-0.5 bg-cyan-500 mt-2" />
      </div>

      {/* Grid of Trophy Cards with Spotlight Hovers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trophies.map((trophy, idx) => {
          const IconComponent = trophy.icon;
          const isGlowing = activeCard === idx;

          return (
            <motion.div
              key={idx}
              className="relative rounded-[10px] p-6 bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              {/* Futuristic Spotlight Hover Effect */}
              {isGlowing && (
                <div
                  className="absolute pointer-events-none -inset-px rounded-[10px] opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(150px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(34, 211, 238, 0.15), transparent 80%)`,
                  }}
                />
              )}

              {/* Glowing decorative background card accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${trophy.color} blur-2xl rounded-full opacity-30 pointer-events-none`} />

              {/* Top Row: Icon & Status Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className={`p-2.5 rounded-none bg-black/40 border border-white/10 ${trophy.accent}`}>
                  <IconComponent size={20} />
                </div>
                <span className="px-2.5 py-0.5 rounded-none text-[9px] font-mono font-bold bg-[#050505] text-cyan-400 border border-white/10 uppercase tracking-widest">
                  {trophy.badge}
                </span>
              </div>

              {/* Metric Area: Animated Counter */}
              <div className="space-y-1 mb-4">
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-white flex items-baseline gap-1">
                  <AnimatedCounter value={trophy.metric} suffix={trophy.suffix} />
                </div>
                <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wide">
                  {trophy.subtitle}
                </div>
              </div>

              {/* Details & Copy */}
              <div className="mt-2 pt-3 border-t border-white/10 space-y-3">
                <h4 className="text-sm font-bold text-white leading-tight">
                  {trophy.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {trophy.detail}
                </p>
              </div>

              {/* Verified check badge */}
              <div className="mt-4 flex items-center gap-1.5 text-[9px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-none self-start border border-cyan-500/20">
                <Check size={11} />
                MNC VERIFIED METRIC
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
