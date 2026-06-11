import React, { useRef, useEffect, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  z: number; // depth layer 0-1
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulseOffset: number;
  pulseSpeed: number;
}

interface MouseState {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
}

const PARTICLE_COUNT = 100;
const COLORS = [
  "rgba(139, 92, 246,",  // purple
  "rgba(6, 182, 212,",   // cyan
  "rgba(192, 132, 252,", // light purple
  "rgba(34, 211, 238,",  // light cyan
  "rgba(255, 255, 255,", // white
];

export const MouseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MouseState>({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const z = Math.random(); // depth layer
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 0.5 + z * 2.5,
        opacity: 0.1 + z * 0.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.015,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    initParticles(width, height);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / width - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / height - 0.5) * 2;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;

      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Clear with a deep dark background
      ctx.fillStyle = "rgba(3, 0, 20, 0.18)";
      ctx.fillRect(0, 0, width, height);

      // ─── Aurora mesh gradient that follows mouse ───
      const aurora1X = width * (0.3 + mx * 0.1);
      const aurora1Y = height * (0.3 + my * 0.1);
      const aurora2X = width * (0.7 - mx * 0.12);
      const aurora2Y = height * (0.6 - my * 0.08);

      const grad1 = ctx.createRadialGradient(aurora1X, aurora1Y, 0, aurora1X, aurora1Y, width * 0.45);
      grad1.addColorStop(0, `rgba(139, 92, 246, ${0.08 + Math.sin(t * 0.5) * 0.02})`);
      grad1.addColorStop(0.5, `rgba(139, 92, 246, ${0.04 + Math.sin(t * 0.3) * 0.01})`);
      grad1.addColorStop(1, "rgba(139, 92, 246, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(aurora2X, aurora2Y, 0, aurora2X, aurora2Y, width * 0.4);
      grad2.addColorStop(0, `rgba(6, 182, 212, ${0.07 + Math.sin(t * 0.4 + 1) * 0.02})`);
      grad2.addColorStop(0.5, `rgba(6, 182, 212, ${0.03 + Math.sin(t * 0.6) * 0.01})`);
      grad2.addColorStop(1, "rgba(6, 182, 212, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Mouse spotlight glow
      const spotX = ((mx + 1) / 2) * width;
      const spotY = ((my + 1) / 2) * height;
      const spotGrad = ctx.createRadialGradient(spotX, spotY, 0, spotX, spotY, 220);
      spotGrad.addColorStop(0, "rgba(139, 92, 246, 0.06)");
      spotGrad.addColorStop(0.5, "rgba(6, 182, 212, 0.03)");
      spotGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = spotGrad;
      ctx.fillRect(0, 0, width, height);

      // ─── Particles with 3D parallax mouse shift ───
      for (const p of particlesRef.current) {
        // Parallax: deeper (higher z) particles shift MORE with mouse
        const parallaxStrength = p.z * 40;
        const px = p.x + mx * parallaxStrength;
        const py = p.y + my * parallaxStrength;

        // Pulse opacity
        const pulse = Math.sin(t * p.pulseSpeed * 60 + p.pulseOffset);
        const currentOpacity = Math.max(0.03, p.opacity + pulse * 0.12);

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        // Draw particle with glow
        const wrappedX = ((px % width) + width) % width;
        const wrappedY = ((py % height) + height) % height;

        ctx.beginPath();
        ctx.arc(wrappedX, wrappedY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentOpacity})`;
        ctx.fill();

        // Glow halo for larger/closer particles
        if (p.z > 0.6) {
          ctx.beginPath();
          ctx.arc(wrappedX, wrappedY, p.size * 3, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(wrappedX, wrappedY, 0, wrappedX, wrappedY, p.size * 3);
          glow.addColorStop(0, `${p.color}${currentOpacity * 0.4})`);
          glow.addColorStop(1, `${p.color}0)`);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      }

      // ─── Floating grid lines (depth-shifted) ───
      ctx.strokeStyle = "rgba(255, 255, 255, 0.018)";
      ctx.lineWidth = 0.5;
      const gridOffset = 80;
      const gridShiftX = mx * 15;
      const gridShiftY = my * 15;

      for (let x = (gridShiftX % gridOffset); x < width; x += gridOffset) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = (gridShiftY % gridOffset); y < height; y += gridOffset) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // ─── Connection lines between nearby particles ───
      const nearby = particlesRef.current.filter(p => p.z > 0.5);
      for (let i = 0; i < nearby.length; i++) {
        for (let j = i + 1; j < nearby.length; j++) {
          const a = nearby[i];
          const b = nearby[j];
          const shiftA = a.z * 40;
          const shiftB = b.z * 40;
          const ax = ((a.x + mx * shiftA) % width + width) % width;
          const ay = ((a.y + my * shiftA) % height + height) % height;
          const bx = ((b.x + mx * shiftB) % width + width) % width;
          const by = ((b.y + my * shiftB) % height + height) % height;
          const dist = Math.hypot(ax - bx, ay - by);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.08;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default MouseBackground;
