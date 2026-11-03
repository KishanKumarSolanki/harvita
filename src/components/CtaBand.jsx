export default function CtaBand() {
  return (
    <section className="bg-green px-5 py-16 text-cream sm:px-8 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[.24em] text-gold">Your business journey, simplified</p>
        <h2 className="font-serif text-3xl font-bold sm:text-4xl">Ready to take the next step?</h2>
        <p className="max-w-2xl text-sm leading-7 text-cream/75">From business setup to brand protection, talk to our team about the support your business needs.</p>
        <a href="#contact" className="mt-1 rounded-md bg-gold px-7 py-3.5 text-sm font-bold text-green transition hover:bg-cream">Book a Consultation</a>
      </div>
    </section>
  );
}
