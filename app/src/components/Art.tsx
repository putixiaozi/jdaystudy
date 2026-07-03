import { CSSProperties, ReactNode } from 'react';

const PANEL_BG = 'linear-gradient(150deg, #16101F 0%, #101322 55%, #0C0C0C 100%)';

function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 19487171) % 2147483647;
    return (s & 0xffff) / 0x10000;
  };
}

function Panel({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px] ${className ?? ''}`}
      style={{ background: PANEL_BG, ...style }}
    >
      {children}
    </div>
  );
}

/** Abstract network graph with a highlighted hub — used as tall right panel. */
export function NetArt({ seed = 7, height }: { seed?: number; height?: string }) {
  const rand = seeded(seed);
  const nodes = Array.from({ length: 26 }, () => ({
    x: 6 + rand() * 88,
    y: 8 + rand() * 84,
    r: 1.2 + rand() * 2.6,
    violet: rand() < 0.3,
  }));
  const hub = { x: 50 + (rand() - 0.5) * 16, y: 46 + (rand() - 0.5) * 14 };
  const edges: Array<[number, number]> = [];
  nodes.forEach((n, i) => {
    nodes.forEach((m, j) => {
      if (i < j) {
        const d = Math.hypot(n.x - m.x, n.y - m.y);
        if (d < 24) edges.push([i, j]);
      }
    });
  });
  return (
    <Panel className="h-full" style={height ? { height } : undefined}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        {edges.map(([i, j], k) => (
          <line
            key={k}
            x1={nodes[i].x}
            y1={nodes[i].y}
            x2={nodes[j].x}
            y2={nodes[j].y}
            stroke="rgba(56,189,248,0.22)"
            strokeWidth="0.25"
          />
        ))}
        {nodes.slice(0, 12).map((n, i) => (
          <line
            key={`h${i}`}
            x1={hub.x}
            y1={hub.y}
            x2={n.x}
            y2={n.y}
            stroke="rgba(182,0,168,0.35)"
            strokeWidth="0.3"
          />
        ))}
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.violet ? 'rgba(160,146,255,0.9)' : 'rgba(103,232,249,0.9)'}
          />
        ))}
        <circle cx={hub.x} cy={hub.y} r="4.4" fill="#B600A8" opacity="0.9" />
        <circle cx={hub.x} cy={hub.y} r="7.5" fill="none" stroke="#B600A8" strokeWidth="0.5" opacity="0.5" />
      </svg>
    </Panel>
  );
}

/** Curves: robustness decay / resilience V-shape / SIR triple. */
export function CurveArt({
  kind,
  height,
}: {
  kind: 'decay' | 'resilience' | 'sir';
  height: string;
}) {
  let paths: Array<{ d: string; color: string }> = [];
  if (kind === 'decay') {
    paths = [
      { d: 'M4,20 C25,22 40,34 55,58 C68,80 82,88 96,90', color: '#B600A8' },
      { d: 'M4,20 C30,24 55,36 75,48 C86,55 92,60 96,64', color: '#67E8F9' },
    ];
  } else if (kind === 'resilience') {
    paths = [
      { d: 'M4,22 L34,22 C42,22 44,66 52,66 L60,66 C72,58 84,36 96,26', color: '#67E8F9' },
      { d: 'M4,26 L34,26 C42,26 46,78 54,78 L62,78 C74,72 86,58 96,50', color: '#A092FF' },
    ];
  } else {
    paths = [
      { d: 'M4,14 C30,16 50,54 96,88', color: '#67E8F9' },
      { d: 'M4,90 C28,88 40,30 56,30 C72,30 84,72 96,84', color: '#B600A8' },
      { d: 'M4,92 C36,92 60,42 96,18', color: '#A092FF' },
    ];
  }
  return (
    <Panel style={{ height }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {[20, 40, 60, 80].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(215,226,234,0.07)" strokeWidth="0.3" />
        ))}
        {paths.map((p, i) => (
          <path key={i} d={p.d} fill="none" stroke={p.color} strokeWidth="1.4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
    </Panel>
  );
}

/** Chip cloud panel for metric keywords. */
export function ChipsArt({ chips, height }: { chips: string[]; height: string }) {
  return (
    <Panel style={{ height }}>
      <div className="absolute inset-0 flex flex-wrap content-center items-center justify-center gap-1.5 p-5 sm:gap-2 sm:p-7">
        {chips.map((c) => (
          <span
            key={c}
            className="whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[10px] font-light tracking-wide sm:px-3.5 sm:py-1 sm:text-xs md:text-sm"
            style={{ borderColor: 'rgba(215,226,234,0.28)', color: '#D7E2EA' }}
          >
            {c}
          </span>
        ))}
      </div>
    </Panel>
  );
}

/** Small decorative network glyphs for AboutSection corners. */
export function Glyph({ variant, className }: { variant: 'ring' | 'cube' | 'cluster' | 'wave'; className?: string }) {
  const stroke = 'url(#gGrad)';
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="gGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B600A8" />
          <stop offset="55%" stopColor="#7621B0" />
          <stop offset="100%" stopColor="#67E8F9" />
        </linearGradient>
      </defs>
      {variant === 'ring' && (
        <g fill="none" stroke={stroke} strokeWidth="1.6">
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(-18 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(42 50 50)" />
          <circle cx="50" cy="50" r="12" fill="rgba(118,33,176,0.35)" />
          <circle cx="84" cy="38" r="4" fill="#67E8F9" stroke="none" />
          <circle cx="20" cy="66" r="3" fill="#B600A8" stroke="none" />
        </g>
      )}
      {variant === 'cube' && (
        <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round">
          <path d="M30 34 L58 22 L78 34 L50 46 Z" />
          <path d="M30 34 L30 62 L50 76 L50 46 Z" />
          <path d="M78 34 L78 62 L50 76" />
          <circle cx="30" cy="34" r="3.2" fill="#67E8F9" stroke="none" />
          <circle cx="78" cy="34" r="3.2" fill="#B600A8" stroke="none" />
          <circle cx="50" cy="76" r="3.2" fill="#A092FF" stroke="none" />
        </g>
      )}
      {variant === 'cluster' && (
        <g stroke={stroke} strokeWidth="1.2">
          <line x1="26" y1="30" x2="52" y2="50" />
          <line x1="76" y1="26" x2="52" y2="50" />
          <line x1="30" y1="76" x2="52" y2="50" />
          <line x1="78" y1="70" x2="52" y2="50" />
          <line x1="26" y1="30" x2="76" y2="26" />
          <circle cx="52" cy="50" r="7" fill="#7621B0" stroke="none" />
          <circle cx="26" cy="30" r="5" fill="#67E8F9" stroke="none" />
          <circle cx="76" cy="26" r="4" fill="#B600A8" stroke="none" />
          <circle cx="30" cy="76" r="4.5" fill="#A092FF" stroke="none" />
          <circle cx="78" cy="70" r="3.5" fill="#67E8F9" stroke="none" />
        </g>
      )}
      {variant === 'wave' && (
        <g fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round">
          <path d="M12 62 C26 30 40 30 50 50 C60 70 74 70 88 42" />
          <path d="M12 76 C28 52 42 52 52 64 C62 76 76 74 88 58" opacity="0.55" />
          <circle cx="50" cy="50" r="3.4" fill="#B600A8" stroke="none" />
          <circle cx="88" cy="42" r="3" fill="#67E8F9" stroke="none" />
        </g>
      )}
    </svg>
  );
}
