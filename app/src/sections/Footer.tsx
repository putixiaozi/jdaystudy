export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0C0C0C] px-5 py-9 sm:px-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 text-xs font-light text-[#D7E2EA]/45 sm:text-sm">
        <span>
          <b className="font-medium text-[#D7E2EA]/80">JdayStudy</b> · 复杂网络分析工具箱
        </span>
        <span>内容整理自微信公众号 JdayStudy 原创推文 · © {new Date().getFullYear()} JdayStudy</span>
      </div>
    </footer>
  );
}
