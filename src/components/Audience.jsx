import { audience } from "../data/content";

export default function Audience() {
  return (
    <section id="who-we-help" className="bg-sand px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-green/55">Who we help</p><h2 className="mt-3 font-serif text-3xl font-bold text-green sm:text-4xl">Support for businesses at every stage.</h2><p className="mt-4 text-sm leading-7 text-green/65">From first-time founders to established organisations, HARVITAA helps make business processes easier to navigate.</p></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{audience.map((item, i) => <div key={item} className="flex min-h-20 items-center gap-4 rounded-lg border border-green/10 bg-cream px-4 py-4 sm:px-5"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-green font-serif text-xs font-bold text-gold">{String(i + 1).padStart(2, "0")}</span><span className="text-xs font-semibold leading-relaxed text-green">{item}</span></div>)}</div>
      </div>
    </section>
  );
}
