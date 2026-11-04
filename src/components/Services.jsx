
import { useState } from "react";
import { services } from "../data/content";

const pillKeyframes = `
  @keyframes gold-border-glow {
    0%, 100% {
      border-color: rgba(201, 162, 76, 0.35);
      box-shadow: 0 0 0 rgba(201, 162, 76, 0);
    }
    50% {
      border-color: rgba(233, 201, 120, 0.95);
      box-shadow:
        0 0 10px rgba(201, 162, 76, 0.25),
        0 0 22px rgba(201, 162, 76, 0.12);
    }
  }

  @keyframes active-gold-glow {
    0%, 100% {
      box-shadow:
        0 8px 24px rgba(201, 162, 76, 0.22),
        inset 0 1px 0 rgba(255,255,255,0.45);
    }
    50% {
      box-shadow:
        0 10px 30px rgba(201, 162, 76, 0.38),
        inset 0 1px 0 rgba(255,255,255,0.65);
    }
  }
`;

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-green px-5 py-20 text-cream sm:px-8 sm:py-24"
    >
      <style>{pillKeyframes}</style>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-gold/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-gold/[0.05] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[.28em] text-gold">
            Our Services
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl">
            Everything your business needs to move forward.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-cream/65 sm:text-base">
            Explore our five service areas. We'll help you understand the
            requirements and the right next steps for your business.
          </p>
        </div>

        {/* Premium Service Pills */}
        <div
          className="mx-auto mb-10 flex max-w-5xl flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5"
          role="tablist"
          aria-label="Service categories"
        >
          {services.map((service, i) => {
            const isActive = active === i;

            return (
              <button
                key={service.no}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="service-detail"
                id={`service-tab-${i}`}
                onClick={() => setActive(i)}
                className={`
                  group relative isolate flex min-h-[82px]
                  w-[calc(50%-0.375rem)] items-center justify-center
                  overflow-hidden rounded-2xl border
                  px-4 py-5 text-center
                  transition-all duration-500 ease-out
                  sm:w-[calc(33.333%-0.75rem)]
                  sm:min-h-[94px] sm:px-6
                  ${
                    isActive
                      ? "border-[#E9C978] bg-gradient-to-br from-[#E9C978] via-[#D7AE54] to-[#B8862A] text-[#173B2B] -translate-y-1"
                      : "border-[#C9A24C]/30 bg-white/[.035] text-cream hover:-translate-y-1 hover:border-[#E9C978]/80 hover:bg-white/[.07]"
                  }
                `}
                style={{
                  animation: isActive
                    ? "active-gold-glow 3s ease-in-out infinite"
                    : `gold-border-glow 4s ease-in-out ${i * 0.5}s infinite`,
                }}
              >
                {/* Subtle gold border highlight */}
                <span
                  aria-hidden="true"
                  className={`
                    pointer-events-none absolute inset-0 rounded-2xl
                    border transition-all duration-500
                    ${
                      isActive
                        ? "border-white/30"
                        : "border-transparent group-hover:border-[#E9C978]/30"
                    }
                  `}
                />

                {/* Top golden highlight */}
                <span
                  aria-hidden="true"
                  className={`
                    pointer-events-none absolute left-[15%] right-[15%]
                    top-0 h-px
                    ${
                      isActive
                        ? "bg-white/70"
                        : "bg-gradient-to-r from-transparent via-[#E9C978]/50 to-transparent"
                    }
                  `}
                />

                {/* Service title - Increased font size */}
                <span
                  className={`
                    relative z-10 mx-auto max-w-[240px]
                    font-serif text-sm font-bold leading-snug
                    tracking-wide
                    sm:text-base lg:text-lg
                    ${
                      isActive
                        ? "text-[#173B2B]"
                        : "text-cream/90 group-hover:text-white"
                    }
                  `}
                >
                  {service.title}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <span className="absolute bottom-2 right-3 h-1.5 w-1.5 rounded-full bg-[#173B2B]/60" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Service Detail Panel */}
        <div
          id="service-detail"
          role="tabpanel"
          aria-labelledby={`service-tab-${active}`}
          className="
            relative overflow-hidden rounded-2xl
            border border-[#C9A24C]/25 bg-cream
            p-5 text-green shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            sm:p-8 lg:p-10
          "
        >
          {/* Decorative gold accent */}
          <div className="absolute right-0 top-0 h-1 w-1/3 bg-gradient-to-l from-[#C9A24C] to-transparent" />

          <div className="flex flex-col justify-between gap-6 border-b border-green/10 pb-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-green/50 sm:text-[11px]">
                Service Area {current.no}
              </p>

              <h3 className="mt-3 font-serif text-3xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                {current.title}
              </h3>
            </div>

            {/* <a
              href="#contact"
              className="
                group inline-flex w-fit items-center gap-3
                rounded-full border border-[#C9A24C]
                bg-gradient-to-r from-[#E9C978] to-[#C99A3B]
                px-7 py-4 text-sm font-bold text-green
                shadow-[0_5px_15px_rgba(201,154,59,0.18)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(201,154,59,0.3)]
              "
            >
              Enquire about this service

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a> */}
          </div>

          {/* Service Items */}
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {current.items.map((item) => (
              <li
                key={item}
                className="
                  group flex min-h-[60px] items-center gap-3
                  rounded-lg border border-green/[0.09]
                  bg-white px-4 py-3.5
                  text-sm font-medium leading-relaxed text-green/85
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:border-[#C9A24C]/50
                  hover:shadow-[0_5px_16px_rgba(0,0,0,0.05)]
                  sm:text-[15px]
                "
              >
                <span
                  className="
                    flex h-7 w-7 shrink-0 items-center justify-center
                    rounded-full bg-[#C9A24C]/10
                    text-sm font-bold text-[#B8862A]
                    transition-all duration-300
                    group-hover:bg-[#C9A24C]
                    group-hover:text-white
                  "
                >
                  ✓
                </span>

                {item}
              </li>
            ))}
          </ul>

          {/* Bottom decorative line */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-[#C9A24C]/40 via-green/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
