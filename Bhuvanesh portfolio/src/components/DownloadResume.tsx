import { motion } from "motion/react";
import { Printer, X, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { resumeData } from "../data";

interface DownloadResumeProps {
  onClose: () => void;
}

export default function DownloadResume({ onClose }: DownloadResumeProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      id="resume-modal"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex justify-center overflow-y-auto p-4 sm:p-6 md:p-10 cursor-default"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full max-w-4xl bg-[#050505] text-slate-300 rounded-none p-6 sm:p-8 md:p-12 shadow-2xl relative flex flex-col justify-between my-auto border border-white/10 print:bg-white print:text-slate-900 print:shadow-none print:border-none print:p-0 print:my-0 print:rounded-none">
        
        {/* Print / Action Headers (Hidden when printing) */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 print:hidden">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 border border-cyan-500/20 bg-cyan-500/10 text-cyan-400 font-mono text-[10px] uppercase tracking-wider">
              PDF Engine
            </span>
            <p className="text-xs text-slate-400 font-medium">
              Click 'Print to PDF' to save or print this official record.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-none text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md hover:shadow-cyan-500/20"
            >
              <Printer size={14} />
              Print to PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 rounded-none transition-all cursor-pointer"
              title="Close Preview"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Layout */}
        <div className="flex flex-col space-y-6 print:space-y-4">
          
          {/* Header Row */}
          <div className="border-b-2 border-white/10 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 print:border-slate-800">
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white print:text-slate-900">
                {resumeData.basics.name}
              </h1>
              <p className="text-sm font-semibold text-cyan-400 print:text-slate-700 uppercase tracking-wider font-mono">
                {resumeData.basics.title}
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-1 text-xs text-slate-400 print:text-slate-600 font-mono">
              <p className="flex items-center gap-1.5">
                <Phone size={12} className="text-cyan-400 print:text-slate-700" />
                {resumeData.basics.phone}
              </p>
              <p className="flex items-center gap-1.5">
                <Mail size={12} className="text-cyan-400 print:text-slate-700" />
                {resumeData.basics.email}
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin size={12} className="text-cyan-400 print:text-slate-700" />
                {resumeData.basics.location}
              </p>
            </div>
          </div>

          {/* Address & Availability (Fulfilling absolute line coverage) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 bg-white/5 p-3 rounded-none border border-white/10 text-xs text-slate-300 font-mono print:bg-white print:border-none print:p-0 print:text-slate-600">
            <div>
              <span className="font-bold text-white print:text-slate-800">Address:</span> {resumeData.basics.fullAddress}
            </div>
            <div className="sm:text-right mt-1 sm:mt-0">
              <span className="font-bold text-white print:text-slate-800">Availability:</span> {resumeData.basics.openTo.join(" | ")}
            </div>
          </div>

          {/* Core Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-slate-500 border-b border-white/10 print:border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-700 leading-relaxed">
              {resumeData.basics.summary}
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-slate-500 border-b border-white/10 print:border-slate-200 pb-1">
              Professional Experience
            </h2>

            <div className="space-y-4">
              {resumeData.experience.map((exp, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="text-sm font-extrabold text-white print:text-slate-900">
                      {exp.role} — <span className="text-cyan-400 print:text-slate-800 font-mono">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400 print:text-slate-500">
                      {exp.dates} ({exp.duration}) | {exp.location}
                    </span>
                  </div>
                  
                  <ul className="list-disc pl-5 text-xs text-slate-300 print:text-slate-600 space-y-1">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-slate-500 border-b border-white/10 print:border-slate-200 pb-1">
              Technical Stack & Competencies
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2 text-xs">
              {resumeData.skills.map((group, idx) => (
                <div key={idx} className="space-y-0.5">
                  <h4 className="font-bold text-white print:text-slate-800 font-mono text-[10px] uppercase tracking-wide">
                    {group.category}
                  </h4>
                  <p className="text-slate-300 print:text-slate-600 text-[11px] leading-tight">
                    {group.items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Showcases */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-slate-500 border-b border-white/10 print:border-slate-200 pb-1">
              Featured Development Projects
            </h2>

            <div className="space-y-3">
              {resumeData.projects.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xs font-bold text-white print:text-slate-900">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 print:text-slate-500">
                      Tech: {proj.stack.join(", ")}
                    </span>
                  </div>
                  <ul className="list-disc pl-5 text-[11px] text-slate-300 print:text-slate-600 space-y-0.5">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education timeline */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-slate-500 border-b border-white/10 print:border-slate-200 pb-1">
              Education & Honors
            </h2>

            <div className="space-y-3">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="text-xs font-bold text-white print:text-slate-900">
                      {edu.institution}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400 print:text-slate-500">
                      {edu.dates} | {edu.location}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-cyan-400 print:text-slate-700 font-mono">
                    {edu.degree}
                  </p>
                  <ul className="list-disc pl-5 text-[11px] text-slate-300 print:text-slate-600 space-y-0.5">
                    {edu.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (Completeness) */}
          {resumeData.certifications.length > 0 && (
            <div className="space-y-1.5">
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 print:text-slate-500 border-b border-white/10 print:border-slate-200 pb-1">
                Certifications
              </h2>
              <ul className="list-disc pl-5 text-xs text-slate-300 print:text-slate-600">
                {resumeData.certifications.map((cert, idx) => (
                  <li key={idx} className="font-medium">{cert}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Extra Details (Availability and miscellaneous, strictly matching resume) */}
          <div className="pt-2 border-t border-white/10 print:border-slate-100 text-[10px] font-mono text-slate-400 flex flex-wrap justify-between gap-1">
            <span>REFERENCE: bhuvaneshlb300@gmail.com</span>
            <span>MOBILE: +91 83692 51323</span>
            <span>STREAK // AUTHENTIC RECORD CORE</span>
          </div>

        </div>

        {/* Footer print callout (Hidden when printing) */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-none border border-white/10 text-slate-300 hover:bg-white/10 text-xs font-mono transition-all cursor-pointer"
          >
            Close Sheet
          </button>
        </div>

      </div>
    </motion.div>
  );
}
