import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { resumeData } from "../data";

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-16">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1">
          Academic Foundations
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
          Education & Formal Credentials
        </h2>
        <div className="w-12 h-0.5 bg-cyan-500 mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.education.map((edu, idx) => {
          const isNIIT = edu.institution.toLowerCase().includes("niit");

          return (
            <motion.div
              key={idx}
              className="relative rounded-[10px] p-6 bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              {/* Highlight gradient ring inside */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all duration-500" />
              
              <div>
                {/* Meta Row: Icon and Location */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="p-2.5 rounded-none bg-black/40 border border-white/10 text-cyan-400">
                      <GraduationCap size={20} />
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {edu.location}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-none text-[9px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wide">
                    {isNIIT ? "GenAI Honours" : "Undergraduate"}
                  </span>
                </div>

                {/* Institution Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors font-display">
                  {edu.institution}
                </h3>

                {/* Degree / Program */}
                <p className="text-sm font-mono text-cyan-400 mt-2 font-medium">
                  {edu.degree}
                </p>

                {/* Dates & Location */}
                <div className="flex items-center gap-3 mt-3 mb-6 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-cyan-400" />
                    {edu.dates}
                  </span>
                </div>

                {/* Coursework bullets */}
                <div className="space-y-4">
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest pb-1 border-b border-white/10">
                    Core Specialization & Highlights
                  </div>
                  
                  <ul className="space-y-3">
                    {edu.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-slate-300">
                        <span className="text-cyan-500 font-bold select-none text-sm leading-none mt-0.5">▹</span>
                        <p className="text-xs sm:text-sm leading-relaxed">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verified academic banner */}
              <div className="mt-6 pt-4 border-t border-white/10 text-[9px] font-mono text-cyan-400/80 flex items-center justify-between">
                <span>UNIVERSITY VERIFIED SCHOLAR</span>
                <span>AUTHENTIC RECORD</span>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
