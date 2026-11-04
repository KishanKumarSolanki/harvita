// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-green px-4 pb-16 pt-14 text-center sm:px-8 sm:pb-24 sm:pt-20 lg:pt-28"
    >
      {/* Keyframes for the continuous shine sweep on the primary CTA */}
      <style>{`
        @keyframes harvitaa-hero-shine {
          0%   { transform: translateX(-150%) skewX(-20deg); }
          55%  { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(400%) skewX(-20deg); }
        }
      `}</style>

      {/* Soft champagne glow behind the headline */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#E3C07A]/10 blur-3xl" />

      {/* Thin premium gold rules */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E3C07A]/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E3C07A]/40 to-transparent" />

      <div className="relative mx-auto max-w-4xl">
        {/* Eyebrow */}
        <p className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-[#E3C07A]/40 bg-[#E3C07A]/10 px-5 py-2 text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-[#E3C07A] sm:text-xs sm:tracking-[0.25em]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E3C07A] shadow-[0_0_10px_#E3C07A]" />
          <span>Business · Compliance · Intellectual Property</span>
        </p>

        {/* Headline */}
        <h1 className="mx-auto font-serif text-[clamp(2.5rem,10.5vw,4.25rem)] font-bold leading-[1.08] tracking-tight text-balance text-cream drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)] sm:text-6xl lg:text-7xl">
          Your Business Journey,{" "}
          <span className="inline-block bg-gradient-to-r from-[#B8862A] via-[#F1D48A] to-[#B8862A] bg-clip-text text-transparent">
            Simplified.
          </span>
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#E3C07A]/60" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#E3C07A]" />
          <span className="h-px w-12 bg-[#E3C07A]/60" />
        </div>

        {/* Sub-headline (full white, larger) */}
        <p className="mx-auto mt-7 max-w-3xl font-serif text-xl font-semibold leading-8 text-cream sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-[3rem]">
          Build Your Business. <span className="italic text-[#E3C07A]">Protect Your Brand.</span> Stay Compliant.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-cream/65 sm:text-base">
          From business registration and startup support to trademark protection, taxation and regulatory compliance,
          HARVITAA helps simplify your business journey.
        </p>

        {/* CTAs */}
        <div className="mx-auto mt-10 flex w-full max-w-md items-center justify-center gap-3">
          {/* Primary pill button with continuous shine */}
          <a
            href="#contact"
            className="group relative min-w-0 flex-1 overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-b from-[#E9C978] to-[#B8862A] px-3 py-4 text-[12px] font-bold text-green shadow-[0_10px_30px_-8px_rgba(201,150,43,0.6),inset_0_1px_0_rgba(255,255,255,0.45)] ring-1 ring-[#E3C07A]/60 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(201,150,43,0.8),inset_0_1px_0_rgba(255,255,255,0.6)] sm:flex-none sm:px-9 sm:text-sm"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              style={{ animation: "harvitaa-hero-shine 3.6s ease-in-out infinite" }}
            />
            <span className="relative z-10">
              Book a Consultation <span aria-hidden="true" className="ml-0.5">↗</span>
            </span>
          </a>

          {/* Secondary pill button with hover shine */}
          <a
            href="#services"
            className="group relative min-w-0 flex-1 overflow-hidden whitespace-nowrap rounded-full border border-[#E3C07A]/40 bg-cream/5 px-3 py-4 text-[12px] font-semibold text-cream backdrop-blur transition duration-300 hover:border-[#E3C07A] hover:bg-[#E3C07A]/10 hover:text-[#E3C07A] sm:flex-none sm:px-9 sm:text-sm"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#E3C07A]/30 to-transparent transition-all duration-700 group-hover:left-full"
            />
            <span className="relative z-10">Explore Our Services</span>
          </a>
        </div>
      </div>
    </section>
  );
}