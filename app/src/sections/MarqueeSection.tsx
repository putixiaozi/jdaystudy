import { useEffect, useRef, useState } from 'react';

interface Tile {
  en: string;
  zh: string;
  hue: number;
}

const ROW1: Tile[] = [
  { en: 'Centrality', zh: '中心性度量 3.0', hue: 0 },
  { en: 'Robustness', zh: '脆弱性-鲁棒性分析', hue: 1 },
  { en: 'Resilience', zh: '网络韧性客户端', hue: 2 },
  { en: 'SIR Model', zh: '传播动力学仿真', hue: 3 },
  { en: 'Edge Strategy', zh: '网络加边策略', hue: 0 },
  { en: 'Matrix', zh: '矩阵与边表互转', hue: 1 },
  { en: 'Attack', zh: '指定节点蓄意攻击', hue: 2 },
  { en: 'PageRank', zh: '影响力排序', hue: 3 },
  { en: 'Betweenness', zh: '介数中心性', hue: 0 },
  { en: 'K-Core', zh: '核数分解', hue: 1 },
  { en: 'Entropy', zh: '熵值法综合评价', hue: 2 },
];

const ROW2: Tile[] = [
  { en: '35+ Metrics', zh: '节点级网络指标', hue: 2 },
  { en: 'R(t) Curve', zh: '韧性曲线', hue: 3 },
  { en: 'Null Model', zh: '零模型对照', hue: 0 },
  { en: 'Scale-Free', zh: '无标度特性检验', hue: 1 },
  { en: 'Small World', zh: '小世界系数', hue: 2 },
  { en: 'R0', zh: '基本再生数估计', hue: 3 },
  { en: 'HITS', zh: '枢纽与权威值', hue: 0 },
  { en: 'Structural Holes', zh: '结构洞分析', hue: 1 },
  { en: 'Excel In/Out', zh: '零代码 · 边表进报告出', hue: 2 },
  { en: 'JdayStudy', zh: '微信公众号', hue: 3 },
];

const GRADS = [
  'linear-gradient(150deg, #101B33 0%, #0C1222 60%, #0C0C0C 100%)',
  'linear-gradient(150deg, #1B0E2C 0%, #120C22 60%, #0C0C0C 100%)',
  'linear-gradient(150deg, #24081F 0%, #150A18 60%, #0C0C0C 100%)',
  'linear-gradient(150deg, #0E1F26 0%, #0B141E 60%, #0C0C0C 100%)',
];
const ACCENTS = ['#67E8F9', '#A092FF', '#EA6BD5', '#5EEAD4'];

function TileCard({ tile }: { tile: Tile }) {
  return (
    <div
      className="relative h-[270px] w-[420px] flex-none overflow-hidden rounded-2xl border border-white/[0.07]"
      style={{ background: GRADS[tile.hue] }}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true">
        <line x1="8" y1="80" x2="36" y2="52" stroke={ACCENTS[tile.hue]} strokeWidth="0.25" opacity="0.5" />
        <line x1="36" y1="52" x2="72" y2="66" stroke={ACCENTS[tile.hue]} strokeWidth="0.25" opacity="0.5" />
        <line x1="72" y1="66" x2="94" y2="30" stroke={ACCENTS[tile.hue]} strokeWidth="0.25" opacity="0.5" />
        <line x1="36" y1="52" x2="60" y2="18" stroke={ACCENTS[tile.hue]} strokeWidth="0.25" opacity="0.5" />
        <circle cx="8" cy="80" r="1.6" fill={ACCENTS[tile.hue]} />
        <circle cx="36" cy="52" r="2.4" fill={ACCENTS[tile.hue]} />
        <circle cx="72" cy="66" r="1.8" fill={ACCENTS[tile.hue]} />
        <circle cx="94" cy="30" r="2" fill={ACCENTS[tile.hue]} />
        <circle cx="60" cy="18" r="1.5" fill={ACCENTS[tile.hue]} />
      </svg>
      <div className="relative flex h-full flex-col justify-end p-7">
        <span className="text-3xl font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
          {tile.en}
        </span>
        <span className="mt-2 text-base font-light" style={{ color: ACCENTS[tile.hue] }}>
          {tile.zh}
        </span>
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.offsetTop;
      const h = el.offsetHeight;
      if (window.scrollY + window.innerHeight < top - 300 || window.scrollY > top + h + 300) return;
      setOffset((window.scrollY - top + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const row1 = [...ROW1, ...ROW1, ...ROW1];
  const row2 = [...ROW2, ...ROW2, ...ROW2];
  const PERIOD1 = ROW1.length * 432;
  const PERIOD2 = ROW2.length * 432;

  return (
    <section ref={ref} className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200 - PERIOD1}px)`, willChange: 'transform' }}
        >
          {row1.map((t, i) => (
            <TileCard key={`a${i}`} tile={t} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200) - PERIOD2}px)`, willChange: 'transform' }}
        >
          {row2.map((t, i) => (
            <TileCard key={`b${i}`} tile={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
