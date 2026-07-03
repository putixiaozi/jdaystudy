import { useEffect, useRef } from 'react';

interface P3 {
  x: number;
  y: number;
  z: number;
  violet: boolean;
  r: number;
}

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 19487171) % 2147483647;
    return (s & 0xffff) / 0x10000;
  };
}

export default function NetworkOrb({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rand = seeded(42);

    const N = 130;
    const pts: P3[] = [];
    for (let i = 0; i < N; i++) {
      const t = (i + 0.5) / N;
      const phi = Math.acos(1 - 2 * t);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const wobble = 0.82 + rand() * 0.3;
      pts.push({
        x: Math.sin(phi) * Math.cos(theta) * wobble,
        y: Math.cos(phi) * wobble,
        z: Math.sin(phi) * Math.sin(theta) * wobble,
        violet: rand() < 0.24,
        r: 1.4 + rand() * 1.8,
      });
    }
    const pairs: Array<[number, number]> = [];
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const dz = pts[i].z - pts[j].z;
        if (dx * dx + dy * dy + dz * dz < 0.34) pairs.push([i, j]);
      }
    }

    let W = 0;
    let H = 0;
    const fit = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fit();

    let yaw = 0.4;
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver((es) => {
      visible = es[es.length - 1]?.isIntersecting ?? true;
      if (visible && !reduced) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(canvas);

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      yaw += 0.0035;
      const pitch = 0.35 + Math.sin(yaw * 0.6) * 0.08;
      const R = Math.min(W, H) * 0.42;
      const f = 3.2;
      const cy = Math.cos(yaw);
      const sy = Math.sin(yaw);
      const cp = Math.cos(pitch);
      const sp = Math.sin(pitch);
      const proj = pts.map((p) => {
        const x1 = p.x * cy + p.z * sy;
        const z1 = -p.x * sy + p.z * cy;
        const y2 = p.y * cp - z1 * sp;
        const z2 = p.y * sp + z1 * cp;
        const s = f / (f + z2);
        return { X: W / 2 + x1 * R * s, Y: H / 2 + y2 * R * s, s, z: z2 };
      });
      ctx.lineWidth = 1;
      for (const [i, j] of pairs) {
        const a = proj[i];
        const b = proj[j];
        const depth = 1 - (a.z + b.z + 2) / 4;
        ctx.strokeStyle = `rgba(56,189,248,${(0.06 + depth * 0.3).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(a.X, a.Y);
        ctx.lineTo(b.X, b.Y);
        ctx.stroke();
      }
      for (let i = 0; i < N; i++) {
        const p = proj[i];
        const depth = 1 - (p.z + 1) / 2;
        const alpha = 0.35 + depth * 0.6;
        ctx.fillStyle = pts[i].violet
          ? `rgba(160,146,255,${alpha.toFixed(3)})`
          : `rgba(103,232,249,${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.X, p.Y, pts[i].r * p.s, 0, 6.2832);
        ctx.fill();
      }
      if (visible && !reduced && !document.hidden) raf = requestAnimationFrame(frame);
    }

    const onVis = () => {
      if (!document.hidden && visible && !reduced) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener('visibilitychange', onVis);
    const onResize = () => {
      fit();
      if (reduced) frame();
    };
    window.addEventListener('resize', onResize);
    raf = requestAnimationFrame(frame);
    if (reduced) frame();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className={className}>
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 45%, rgba(118,33,176,0.35) 0%, rgba(182,0,168,0.12) 45%, transparent 70%)',
          filter: 'blur(2px)',
        }}
      />
      <canvas ref={canvasRef} className="relative h-full w-full" aria-hidden="true" />
    </div>
  );
}
