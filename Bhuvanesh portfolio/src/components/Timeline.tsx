import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronDown, Award, CheckCircle, ArrowUpRight } from "lucide-react";
import { resumeData } from "../data";

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default open first

  // Auto-extracted high-impact bullet items from resume
  const impactHighlights = [
    {
      metric: "99% System Uptime",
      detail: "Operational accuracy and Salesforce billing resolution over 1,000 monthly cases.",
      company: "Porter India",
    },
    {
      metric: "-35% Reporting Errors",
      detail: "Reduced analytical and logging defects using customized Excel MIS dashboards.",
      company: "Porter India",
    },
    {
      metric: "95% CSAT",
      detail: "Maintained outstanding feedback scoring over 200+ daily chats and client issues.",
      company: "Teleperformance",
    },
    {
      metric: "+25% Efficiency Gain",
      detail: "Boosted resolution times and support ticket closure by restructuring support workflow tiers.",
      company: "Teleperformance",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-16">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1">
          Professional Journey
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
          Experience & Operational Impact
        </h2>
        <div className="w-12 h-0.5 bg-cyan-500 mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left/Main Column: Stacked Timeline Accordion Story Cards */}
        <div className="lg:col-span-8 space-y-6">
          <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-8 py-2">
            
            {resumeData.experience.map((exp, idx) => {
              const isOpen = expandedIndex === idx;
              
              return (
                <motion.div
                  key={idx}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Timeline circular node marker */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-none bg-[#050505] border border-cyan-500 group-hover:border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-colors z-10">
                    <Briefcase size={11} className="text-cyan-400" />
                  </span>

                  {/* Sharp Card Container */}
                  <div className="rounded-[10px] bg-white/5 border border-white/10 hover:border-cyan-500/30 shadow-xl overflow-hidden transition-all duration-300">
                    
                    {/* Header trigger bar */}
                    <div
                      onClick={() => toggleExpand(idx)}
                      className="p-6 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors select-none"
                    >
                      <div className="space-y-1.5 pr-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-bold text-white font-display">
                            {exp.role}
                          </h3>
                          <span className="px-2 py-0.5 rounded-none text-[9px] font-mono font-bold bg-cyan-500/15 text-cyan-400 uppercase tracking-wide border border-cyan-500/20">
                            {exp.company.includes("MNC") ? "MNC Status" : "Enterprise"}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-mono text-slate-400">
                          <span className="flex items-center gap-1">
                            <Award size={13} className="text-cyan-400" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={13} className="text-cyan-400" />
                            {exp.dates}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-cyan-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="hidden sm:inline-block text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1">
                          {exp.duration}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-1.5 rounded-none border border-white/10 bg-white/5 text-cyan-400"
                        >
                          <ChevronDown size={14} />
                        </motion.div>
                      </div>
                    </div>

                    {/* Animated accordion details body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4">
                            <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-wider pb-1">
                              Key Duties & High-Impact Contributions
                            </div>
                            
                            <ul className="space-y-3.5">
                              {exp.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-3 group/item">
                                  <span className="mt-1 flex-shrink-0">
                                    <span className="text-cyan-500 font-bold">▹</span>
                                  </span>
                                  <p className="text-sm text-slate-300 leading-relaxed">
                                    {bullet}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Right Column: "Impact Highlights" Sidebar panel */}
        <div className="lg:col-span-4">
          <motion.div
            className="rounded-none p-6 bg-black/40 border border-white/10 shadow-xl space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <span className="p-1.5 rounded-none bg-cyan-500/10 border border-cyan-500/20">
                <ArrowUpRight size={18} className="text-cyan-400" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Impact Dashboard
                </h4>
                <p className="text-[10px] font-mono text-slate-500">
                  Measurable metrics from operations
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {impactHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group flex flex-col p-4 rounded-none bg-[#050505] border border-white/5 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="text-lg font-black tracking-tight text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {highlight.metric}
                    </span>
                    <span className="text-[9px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {highlight.company.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-[10px] font-mono text-cyan-400 text-center bg-cyan-500/5 py-2.5 border border-cyan-500/20">
              STREAK // DELIVERING REAL ENTERPRISE VALUE
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
