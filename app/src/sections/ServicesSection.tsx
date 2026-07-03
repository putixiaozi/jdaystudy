import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    num: '01',
    name: '中心性与结构特征',
    desc: '35+ 节点指标与 20+ 网络指标一键算齐，熵值法客观赋权，直接输出每个节点的综合得分与排名，说清网络里谁最重要。',
  },
  {
    num: '02',
    name: '鲁棒性与攻击模拟',
    desc: '随机与蓄意攻击、8 种策略自由勾选、9 项性能指标全程追踪，把"这个网络多抗打"变成一条可对比的曲线。',
  },
  {
    num: '03',
    name: '网络韧性评估',
    desc: '静态扰动 + 动态恢复完整建模，韧性曲线 R(t) 与综合韧性值 CRA，量化系统从被打击到恢复的全过程。',
  },
  {
    num: '04',
    name: 'SIR 传播仿真',
    desc: '在真实网络结构上推演疾病与谣言的扩散，五种免疫策略对比、零模型对照、参数敏感性热力图，一站完成。',
  },
  {
    num: '05',
    name: '网络优化与数据工具',
    desc: '五种加边策略自动对比，找出让网络更稳、效率更高的最优方案；矩阵与三列边表一键互转，打通 UCINET、Gephi 的数据格式。',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-center font-black uppercase leading-none tracking-tight text-[#0C0C0C]"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
        <p className="mt-4 text-center text-sm font-medium uppercase tracking-[0.35em] text-[#0C0C0C]/50 sm:text-base">
          我们能帮你算什么
        </p>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-5xl sm:mt-20 md:mt-28">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.num} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="flex-none font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {s.num}
              </span>
              <div className="pt-2 md:pt-4">
                <h3
                  className="font-medium uppercase tracking-wide text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {s.name}
                </h3>
                <p
                  className="mt-3 max-w-2xl font-light leading-relaxed text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
