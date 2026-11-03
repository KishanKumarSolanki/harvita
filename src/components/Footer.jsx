import logo from "../assets/harvitaa-logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-green px-5 py-10 text-cream sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-5 border-b border-cream/15 pb-7 sm:flex-row">
          <a href="#home" className="flex items-center gap-3"><span className="rounded-md bg-cream p-1.5"><img src={logo} alt="HARVITAA" className="h-10 w-auto" /></span><span className="text-xs font-semibold tracking-wide text-cream/80">Legal &amp; Business Solutions</span></a>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-cream/70"><a href="#about-us" className="hover:text-gold">About</a><a href="#services" className="hover:text-gold">Services</a><a href="#faqs" className="hover:text-gold">FAQs</a><a href="#contact" className="hover:text-gold">Contact</a></nav>
        </div>
        <p className="mx-auto mt-6 max-w-5xl text-center text-[10px] leading-5 text-cream/55">HARVITAA is a business support and compliance consultancy. Legal opinions, certifications, statutory filings, attestations and other regulated professional work are handled by appropriately qualified or authorised professionals where required.</p>
        <p className="mt-5 text-center text-[10px] text-cream/45">© {new Date().getFullYear()} HARVITAA. All rights reserved.</p>
      </div>
    </footer>
  );
}
