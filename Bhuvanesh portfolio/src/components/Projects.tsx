import { motion } from "motion/react";
import { Github, ExternalLink, Code2, Cpu, Database } from "lucide-react";
import { resumeData } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-16">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1">
          Development Portfolio
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
          Full-Stack & Generative AI Applications
        </h2>
        <div className="w-12 h-0.5 bg-cyan-500 mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.projects.map((proj, idx) => {
          const isStayease = proj.title.toLowerCase().includes("stayease");

          return (
            <motion.div
              key={idx}
              className="relative rounded-[10px] p-6 bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              {/* Subtle background glow element */}
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all duration-500" />
              <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all duration-500" />

              <div>
                {/* Meta Row: Icon and Location */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-none bg-black/40 border border-white/10 text-cyan-400">
                      {isStayease ? <Cpu size={18} /> : <Database size={18} />}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {proj.location || "NIIT Mumbai"}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded-none text-[9px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wide">
                    {isStayease ? "GenAI Integrated" : "Core Capstone"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-display">
                  {proj.title}
                </h3>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mt-3 mb-5">
                  {proj.stack.map((tech, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-none text-[9px] font-mono font-bold bg-black/40 text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Bullet Description */}
                <ul className="space-y-3 mb-6">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-slate-300">
                      <span className="text-cyan-500 font-bold select-none text-sm leading-none mt-0.5">▹</span>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Code2 size={12} className="text-cyan-400" />
                  REST APIs, High Performance
                </span>

                <div className="flex gap-3">
                  {proj.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-black/40 hover:bg-cyan-500 hover:text-black border border-white/10 text-xs font-mono font-medium text-slate-300 transition-all cursor-pointer"
                    >
                      <Github size={12} />
                      Codebase
                      <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
