const services = [
  ["01", "Business setup", "Company, LLP, OPC and Section 8"],
  ["02", "Brand protection", "Trademark and copyright support"],
  ["03", "GST & taxation", "Registration, returns and compliance"],
  ["04", "Licences", "FSSAI, MSME, IEC and more"],
];

export default function DashboardPreview() {
  return (
    <section aria-label="HARVITAA service overview" className="px-4 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-4 flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-t-xl border border-cream/15 bg-green px-2 pt-2 text-[9px] font-semibold text-cream/55 shadow-sm sm:mb-6 sm:gap-2 sm:text-[11px]">
          {["Business Setup", "Brand Protection", "GST & Tax", "Licences"].map((tab, i) => <span key={tab} className={`shrink-0 rounded-t-lg px-3 py-2 sm:px-4 ${i === 0 ? "bg-cream text-green" : ""}`}>{tab}</span>)}
        </div>
        <div className="overflow-hidden rounded-xl border border-green/15 bg-cream shadow-md">
          <div className="flex h-10 items-center gap-2 border-b border-cream/15 bg-green px-4 sm:h-12 sm:px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-gold" /><span className="h-2.5 w-2.5 rounded-full bg-cream/60" /><span className="h-2.5 w-2.5 rounded-full bg-cream/35" />
            <span className="ml-3 rounded-md bg-white/10 px-3 py-1 font-mono text-[9px] text-cream/65 sm:text-[10px]">HARVITAA · BUSINESS SUPPORT</span>
            <span className="ml-auto hidden text-[10px] text-cream/55 sm:block">Service overview</span>
          </div>
          <div className="grid min-h-[350px] bg-cream md:grid-cols-[175px_minmax(0,1fr)] lg:grid-cols-[205px_minmax(0,1fr)]">
            <aside className="hidden border-r border-green/10 bg-white md:block">
              <div className="flex items-center gap-2.5 border-b border-green/10 px-4 py-5"><div className="grid h-8 w-8 place-items-center rounded-full bg-green font-serif text-sm font-bold text-gold">H</div><div><p className="text-[10px] font-extrabold text-green">HARVITAA</p><p className="text-[8px] text-green/55">LEGAL &amp; BUSINESS</p></div></div>
              <p className="px-4 pb-2 pt-5 text-[8px] font-bold uppercase tracking-[.18em] text-green/45">Explore support</p>
              {["Overview", "Registration", "Trademark & IPR", "GST & taxation", "Licences"].map((item, i) => <div key={item} className={`mx-2 my-1 rounded-lg px-3 py-2.5 text-[10px] font-semibold ${i === 0 ? "bg-pale-sage text-green" : "text-green/70"}`}><span className="mr-2 text-gold">{["⌂", "◇", "✳", "▤", "◷"][i]}</span>{item}</div>)}
            </aside>
            <main className="min-w-0 p-4 sm:p-6 lg:p-8">
              <div className="flex flex-wrap items-end justify-between gap-3"><div><p className="text-[8px] font-bold uppercase tracking-[.2em] text-gold">BUSINESS SUPPORT, ALL IN ONE PLACE</p><h2 className="mt-1 font-serif text-xl font-bold text-green sm:text-2xl">From setup to ongoing support.</h2><p className="mt-1 text-[10px] text-green/60 sm:text-xs">Explore the key areas where HARVITAA can help your business.</p></div><a href="#services" className="rounded-md border border-green/15 bg-white px-3 py-2 text-[9px] font-bold text-green transition hover:border-gold">View services ↗</a></div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:mt-6">
                {services.map(([no, title, description], i) => <a href="#services" key={title} className="group rounded-xl border border-green/10 bg-white p-4 transition hover:-translate-y-0.5 hover:border-gold/70 sm:p-5"><div className="flex items-center justify-between"><span className="grid h-8 w-8 place-items-center rounded-lg bg-pale-sage font-serif text-xs font-bold text-green">{no}</span><span className="text-gold transition group-hover:translate-x-1">↗</span></div><h3 className="mt-3 text-xs font-extrabold text-green sm:text-sm">{title}</h3><p className="mt-1 text-[9px] leading-relaxed text-green/60 sm:text-[10px]">{description}</p><div className="mt-3 h-1 rounded-full bg-sand"><div className={`h-full rounded-full bg-gold ${["w-4/5", "w-3/5", "w-2/3", "w-1/2"][i]}`} /></div></a>)}
              </div>
              <p className="mt-3 text-right text-[8px] text-green/45">Illustrative overview of HARVITAA service areas</p>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
