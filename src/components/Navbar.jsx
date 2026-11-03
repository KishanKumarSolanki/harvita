import logo from "../assets/harvitaa-logo.jpg";

const links = [["About", "#about-us"], ["Services", "#services"], ["How it works", "#how-it-works"], ["FAQs", "#faqs"]];

export default function Navbar() {
  return (
    <header className="relative z-10 mx-auto max-w-7xl px-5 py-4 sm:px-8 lg:px-10">
      <div className="flex items-center justify-between">
        <a href="#home" aria-label="HARVITAA home" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-cream p-1.5"><img src={logo} alt="" className="h-full w-full rounded-full object-contain" /></span>
          <span className="text-sm font-extrabold tracking-[0.12em] text-cream">HARVITAA<span className="text-gold">.</span><span className="mt-0.5 block text-[9px] font-medium tracking-normal text-cream/60">LEGAL &amp; BUSINESS SOLUTIONS</span></span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-xs font-semibold text-cream/75 transition hover:text-gold">{label}</a>)}
        </nav>
        <a href="#contact" className="rounded-md bg-gold px-4 py-2.5 text-xs font-bold text-green transition hover:bg-cream sm:px-5">Get Started</a>
      </div>
      <nav aria-label="Mobile navigation" className="mt-4 flex gap-5 overflow-x-auto border-t border-cream/15 pt-3 lg:hidden">
        {links.map(([label, href]) => <a key={label} href={href} className="shrink-0 text-[11px] font-semibold text-cream/75 transition hover:text-gold">{label}</a>)}
      </nav>
    </header>
  );
}
