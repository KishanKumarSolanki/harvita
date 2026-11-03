import { steps } from "../data/content";

const points = [
  ["Business setup", "Understand structures, registrations and startup requirements."],
  ["Brand protection", "Get assistance with trademark search, filing support and follow-up."],
  ["Ongoing compliance", "Plan for GST, licences and regulatory requirements as you grow."],
];

export default function Difference() {
  return (
    <>
      <section className="bg-cream px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl"><div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-gold">From business setup to brand protection</p><h2 className="mt-3 font-serif text-3xl font-bold text-green sm:text-4xl">Practical support, under one roof.</h2><p className="mt-4 text-sm leading-7 text-green/65">A joined-up approach for the important steps of starting and running a business.</p></div><div className="grid gap-4 md:grid-cols-3">{points.map(([title, text], i) => <article key={title} className="rounded-xl border border-green/10 bg-white p-6 sm:p-7"><span className="grid h-10 w-10 place-items-center rounded-full bg-pale-sage font-serif text-sm font-bold text-green">0{i + 1}</span><h3 className="mt-5 text-xl font-bold text-green">{title}</h3><p className="mt-2 text-xs leading-6 text-green/65">{text}</p></article>)}</div></div>
      </section>
      <section id="how-it-works" className="bg-pale-sage px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl"><div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-[10px] font-bold uppercase tracking-[.24em] text-green/55">A clear process</p><h2 className="mt-3 font-serif text-3xl font-bold text-green sm:text-4xl">Get started in 3 simple steps.</h2></div><div className="grid gap-4 md:grid-cols-3">{steps.map(([number, title, description]) => <article key={number} className="relative rounded-xl border border-green/10 bg-cream p-6 sm:p-8"><span className="font-serif text-5xl font-bold text-gold">{number}</span><h3 className="mt-4 text-base font-bold text-green">{title}</h3><p className="mt-2 text-xs leading-6 text-green/70">{description}</p></article>)}</div></div>
      </section>
    </>
  );
}
