import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import NetworkOrb from '../components/NetworkOrb';
import { ContactButton } from '../components/Buttons';

const NAV = [
  { label: '关于', href: '#about' },
  { label: '服务', href: '#services' },
  { label: '工具', href: '#tools' },
  { label: '联系', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="hero-vh relative flex flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="py-2 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[15vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[16vw] md:-mt-5 md:text-[17vw]">
            JdayStudy
          </h1>
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:translate-y-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="pointer-events-auto"
          >
            <NetworkOrb className="relative aspect-square w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]" />
          </Magnet>
        </FadeIn>
      </div>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            面向科研的零代码复杂网络分析工具箱
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
