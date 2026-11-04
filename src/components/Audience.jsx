
import { audience } from "../data/content";

const audienceIcons = [
  // Business / startup
  <>
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4v18" />
    <path d="M19 21V11l-6-4" />
    <path d="M9 9v.01M9 12v.01M9 15v.01" />
    <path d="M16 13v.01M16 16v.01" />
  </>,

  // Individual / founder
  <>
    <circle cx="12" cy="8" r="4" />
    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
    <path d="m16 11 2 2 4-4" />
  </>,

  // Company / team
  <>
    <rect x="3" y="7" width="18" height="14" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 12h18M10 12v2h4v-2" />
  </>,

  // Protection
  <>
    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
    <path d="m9 12 2 2 4-4" />
  </>,

  // Growth
  <>
    <path d="M3 3v18h18" />
    <path d="m7 14 4-4 4 3 6-7" />
    <path d="M16 6h5v5" />
  </>,

  // Multiple people
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="10" cy="7" r="4" />
    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>,
];

function AudienceIcon({ index }) {
  const icon = audienceIcons[index % audienceIcons.length];

  return (
    <div
      className="
        relative flex h-[68px] w-[68px] shrink-0
        items-center justify-center rounded-2xl

        border border-[#D9C58F]/60
        bg-gradient-to-br from-[#FFF9EB] via-[#F7EED9] to-[#E8D8B4]

        text-[#98732E]

        shadow-[0_3px_0_#C7AD73,0_6px_12px_rgba(23,59,43,0.10),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(139,99,33,0.12)]

        transition-all duration-500 ease-out

        group-hover:-translate-y-1
        group-hover:scale-105
        group-hover:shadow-[0_5px_0_#B18A42,0_10px_18px_rgba(201,162,76,0.22),inset_0_2px_3px_white]

        sm:h-[74px] sm:w-[74px]
      "
    >
      {/* Glossy highlight */}
      <span
        className="
          pointer-events-none absolute
          inset-x-3 top-1 h-1/3
          rounded-full
          bg-gradient-to-b from-white/80 to-transparent
          blur-[2px]
        "
      />

      {/* Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="
          relative z-10 h-7 w-7
          drop-shadow-[0_2px_1px_rgba(115,78,25,0.25)]
          transition-transform duration-500
          group-hover:scale-110
          sm:h-8 sm:w-8
        "
        aria-hidden="true"
      >
        {icon}
      </svg>

      {/* Bottom reflection */}
      <span className="pointer-events-none absolute bottom-0 left-3 right-3 h-px bg-white/80" />
    </div>
  );
}

export default function Audience() {
  return (
    <section
      id="who-we-help"
      className="
        relative isolate overflow-hidden
        bg-sand px-5 py-20
        sm:px-8 sm:py-24
      "
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#C9A24C]/[0.07] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-green/[0.05] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#B8862A] sm:text-xs">
            Who We Help
          </p>

          <h2 className="
            mt-4 font-serif text-3xl font-bold
            leading-tight text-green
            sm:text-4xl lg:text-5xl
          ">
            Support for businesses at every stage.
          </h2>

          <p className="
            mx-auto mt-5 max-w-xl
            text-sm leading-7 text-green/65
            sm:text-base
          ">
            From first-time founders to established organisations,
            HARVITAA helps make business processes easier to navigate.
          </p>

          {/* Gold Divider */}
          <div className="
            mx-auto mt-6 h-[2px] w-16
            rounded-full
            bg-gradient-to-r
            from-transparent via-[#C9A24C] to-transparent
          " />

        </div>

        {/* Audience Cards */}
        <div className="
          grid grid-cols-1 gap-4
          md:grid-cols-2
          lg:grid-cols-3
          lg:gap-5
        ">

          {audience.map((item, i) => (
            <article
              key={item}
              className="
                group relative isolate
                flex min-h-[112px] items-center
                gap-5 overflow-hidden

                rounded-2xl
                border border-[#C9A24C]/20
                bg-gradient-to-r
                from-white via-[#FFFDF8] to-[#F8F3E8]

                p-4 pr-5 sm:p-5

                shadow-[0_5px_18px_rgba(23,59,43,0.045)]

                transition-all duration-500 ease-out

                hover:-translate-y-1.5
                hover:border-[#C9A24C]/55
                hover:shadow-[0_14px_30px_rgba(23,59,43,0.10),0_4px_12px_rgba(201,162,76,0.10)]
              "
            >

              {/* Left Golden Accent */}
              <span
                className="
                  absolute left-0 top-0
                  h-[58%] w-[5px]
                  rounded-br-full
                  bg-gradient-to-b
                  from-[#E9C978] to-[#B8862A]
                  shadow-[2px_0_8px_rgba(201,162,76,0.20)]
                  transition-all duration-500
                  group-hover:h-full
                "
              />

              {/* Icon */}
              <AudienceIcon index={i} />

              {/* Card Text */}
              <div className="relative z-10 min-w-0 flex-1">

                <p className="
                  text-sm font-bold
                  leading-relaxed text-green
                  transition-colors duration-300
                  group-hover:text-[#8B6829]
                  sm:text-base lg:text-[15px]
                ">
                  {item}
                </p>

                {/* Small Gold Underline */}
                <div className="
                  mt-2 h-[2px] w-0
                  rounded-full
                  bg-gradient-to-r
                  from-[#B8862A] to-[#E9C978]
                  transition-all duration-500
                  group-hover:w-12
                " />

              </div>

              {/* Right Arrow */}
              <span
                className="
                  flex h-7 w-7 shrink-0
                  items-center justify-center
                  rounded-full border border-[#C9A24C]/20
                  text-[#A17B35]
                  opacity-0
                  -translate-x-2
                  transition-all duration-300
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
