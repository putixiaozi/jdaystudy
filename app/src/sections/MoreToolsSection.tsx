import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const MORE = [
  {
    name: '指定节点蓄意攻击客户端',
    desc: '按你指定的顺序移除节点，模拟断供、退出、灭绝等定制化冲击场景。',
    href: 'https://mp.weixin.qq.com/s?__biz=MzkyMzE4NDc3Mg==&mid=2247488024&idx=1&sn=532e77a50aedb102f37c36e0921d93aa',
  },
  {
    name: '网络加边策略工具',
    desc: '预算有限，新连线加在哪里收益最大？五种策略自动对比出最优方案。',
    href: 'https://mp.weixin.qq.com/s?__biz=MzkyMzE4NDc3Mg==&mid=2247487096&idx=1&sn=99bb63cd2310f577c2d0a738ce374958',
  },
  {
    name: '矩阵与三列式互转工具',
    desc: '邻接矩阵与边表一键互转，打通 UCINET、Gephi 与本系列软件的数据格式。',
    href: 'https://mp.weixin.qq.com/s?__biz=MzkyMzE4NDc3Mg==&mid=2247486539&idx=3&sn=96330a9dc9af41946b31697cc7b73ab0',
  },
];

const DOCS = [
  { name: '中心性指标详细说明', href: 'https://mp.weixin.qq.com/s/8F0TOCooo9HV23T8exISbg' },
  {
    name: '脆弱性分析指标公式',
    href: 'https://mp.weixin.qq.com/s?__biz=MzkyMzE4NDc3Mg==&mid=2247486653&idx=2&sn=759c73e223b694c59c1cc8bc03009c33',
  },
  { name: '韧性客户端公式详解', href: 'https://mp.weixin.qq.com/s/QL6Br6QxnoEZ4ie-yr417g' },
  { name: 'ERGM / TERGM / STERGM 详解', href: 'https://mp.weixin.qq.com/s/66F-mCggpO3AnLQMLjcz6w' },
  { name: '案例：产业网络韧性', href: 'https://mp.weixin.qq.com/s/qcTVDbaI9JvtLExQqGxC5w' },
  { name: '操作视频：鲁棒性分析', href: 'https://mp.weixin.qq.com/s/gC9rC9D7Fhxy7vLLV9w5uQ' },
  { name: '软件集合总目录', href: 'https://mp.weixin.qq.com/s/9IeO6Xe6S_sSRbUECJ3Epg' },
];

export default function MoreToolsSection() {
  return (
    <section className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-24 md:px-10">
      <div className="mx-auto max-w-5xl">
        <FadeIn delay={0} y={30}>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/50 sm:text-sm">
            More Tools 更多工具
          </p>
        </FadeIn>

        <div className="mt-8">
          {MORE.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.1} y={24}>
              <a
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-6 transition-opacity duration-200 hover:opacity-80 sm:py-8"
                style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
              >
                <div>
                  <h3 className="font-medium uppercase tracking-wide text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2vw, 1.7rem)' }}>
                    {m.name}
                  </h3>
                  <p className="mt-1.5 max-w-2xl font-light leading-relaxed text-[#D7E2EA]/50" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}>
                    {m.desc}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-6 w-6 flex-none text-[#D7E2EA]/60 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} y={24}>
          <div className="mt-12 sm:mt-16">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/50 sm:text-sm">
              Docs 公式文档与教程
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
              {DOCS.map((d) => (
                <a
                  key={d.name}
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#D7E2EA]/30 px-4 py-2.5 text-xs font-light text-[#D7E2EA]/80 transition-colors duration-200 hover:border-[#D7E2EA]/70 hover:text-[#D7E2EA] sm:px-5 sm:py-3 sm:text-sm"
                >
                  {d.name}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
