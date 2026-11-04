// src/components/About.jsx
const pillars = [
  {
    title: "Business Registration",
    desc: "Company, LLP, OPC, Section 8 and firm setup handled with clarity.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6M9 11h.01M15 11h.01" />
      </svg>
    ),
  },
  {
    title: "Intellectual Property",
    desc: "Trademark search, filing, objections and brand name protection.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Taxation & GST",
    desc: "Registration, return filing, amendments and notice assistance.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </svg>
    ),
  },
  {
    title: "Licences & Compliance",
    desc: "FSSAI, MSME, IEC, trade licence and ongoing regulatory support.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="5" />
        <path d="M9 13.5L7.5 21l4.5-2 4.5 2-1.5-7.5" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-sand px-5 pb-10 pt-14 sm:px-8 sm:pb-14 sm:pt-20"
    >
      {/* Keyframes for the continuous shine sweep on the CTA button */}
      <style>{`
        @keyframes harvitaa-shine {
          0%   { transform: translateX(-150%) skewX(-20deg); }
          60%  { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(350%) skewX(-20deg); }
        }
      `}</style>

      {/* Soft champagne glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] -translate-x-1/2 rounded-full bg-[#E3C07A]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Centered heading block */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gold sm:text-xs">
            <span className="h-px w-8 bg-gold/70" />
            About HARVITAA
            <span className="h-px w-8 bg-gold/70" />
          </p>

          <h2 className="mt-6 text-balance font-serif text-[2.1rem] font-bold leading-[1.12] tracking-tight text-green sm:text-5xl sm:leading-tight">
            The right support for every stage of your
            <span className="mt-1 block italic text-gold">business journey.</span>
          </h2>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
            <span className="h-px w-12 bg-gold/60" />
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-green/75 sm:text-base sm:leading-8">
            HARVITAA is a professional business and legal support consultancy for entrepreneurs, startups, small
            businesses and established organisations. We bring business registration, intellectual property
            protection, taxation, licences and regulatory compliance support together under one brand.
          </p>
        </div>

        {/* Pillar cards: icon on left, text on right */}
        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl bg-gradient-to-b from-cream to-[#FCFAF3] p-5 ring-1 ring-inset ring-green/10 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_22px_44px_-28px_rgba(31,61,43,0.45)] transition duration-500 hover:-translate-y-1 hover:ring-gold/40 hover:shadow-[0_30px_56px_-24px_rgba(201,150,43,0.45)] sm:items-center sm:gap-6 sm:p-7"
            >
              {/* Gold top accent */}
              <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />

              {/* Icon tile */}
              <div className="relative flex shrink-0 items-center justify-center">
                <span className="absolute inset-0 translate-y-2 rounded-2xl bg-[#8A6518]/30 blur-lg" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F6DF9E] via-[#D9A94A] to-[#9C6A18] text-green ring-1 ring-inset ring-white/50 shadow-[inset_0_2px_0_rgba(255,255,255,0.6),inset_0_-4px_8px_rgba(90,55,10,0.35),0_12px_20px_-8px_rgba(120,80,20,0.6)] transition duration-500 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-105 sm:h-[72px] sm:w-[72px]">
                  {p.icon}
                </span>
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1 pt-0.5">
                <span className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-2.5 py-0.5 font-serif text-[11px] font-bold tracking-[0.2em] text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-2.5 font-serif text-lg font-bold leading-snug text-green sm:text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-green/70">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center text-center">
          <a
            href="#services"
            className="group relative inline-flex min-w-[260px] items-center justify-center gap-3 overflow-hidden rounded-full bg-green px-12 py-5 text-base font-bold tracking-wide text-cream shadow-[0_10px_22px_-12px_rgba(31,61,43,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-gold/50 transition duration-300 hover:-translate-y-1 hover:bg-[#2A5238] hover:shadow-[0_16px_30px_-12px_rgba(31,61,43,0.65)] sm:min-w-[300px] sm:px-14 sm:py-6 sm:text-lg"
          >
            {/* Shine sweep */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              style={{ animation: "harvitaa-shine 3.6s ease-in-out infinite" }}
            />
            <span className="relative z-10">Explore Our Services</span>
            <span aria-hidden="true" className="relative z-10 text-xl text-gold transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}