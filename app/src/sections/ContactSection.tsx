import { useState } from 'react';
import FadeIn from '../components/FadeIn';

const STEPS = [
  { n: '1', title: '关注公众号', desc: '微信搜索「JdayStudy」，或扫描二维码关注。' },
  { n: '2', title: '留言你想要的工具', desc: '在公众号后台留言工具名称，说明你的研究场景。' },
  { n: '3', title: '获取软件与文档', desc: '收到软件、使用说明与指标公式文档，更新持续跟进。' },
];

export default function ContactSection() {
  const [qrError, setQrError] = useState(false);

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 py-20 sm:px-8 sm:py-28 md:px-10 md:py-36">
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
        <p className="mt-4 text-center text-sm font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/60 sm:text-base">
          获取软件与试用
        </p>
      </FadeIn>

      <div className="mx-auto mt-14 grid max-w-4xl items-center gap-12 sm:mt-20 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div className="flex flex-col gap-7 sm:gap-9">
          {STEPS.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.12} y={24}>
              <div className="flex items-start gap-4 sm:gap-5">
                <span
                  className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full text-sm font-bold text-white sm:h-10 sm:w-10 sm:text-base"
                  style={{
                    background: 'linear-gradient(123deg, #B600A8 0%, #7621B0 100%)',
                    boxShadow: '0 0 18px rgba(182, 0, 168, 0.4)',
                  }}
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="text-base font-medium text-[#D7E2EA] sm:text-xl">{s.title}</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-[#D7E2EA]/55 sm:text-base">{s.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25} y={30}>
          <div className="mx-auto w-full max-w-[320px] rounded-[32px] bg-white p-7 text-center shadow-[0_24px_80px_rgba(182,0,168,0.25)]">
            <div className="flex items-center gap-3 text-left">
              <span
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full text-lg font-black text-white"
                style={{ background: 'linear-gradient(123deg, #18011F 0%, #7621B0 100%)' }}
              >
                J
              </span>
              <div>
                <b className="block text-base text-[#0C0C0C]">JdayStudy</b>
                <span className="text-xs text-[#0C0C0C]/55">微信公众号 · 网络科学软件与教程</span>
              </div>
            </div>
            <div className="mx-auto mt-5 h-[200px] w-[200px] overflow-hidden rounded-2xl bg-[#F1F4F9]">
              {qrError ? (
                <div className="flex h-full w-full items-center justify-center rounded-2xl border-2 border-dashed border-[#C6D2E2] p-4 text-xs leading-relaxed text-[#0C0C0C]/50">
                  公众号二维码
                  <br />
                  assets/qrcode.png
                </div>
              ) : (
                <img
                  src="./assets/qrcode.png"
                  alt="JdayStudy 公众号二维码"
                  className="h-full w-full object-contain"
                  onError={() => setQrError(true)}
                />
              )}
            </div>
            <p className="mt-4 text-xs text-[#0C0C0C]/55">长按或扫码关注，获取软件与全部教程</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
