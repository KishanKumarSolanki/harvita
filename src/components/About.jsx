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
      className="relative overflow-hidden bg-sand px-5 pb-24 pt-12 sm:px-8 sm:pb-32 sm:pt-16"
    >
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

          <h2 className="mt-6 font-serif text-3xl font-bold leading-tight tracking-tight text-green sm:text-5xl">
            The right support for every stage of your{" "}
            <span className="italic text-gold">business journey.</span>
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

        {/* Pillar cards: icon left, text right */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative flex items-start gap-5 overflow-hidden rounded-2xl border border-green/10 bg-cream p-6 shadow-[0_18px_40px_-24px_rgba(31,61,43,0.35)] transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_28px_50px_-20px_rgba(201,150,43,0.4)] sm:p-7"
            >
              <span className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-50 bg-gradient-to-b from-transparent via-gold to-transparent transition duration-500 group-hover:scale-y-100" />

              {/* 3D icon tile (left) */}
              <div className="relative shrink-0">
                <span className="absolute inset-0 translate-y-1.5 rounded-2xl bg-[#8A6518]/35 blur-md" />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F1D48A] via-[#D9A94A] to-[#A8741C] text-green shadow-[inset_0_2px_0_rgba(255,255,255,0.55),inset_0_-3px_6px_rgba(90,55,10,0.35),0_10px_18px_-6px_rgba(120,80,20,0.6)] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-3 group-hover:scale-105">
                  {p.icon}
                </span>
              </div>

              {/* Text (right) */}
              <div className="min-w-0 text-left">
                <span className="block font-serif text-xs font-bold tracking-[0.2em] text-gold">0{i + 1}</span>
                <h3 className="mt-1.5 font-serif text-xl font-bold leading-snug text-green">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-green/70">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-5 text-center">
          <p className="max-w-2xl text-xs leading-6 text-green/60 sm:text-sm">
            Clear guidance, coordinated documentation and practical support, shaped around your requirements.
          </p>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md bg-green px-8 py-3.5 text-sm font-bold text-cream shadow-[0_12px_28px_-10px_rgba(31,61,43,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-gold/40 transition duration-300 hover:-translate-y-0.5 hover:bg-[#2A5238] hover:shadow-[0_18px_36px_-10px_rgba(31,61,43,0.7)]"
          >
            Explore Our Services <span aria-hidden="true" className="text-gold">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}