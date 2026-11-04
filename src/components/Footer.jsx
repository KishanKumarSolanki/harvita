
import logo from "../assets/harvitaa-logo.jpg";
import WhatsAppIcon from "./WhatsAppIcon";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about-us" },
  { label: "Services", href: "#services" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="
        relative isolate overflow-hidden
        bg-gradient-to-br
        from-[#244B36] via-[#173B2B] to-[#102C20]
        px-5 pt-16 pb-7
        text-cream
        sm:px-8 sm:pt-20
      "
    >
      {/* Background Decorations */}
      <div className="
        pointer-events-none absolute
        -right-32 -top-32
        h-80 w-80 rounded-full
        bg-[#C9A24C]/[0.08] blur-3xl
      " />

      <div className="
        pointer-events-none absolute
        -bottom-32 -left-32
        h-80 w-80 rounded-full
        bg-white/[0.035] blur-3xl
      " />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="
          grid gap-12
          border-b border-[#E9C978]/20
          pb-12
          md:grid-cols-2
          lg:grid-cols-[1.4fr_0.8fr_0.8fr]
          lg:gap-16
        ">

          {/* Brand Section */}
          <div>

            {/* Logo */}
            <a
              href="#home"
              className="
                group inline-flex items-center gap-4
              "
            >
              <span className="
                relative flex h-[70px] w-[70px]
                items-center justify-center
                overflow-hidden rounded-2xl

                border border-[#E9C978]/50
                bg-cream p-2

                shadow-[0_5px_20px_rgba(0,0,0,0.20)]

                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:shadow-[0_10px_25px_rgba(201,162,76,0.18)]
              ">
                <img
                  src={logo}
                  alt="HARVITAA Logo"
                  className="
                    h-full w-full
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                />
              </span>

              <span>
                <span className="
                  block font-serif text-2xl
                  font-bold tracking-wide text-cream
                ">
                  HARVITAA
                </span>

                <span className="
                  mt-1 block text-[9px]
                  font-semibold uppercase
                  tracking-[.20em] text-[#E9C978]
                ">
                  Legal & Business Solutions
                </span>
              </span>
            </a>

            {/* Brand Description */}
            <p className="
              mt-7 max-w-sm
              text-sm leading-7 text-cream/60
            ">
              Supporting businesses with registration,
              brand protection, taxation and compliance
              solutions. Your business journey,
              supported at every step.
            </p>

            {/* Decorative Gold Divider */}
            <div className="
              mt-6 h-[2px] w-20
              rounded-full
              bg-gradient-to-r
              from-[#E9C978] to-transparent
            " />

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="
              font-serif text-xl font-bold text-cream
            ">
              Quick Links
            </h3>

            <div className="
              mt-3 h-[2px] w-10
              rounded-full bg-[#C9A24C]
            " />

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {footerLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="
                    group flex items-center gap-2
                    text-sm text-cream/65

                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-[#E9C978]
                  "
                >
                  <span className="
                    h-1.5 w-1.5 rounded-full
                    bg-[#C9A24C]/50
                    transition-all duration-300
                    group-hover:bg-[#E9C978]
                    group-hover:shadow-[0_0_8px_rgba(233,201,120,0.6)]
                  " />

                  {label}
                </a>
              ))}
            </nav>

          </div>

          {/* Contact Section */}
          <div>

            <h3 className="
              font-serif text-xl font-bold text-cream
            ">
              Get In Touch
            </h3>

            <div className="
              mt-3 h-[2px] w-10
              rounded-full bg-[#C9A24C]
            " />

            <div className="mt-6 space-y-5">

              {/* Location */}
              <div className="flex items-start gap-3">

                <span className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg border border-[#C9A24C]/30
                  bg-[#E9C978]/10 text-[#E9C978]
                ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <div>
                  <p className="
                    text-[10px] font-bold
                    uppercase tracking-[.15em]
                    text-[#E9C978]/70
                  ">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-cream/75">
                    Patna, Bihar
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">

                <span className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg border border-[#C9A24C]/30
                  bg-[#E9C978]/10 text-[#E9C978]
                ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                </span>

                <div>
                  <p className="
                    text-[10px] font-bold
                    uppercase tracking-[.15em]
                    text-[#E9C978]/70
                  ">
                    Phone
                  </p>

                  <a
                    href="tel:+919046720420"
                    className="
                      mt-1 block text-sm
                      text-cream/75
                      transition hover:text-[#E9C978]
                    "
                  >
                    +91 90467 20420
                  </a>
                </div>

              </div>

              {/* Email */}
              <div className="flex items-start gap-3">

                <span className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-lg border border-[#C9A24C]/30
                  bg-[#E9C978]/10 text-[#E9C978]
                ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>

                <div className="min-w-0">
                  <p className="
                    text-[10px] font-bold
                    uppercase tracking-[.15em]
                    text-[#E9C978]/70
                  ">
                    Email
                  </p>

                  <a
                    href="mailto:HARVITAA.SOLUTIONS@GMAIL.COM"
                    className="
                      mt-1 block break-all
                      text-xs leading-6
                      text-cream/75
                      transition hover:text-[#E9C978]
                    "
                  >
                    HARVITAA.SOLUTIONS@GMAIL.COM
                  </a>
                </div>

              </div>

            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919046720420"
              target="_blank"
              rel="noreferrer"
              className="
                group mt-7 inline-flex
                items-center gap-3

                rounded-xl
                border border-[#E9C978]/35
                bg-white/[0.05]

                px-5 py-3

                text-xs font-bold text-cream

                transition-all duration-300

                hover:-translate-y-1
                hover:border-[#E9C978]/70
                hover:bg-[#E9C978]/10
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
              "
            >
              <span className="
                transition-transform duration-300
                group-hover:scale-110
              ">
                <WhatsAppIcon />
              </span>

              Chat on WhatsApp

              <span className="
                text-[#E9C978]
                transition-transform duration-300
                group-hover:translate-x-1
              ">
                →
              </span>
            </a>

          </div>

        </div>

        {/* Disclaimer */}
        <div className="
          relative mt-8 overflow-hidden
          rounded-xl border border-[#E9C978]/15
          bg-white/[0.035] px-5 py-5 sm:px-7
        ">

          <div className="flex items-start gap-3">

            <span className="
              mt-0.5 flex h-7 w-7 shrink-0
              items-center justify-center
              rounded-lg border border-[#E9C978]/25
              bg-[#E9C978]/10
              text-[#E9C978]
            ">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 11v5M12 8h.01" />
              </svg>
            </span>

            <div>
              <p className="
                text-[10px] font-bold
                uppercase tracking-[.16em]
                text-[#E9C978]
              ">
                Important Disclaimer
              </p>

              <p className="
                mt-2 text-[11px]
                leading-6 text-cream/50
                sm:text-xs
              ">
                HARVITAA is a business support and compliance consultancy.
                Legal opinions, certifications, statutory filings,
                attestations and other regulated professional work
                are handled by appropriately qualified or authorised
                professionals where required.
              </p>
            </div>

          </div>
        </div>

        {/* Copyright Bottom */}
        <div className="
          mt-8 flex flex-col
          items-center justify-between
          gap-4 text-center

          sm:flex-row sm:text-left
        ">

          <p className="
            text-[10px] tracking-wide
            text-cream/45
          ">
            © {new Date().getFullYear()} HARVITAA.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="
              group inline-flex items-center
              gap-2 text-[10px] font-semibold
              tracking-wide text-cream/55

              transition-colors duration-300
              hover:text-[#E9C978]
            "
          >
            Back to top

            <span className="
              inline-flex h-6 w-6
              items-center justify-center
              rounded-full border border-[#E9C978]/30
              text-[#E9C978]

              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:bg-[#E9C978]/10
            ">
              ↑
            </span>
          </a>

        </div>

      </div>
    </footer>
  );
}
 