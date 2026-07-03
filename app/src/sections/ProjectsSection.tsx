import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { LiveProjectButton } from '../components/Buttons';
import { ChipsArt, CurveArt, NetArt } from '../components/Art';

interface Project {
  num: string;
  category: string;
  name: string;
  href: string;
  chips: string[];
  curve: 'decay' | 'resilience' | 'sir';
  seed: number;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    category: '客户端工具',
    name: '中心性度量 3.0',
    href: 'https://mp.weixin.qq.com/s/AqbOCNkDWQN_k0bHKmAXXg',
    chips: ['介数', 'PageRank', 'K-Core', '结构洞', 'HITS', '熵值法', '35+ 指标'],
    curve: 'sir',
    seed: 11,
  },
  {
    num: '02',
    category: '客户端工具',
    name: '脆弱性-鲁棒性分析',
    href: 'https://mp.weixin.qq.com/s/iXdToO9q6MHMyhF20dv1ug',
    chips: ['蓄意攻击', '随机攻击', '8 种策略', '全局效率', '结构熵', '连通鲁棒性'],
    curve: 'decay',
    seed: 23,
  },
  {
    num: '03',
    category: '客户端工具',
    name: '网络韧性静态动态客户端',
    href: 'https://mp.weixin.qq.com/s/QL6Br6QxnoEZ4ie-yr417g',
    chips: ['扰动 × 恢复', 'R(t) 曲线', 'CRA 韧性值', '队列恢复', '动态排序'],
    curve: 'resilience',
    seed: 37,
  },
  {
    num: '04',
    category: '客户端工具',
    name: 'SIR 网络传播仿真',
    href: 'https://mp.weixin.qq.com/s?__biz=MzkyMzE4NDc3Mg==&mid=2247487511&idx=1&sn=d3deb030f8dc5ccea38349574e37780d',
    chips: ['S-I-R 曲线', '五种免疫策略', '零模型', 'R0 估计', '敏感性热力图'],
    curve: 'sir',
    seed: 53,
  },
];

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <motion.div
      className="sticky mb-10 rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:mb-14 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      style={{ scale, top: `calc(5rem + ${index * 28}px)`, transformOrigin: 'top center' }}
    >
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-10">
          <span
            className="hero-heading flex-none font-black leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.num}
          </span>
          <div className="min-w-0 flex-1">
            <p className="whitespace-nowrap text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/50 sm:text-sm">
              {project.category}
            </p>
            <h3
              className="mt-1 font-medium uppercase leading-tight text-[#D7E2EA]"
              style={{ fontSize: 'clamp(1.1rem, 2.6vw, 2.4rem)' }}
            >
              {project.name}
            </h3>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-[2fr_3fr] sm:gap-4 md:mt-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <ChipsArt chips={project.chips} height="clamp(130px, 16vw, 220px)" />
            <CurveArt kind={project.curve} height="clamp(150px, 20vw, 300px)" />
          </div>
          <div className="h-[220px] sm:h-auto">
            <NetArt seed={project.seed} />
          </div>
        </div>
      </motion.div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="tools"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Tools
        </h2>
        <p className="mt-4 text-center text-sm font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/60 sm:text-base">
          四款旗舰客户端 · 点击阅读推文详解
        </p>
      </FadeIn>

      <div ref={containerRef} className="relative mx-auto mt-10 max-w-6xl pb-[8vh] sm:mt-14">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
