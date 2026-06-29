import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X, FileText, ArrowUp } from "lucide-react";
import AnimatedBackground from "./components/AnimatedBackground";
import SplashIntro from "./components/SplashIntro";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import DownloadResume from "./components/DownloadResume";
import Footer from "./components/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showResume, setShowResume] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for header background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme application
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  // Scrollspy logic
  useEffect(() => {
    if (showSplash) return;

    const sections = ["hero", "experience", "achievements", "projects", "skills", "education", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px" } // trigger when section is in active view area
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, [showSplash]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Experience", id: "experience" },
    { label: "KPIs / Metrics", id: "achievements" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className={`min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans ${theme}`}>
      
      {/* Cinematic Intro Splash Screen */}
      <SplashIntro onComplete={() => setShowSplash(false)} />

      {/* Global Animated Mesh & Particle Background */}
      <AnimatedBackground />

      <AnimatePresence>
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative min-h-screen flex flex-col justify-between"
          >
            
            {/* Header / Navigation Bar */}
            <header
              className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
                scrolled
                  ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50"
                  : "bg-transparent py-5"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                
                {/* Monogram Logo */}
                <div
                  className="flex items-center gap-2 cursor-pointer group"
                  onClick={() => handleScrollTo("hero")}
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-none bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    BT
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest hidden sm:inline-block text-white">
                    Bhuvanesh Thangappa
                  </span>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-1 bg-black/40 backdrop-blur-sm p-1 rounded-none border border-white/10">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => handleScrollTo(link.id)}
                        className={`px-3 py-1.5 rounded-none text-xs font-mono transition-all cursor-pointer border ${
                          isActive
                            ? "bg-cyan-500 text-black border-cyan-400 font-bold shadow-md shadow-cyan-500/25"
                            : "text-slate-400 border-transparent hover:text-cyan-400 hover:border-cyan-500/20"
                        }`}
                      >
                        {link.label}
                      </button>
                    );
                  })}
                </nav>

                {/* Right Header: Theme and Resume action */}
                <div className="flex items-center gap-3">
                  
                  {/* Theme Switcher */}
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-none bg-black/40 border border-white/10 text-cyan-400 hover:bg-cyan-500/10 transition-all cursor-pointer"
                    title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                  >
                    {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                  </button>

                  {/* Quick Action: PDF Modal */}
                  <button
                    onClick={() => setShowResume(true)}
                    className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-none bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 text-xs font-mono font-bold transition-all cursor-pointer"
                  >
                    <FileText size={13} />
                    RESUME PDF
                  </button>

                  {/* Burger Icon (Mobile Only) */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 rounded-none bg-black/40 border border-white/10 text-cyan-400 transition-all cursor-pointer"
                  >
                    {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
                  </button>
                </div>

              </div>
            </header>

            {/* Sticky Scroll Spy Spy-Bar (Mobile / Desktop) */}
            <div className="fixed top-[70px] inset-x-0 z-30 pointer-events-none flex justify-center opacity-80">
              <div className="h-0.5 w-64 bg-white/5 rounded-none overflow-hidden border border-white/5">
                <motion.div
                  className="h-full bg-cyan-400 rounded-none shadow-sm shadow-cyan-400 animate-pulse"
                  animate={{
                    width: `${
                      ((navLinks.findIndex((l) => l.id === activeSection) + 1) /
                        navLinks.length) *
                      100
                    }%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Mobile Navigation Panel */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="fixed top-[65px] inset-x-0 z-40 bg-[#050505]/95 backdrop-blur-lg border-b border-white/10 p-6 shadow-2xl lg:hidden"
                >
                  <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => {
                      const isActive = activeSection === link.id;
                      return (
                        <button
                          key={link.id}
                          onClick={() => handleScrollTo(link.id)}
                          className={`w-full py-2.5 rounded-none text-left px-4 text-xs font-mono transition-all cursor-pointer border ${
                            isActive
                              ? "bg-cyan-500 text-black border-cyan-400 font-bold"
                              : "text-slate-300 border-transparent hover:bg-white/5 hover:text-cyan-400"
                          }`}
                        >
                          {link.label}
                        </button>
                      );
                    })}
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setShowResume(true);
                      }}
                      className="w-full py-2.5 rounded-none text-left px-4 text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 mt-2 flex items-center gap-2 cursor-pointer"
                    >
                      <FileText size={14} />
                      Open Printable PDF Sheet
                    </button>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scroll to Top floating widget */}
            <AnimatePresence>
              {scrolled && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => handleScrollTo("hero")}
                  className="fixed bottom-6 right-6 z-40 p-3 rounded-none bg-cyan-500 hover:bg-cyan-400 text-black border border-cyan-400 shadow-xl cursor-pointer"
                  title="Scroll to Top"
                >
                  <ArrowUp size={15} />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Main Application Sections Container */}
            <main className="flex-grow w-full relative z-10">
              
              {/* Hero (Metric strip above fold) */}
              <Hero
                onDownloadResume={() => setShowResume(true)}
                onScrollToSection={handleScrollTo}
              />

              {/* Interactive Timeline Accordion Experience */}
              <Timeline />

              {/* Immersive KPIs and Trophy Achievements */}
              <Achievements />

              {/* Projects Grid Showcase */}
              <Projects />

              {/* Skills Sphere Matrix */}
              <Skills />

              {/* Academic Education cards */}
              <Education />

            </main>

            {/* Contact & Footer details (100% address lines complete) */}
            <Footer />

            {/* Resume Overlay Sheet */}
            <AnimatePresence>
              {showResume && (
                <DownloadResume onClose={() => setShowResume(false)} />
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
