export function ContactButton({ label = '获取软件' }: { label?: string }) {
  return (
    <a
      href="#contact"
      className="inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid #fff',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  );
}

export function LiveProjectButton({ href, label = '阅读推文' }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] bg-[#D7E2EA] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[#0C0C0C] transition-colors duration-200 hover:border-white hover:bg-white sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
    </a>
  );
}
