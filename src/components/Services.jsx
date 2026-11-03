import { useState } from "react";
import { services } from "../data/content";

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="bg-green px-5 py-20 text-cream sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-gold">Our Services</p><h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl">Everything your business needs to move forward.</h2><p className="mt-4 text-sm leading-7 text-cream/70">Explore our five service areas. We’ll help you understand the requirements and the right next steps for your business.</p></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5" role="tablist" aria-label="Service categories">
          {services.map((service, i) => <button key={service.no} type="button" role="tab" aria-selected={active === i} aria-controls="service-detail" onClick={() => setActive(i)} className={`min-h-32 rounded-lg border p-4 text-left transition sm:p-5 ${active === i ? "border-gold bg-cream text-green" : "border-cream/20 bg-white/[.05] text-cream hover:border-gold/70 hover:bg-white/[.09]"}`}><span className={`font-serif text-2xl font-bold ${active === i ? "text-gold" : "text-gold"}`}>{service.no}</span><span className="mt-3 block text-xs font-bold leading-snug sm:text-sm">{service.title}</span><span className={`mt-2 block text-[10px] ${active === i ? "text-green/60" : "text-cream/55"}`}>{service.items.length} areas of support</span></button>)}
        </div>
        <div id="service-detail" role="tabpanel" className="mt-5 rounded-xl bg-cream p-5 text-green sm:p-8 lg:p-10">
          <div className="flex flex-col justify-between gap-5 border-b border-green/10 pb-5 sm:flex-row sm:items-end"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-green/50">Service area {current.no}</p><h3 className="mt-2 text-2xl font-bold sm:text-3xl">{current.title}</h3></div><a href="#contact" className="w-fit rounded-md bg-gold px-5 py-3 text-xs font-bold text-green transition hover:bg-green hover:text-cream">Enquire about this service ↗</a></div>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{current.items.map((item) => <li key={item} className="flex min-h-12 items-center gap-3 rounded-md border border-green/10 bg-white px-4 py-3 text-xs font-medium text-green/85"><span className="text-sm text-gold">✓</span>{item}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
