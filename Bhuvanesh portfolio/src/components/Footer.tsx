import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-16 px-4 md:px-8 border-t border-white/10 bg-[#050505] backdrop-blur-md overflow-hidden">
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start z-10 relative">
        
        {/* Left column: Summary & Location details */}
        <div className="lg:col-span-5 space-y-5 text-left">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white font-display uppercase tracking-wider">
              {resumeData.basics.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5">
              v2.4.0
            </span>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Junior Full Stack Developer with GenAI expertise currently enrolled in NIIT's GenAI Honours Program. Focused on building highly reliable Spring Boot services & modern React frontends.
          </p>

          <div className="space-y-3 font-mono text-xs">
            {/* Address */}
            <div className="flex items-start gap-2.5 text-slate-400">
              <MapPin size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white">Official Location:</span>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                  {resumeData.basics.fullAddress}
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-2.5 text-slate-400">
              <CheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white">Willingness & Locations:</span>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {resumeData.basics.openTo.join(" | ")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column: Social & Connect Link Cards */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            Secure Channels
          </h4>

          <div className="grid grid-cols-1 gap-2.5">
            {/* Mail */}
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="flex items-center justify-between p-3 rounded-none bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all text-slate-300 hover:text-cyan-400 group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-none bg-black/40 border border-white/10">
                  <Mail size={14} className="text-cyan-400" />
                </span>
                <span className="text-xs font-mono">{resumeData.basics.email}</span>
              </div>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Phone */}
            <a
              href={`tel:${resumeData.basics.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-between p-3 rounded-none bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all text-slate-300 hover:text-cyan-400 group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-none bg-black/40 border border-white/10">
                  <Phone size={14} className="text-cyan-400" />
                </span>
                <span className="text-xs font-mono">+{resumeData.basics.phone}</span>
              </div>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* LinkedIn */}
            <a
              href={resumeData.basics.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-none bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all text-slate-300 hover:text-cyan-400 group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-none bg-black/40 border border-white/10">
                  <Linkedin size={14} className="text-cyan-400" />
                </span>
                <span className="text-xs font-mono">LinkedIn Profile</span>
              </div>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* GitHub */}
            <a
              href={resumeData.basics.links[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-none bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all text-slate-300 hover:text-cyan-400 group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-none bg-black/40 border border-white/10">
                  <Github size={14} className="text-cyan-400" />
                </span>
                <span className="text-xs font-mono">GitHub Profile</span>
              </div>
              <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic additional information blocks from resume */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
            System Metrics
          </h4>

          <div className="rounded-none p-4 bg-black/40 border border-white/10 text-[11px] font-mono space-y-2.5 text-slate-400">
            <div className="flex justify-between">
              <span className="text-slate-500">Uptime:</span>
              <span className="text-cyan-400 font-bold">99.9% SECURE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Framework:</span>
              <span>React 19 + Vite</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Animation:</span>
              <span>Motion v12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Responsive:</span>
              <span className="text-cyan-400">Verified Grid</span>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div>
          © {currentYear} {resumeData.basics.name}. Built with utmost care and futuristic precision.
        </div>
        <div className="flex gap-4">
          <span className="text-cyan-400">Open to Hybrid</span>
          <span className="text-cyan-400">Open to On-Site</span>
        </div>
      </div>

    </footer>
  );
}
