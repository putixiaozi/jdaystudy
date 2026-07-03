import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { ContactButton } from '../components/Buttons';
import { Glyph } from '../components/Art';

const ABOUT_TEXT =
  'JdayStudy 专注于让复杂网络分析人人可用。从中心性度量、鲁棒性攻击模拟，到网络韧性评估与 SIR 传播仿真——每一款工具都是零代码图形界面，导入 Excel 边表即可运行，产出可以直接进论文的图表与数据。把时间还给科学问题本身，让我们一起把网络算得明白！';

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] sm:left-[2%] md:left-[4%]">
        <Glyph variant="ring" className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <Glyph variant="cube" className="w-[100px] sm:w-[140px] md:w-[180px]" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] sm:right-[2%] md:right-[4%]">
        <Glyph variant="cluster" className="w-[120px] sm:w-[160px] md:w-[210px]" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <Glyph variant="wave" className="w-[130px] sm:w-[170px] md:w-[220px]" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About
          </h2>
          <p className="mt-4 text-center text-sm font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/60 sm:text-base">
            关于 JdayStudy
          </p>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />
      </div>

      <div className="mt-16 sm:mt-20 md:mt-24">
        <FadeIn delay={0.1} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
