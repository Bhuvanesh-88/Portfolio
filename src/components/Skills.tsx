import { motion } from "motion/react";
import { Terminal, Database, Laptop, GitBranch, Cpu, Award, Zap } from "lucide-react";
import { resumeData } from "../data";

export default function Skills() {
  // Map icons to categories
  const getCategoryIcon = (category: string) => {
    const name = category.toLowerCase();
    if (name.includes("frontend")) return <Laptop size={16} className="text-cyan-400" />;
    if (name.includes("backend")) return <Terminal size={16} className="text-cyan-400" />;
    if (name.includes("database")) return <Database size={16} className="text-cyan-400" />;
    if (name.includes("tools")) return <GitBranch size={16} className="text-cyan-400" />;
    if (name.includes("genai")) return <Cpu size={16} className="text-cyan-400" />;
    return <Zap size={16} className="text-cyan-400" />;
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-16">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-3">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1">
          Expertise Matrix
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase font-display">
          Technical Stack & Tools
        </h2>
        <div className="w-12 h-0.5 bg-cyan-500 mt-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Bento-Grid of Main Tech Categories */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.skills.filter(s => s.category !== "Top Skills & Certifications").map((group, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-[10px] p-5 bg-white/5 border border-white/10 hover:border-cyan-500/20 transition-all duration-300 shadow-md flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
                  <span className="p-1.5 rounded-none bg-black/40 border border-white/10">
                    {getCategoryIcon(group.category)}
                  </span>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    {group.category}
                  </h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-black/40 hover:bg-cyan-500/10 border border-white/5 text-xs text-slate-300 transition-all font-mono hover:border-cyan-500/30"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer accent line */}
              <div className="w-full h-px bg-white/10 mt-4" />
            </motion.div>
          ))}
        </div>

        {/* Right Column: Special Sidebar representing Top Domain Skills from Sidebar */}
        <div className="lg:col-span-4">
          <motion.div
            className="rounded-[10px] p-6 bg-black/40 border border-white/10 shadow-xl space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 pb-2 border-b border-white/10">
              <span className="p-1.5 rounded-none bg-cyan-500/10 border border-cyan-500/20">
                <Award size={18} className="text-cyan-400" />
              </span>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Top Expertises
                </h4>
                <p className="text-[10px] font-mono text-slate-500">
                  Core competencies & certifications
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {resumeData.skills.find(s => s.category === "Top Skills & Certifications")?.items.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-none bg-[#050505] border border-white/5 hover:border-cyan-500/20 transition-all group"
                >
                  <span className="mt-0.5 p-1 rounded-none bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                    <Zap size={12} />
                  </span>
                  <div>
                    <h5 className="text-xs font-mono font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {skill}
                    </h5>
                    <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                      {skill === "Customer Service" && "Excellent client empathy, resolving complex SLA issues and queries with high satisfaction rates."}
                      {skill === "Certified Software Quality Engineer" && "Focused on robust testing, test-driven validation, and stable modular application patterns."}
                      {skill === "Integration Engineering" && "Building resilient client-to-server endpoints, REST routers, and connecting database queries."}
                      {skill === "Certified Software Engineering Professional" && "Formally validated expertise through rigorous training, exams, and full-stack honors at NIIT."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[10px] font-mono text-cyan-400 text-center bg-cyan-500/5 py-2.5 border border-cyan-500/20">
              STREAK // GLOBAL STANDARDS VALIDATED
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
