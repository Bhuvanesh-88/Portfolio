import { motion } from "motion/react";
import { ArrowDown, FileText, MapPin, Mail, Phone, Briefcase } from "lucide-react";
import { resumeData } from "../data";

interface HeroProps {
  onDownloadResume: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onDownloadResume, onScrollToSection }: HeroProps) {
  // Pull top 3 impact items directly from resume data
  const topImpacts = [
    {
      metric: "99% Accuracy",
      label: "Salesforce Billing Uptime",
      desc: "Resolved 1,000+ monthly high-priority Salesforce billing issues at Porter.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      metric: "35% Error Reduction",
      label: "Excel MIS Dashboards",
      desc: "Developed custom transaction tracking models supporting 50,000+ transactions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      metric: "25% Faster Resolution",
      label: "Customer Operations Efficiency",
      desc: "Managed 200+ daily queries achieving a 95% customer satisfaction rate.",
      color: "from-pink-500 to-indigo-500",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-16 overflow-hidden md:px-8 max-w-7xl mx-auto"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* Left Column: Big Typography and Intro */}
        <div className="lg:col-span-7 flex flex-col text-left space-y-6">
          
          {/* Badge */}
          <motion.div
            className="self-start inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            GenAI Architect // v2.0
          </motion.div>

          {/* Name & Title */}
          <div className="space-y-4">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-white uppercase font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {resumeData.basics.name.split(" ")[0]} <br/>
              <span className="text-cyan-400">
                {resumeData.basics.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.h2
              className="text-xs sm:text-sm font-mono text-cyan-500 tracking-[0.2em] uppercase font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Full Stack Developer & GenAI Specialist
            </motion.h2>
          </div>

          {/* Short dynamic resume bio */}
          <motion.p
            className="text-slate-400 text-base leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {resumeData.basics.summary}
          </motion.p>

          {/* Quick Contact Chips */}
          <motion.div
            className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono text-slate-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-[8px]">
              <MapPin size={12} className="text-cyan-400" />
              Mumbai, MH, India
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-[8px]">
              <Mail size={12} className="text-cyan-400" />
              bhuvaneshlb300@gmail.com
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-[8px]">
              <Phone size={12} className="text-cyan-400" />
              +91 83692 51323
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button
              onClick={() => onScrollToSection("experience")}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest text-xs rounded-[10px] shadow-[4px_4px_0_rgba(255,255,255,0.15)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-y-1 transition-all cursor-pointer flex items-center gap-2"
            >
              <Briefcase size={14} />
              View Experience
            </button>
            <button
              onClick={onDownloadResume}
              className="px-8 py-4 border border-white/20 hover:border-white text-white font-bold uppercase tracking-widest text-xs rounded-[10px] transition-all cursor-pointer flex items-center gap-2"
            >
              <FileText size={14} className="text-cyan-400" />
              Download CV
            </button>
          </motion.div>

          {/* Primary Stack Matrix indicator */}
          <div className="space-y-2 pt-4">
            <div className="text-[10px] text-cyan-500/60 uppercase font-mono tracking-widest">Primary Stack Matrix</div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase font-mono rounded-[8px]">React 18</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase font-mono rounded-[8px]">Spring Boot</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase font-mono rounded-[8px]">MySQL</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase font-mono rounded-[8px]">LLM Integration</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] text-slate-300 uppercase font-mono rounded-[8px]">TypeScript</span>
            </div>
          </div>
        </div>

        {/* Right Column: Mini Interactive Visual representation or Abstract Terminal card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <motion.div
            className="relative w-full max-w-sm rounded-[10px] p-6 bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-700" />
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 border border-cyan-500/20">
                PORTFOLIO_CORE.EXE
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs text-slate-300">
              <div>
                <span className="text-cyan-400">~/bhuvanesh $</span> cat profile.json
              </div>
              <div className="pl-4 border-l border-cyan-500/30 py-1 space-y-1 bg-white/5">
                <p><span className="text-cyan-400">"status"</span>: <span className="text-slate-300">"Honours Student"</span>,</p>
                <p><span className="text-cyan-400">"training"</span>: <span className="text-slate-300">"NIIT GenAI Program"</span>,</p>
                <p><span className="text-cyan-400">"capabilities"</span>: [</p>
                <p className="pl-4"><span className="text-slate-400">"Spring Boot Microservices"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">"React, TS, Tailwinds"</span>,</p>
                <p className="pl-4"><span className="text-slate-400">"LLM API Integrations"</span></p>
                <p>  ],</p>
                <p><span className="text-cyan-400">"active_capstone"</span>: <span className="text-indigo-300">"Spendsense-Viewer"</span></p>
              </div>

              <div className="pt-2">
                <span className="text-cyan-400">~/bhuvanesh $</span> cat locations.txt
                <p className="text-slate-400 mt-1 pl-4">Mumbai, Chennai, Coimbatore, Tirunelveli</p>
              </div>
              
              <div className="pt-1 flex items-center justify-between text-[10px] text-slate-500 border-t border-white/10 pt-3">
                <span>SYSTEM: COMPLIANT</span>
                <span>v2.0.0</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* "Top 3 Impact" strip above the fold */}
      <div className="w-full mt-16 z-10">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-500/80">
            Top 3 Performance & Impact Highlights
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {topImpacts.map((impact, i) => (
            <motion.div
              key={i}
              className="relative rounded-none p-5 bg-white/5 border border-white/10 backdrop-blur-md shadow-lg transition-all hover:border-cyan-500/50 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              {/* Highlight accent line inside */}
              <div className="absolute top-0 left-0 w-0.5 h-full bg-cyan-500 group-hover:bg-cyan-400 transition-colors" />
              
              <div className="flex flex-col space-y-2">
                <span className="text-2xl md:text-3xl font-black tracking-tight text-cyan-400">
                  {impact.metric}
                </span>
                <span className="text-[10px] font-mono font-semibold text-slate-300 uppercase tracking-wider">
                  {impact.label}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {impact.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating scroll down indicator */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        onClick={() => onScrollToSection("experience")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-[10px] font-mono tracking-widest text-cyan-500/60 uppercase mb-2">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
