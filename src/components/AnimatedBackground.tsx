import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 80;
    const connectionDistance = isMobile ? 70 : 120;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4, // ultra slow drift
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1,
          alpha: Math.random() * 0.5 + 0.15,
        });
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Render loop
    const render = () => {
      if (reducedMotion) {
        // Static background rendering
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw static grid-mesh accents
        ctx.strokeStyle = "rgba(148, 163, 184, 0.05)";
        ctx.lineWidth = 1;
        const gridSpacing = 60;
        for (let x = 0; x < canvas.width; x += gridSpacing) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += gridSpacing) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Draw subtle futuristic grid lines under particles
      ctx.strokeStyle = "rgba(148, 163, 184, 0.02)";
      ctx.lineWidth = 0.5;
      const gridSpacing = 100;
      for (let x = 0; x < w; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Update and Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce/Wrap boundaries
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`; // subtle cyan highlight particles
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(34, 211, 238, 0.4)";
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Draw connection lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Fade lines based on distance
            const alpha = (1 - dist / connectionDistance) * 0.08;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`; // cyan lines
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [reducedMotion]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      {/* Mesh and Radial Gradients Backdrop */}
      <div className="absolute inset-0 bg-[#050505] transition-colors duration-500 dark:bg-[#050505] light:bg-slate-50" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block opacity-75" />
    </div>
  );
}
