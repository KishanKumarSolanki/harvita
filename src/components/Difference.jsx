
import { steps } from "../data/content";

const points = [
  ["Business setup", "Understand structures, registrations and startup requirements.", "building"],
  ["Brand protection", "Get assistance with trademark search, filing support and follow-up.", "shield"],
  ["Ongoing compliance", "Plan for GST, licences and regulatory requirements as you grow.", "clipboard"],
];

const icons = {
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M19 21V11l-6-4" />
      <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
      <path d="M16 13v.01M16 16v.01M16 19v.01" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4.5V3h6v1.5" />
      <path d="m9 12 2 2 4-4" />
      <path d="M9 17h6" />
    </>
  ),
  message: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
    </>
  ),
  document: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6M8 13h8M8 17h8" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8a2 2 0 0 0-3 0Z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.5C14.5 4 19 3 21 3c0 2-1 6.5-5.5 10a22 22 0 0 1-3.5 2Z" />
      <path d="M9 12H5s.5-3 3-4h3M12 15v4s3-.5 4-3v-3" />
    </>
  ),
};

function PremiumIcon({ name }) {
  return (
    <div
      className="
        group/icon relative flex h-14 w-14 shrink-0
        items-center justify-center rounded-2xl
        border border-[#D5B66F]/70
        bg-gradient-to-br from-[#FFF3D2] via-[#F3DCA9] to-[#D8B66C]
        text-[#896321]
        shadow-[0_3px_0_#B18A42,0_6px_12px_rgba(23,59,43,0.16),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-3px_5px_rgba(139,99,33,0.16)]
        transition-all duration-500 ease-out
        group-hover/icon:-translate-y-1
        group-hover/icon:shadow-[0_5px_0_#B18A42,0_12px_22px_rgba(201,162,76,0.30),inset_0_2px_3px_rgba(255,255,255,0.9)]
        sm:h-16 sm:w-16
      "
    >
      <span className="pointer-events-none absolute inset-x-2 top-1 h-1/3 rounded-full bg-gradient-to-b from-white/70 to-transparent blur-[2px]" />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 h-7 w-7 drop-shadow-[0_2px_1px_rgba(115,78,25,0.35)] transition-all duration-500 group-hover:scale-110 sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        {icons[name]}
      </svg>

      <span className="pointer-events-none absolute bottom-0 left-3 right-3 h-px bg-white/70" />
    </div>
  );
}

/* Enhanced 3D Process Icons */
function ProcessIcon({ name }) {
  return (
    <div
      className="
        group relative isolate flex h-12 w-12 shrink-0
        items-center justify-center rounded-xl

        border border-[#D2B66F]/80
        bg-gradient-to-br from-[#FFFFFF] via-[#F8F0DE] to-[#E4D2A9]

        text-[#896321]

        shadow-[
          0_3px_0_#B18A42,
          0_6px_10px_rgba(23,59,43,0.12),
          0_12px_18px_rgba(23,59,43,0.10),
          inset_0_2px_3px_rgba(255,255,255,0.95),
          inset_0_-3px_5px_rgba(139,99,33,0.16)
        ]

        transition-all duration-500 ease-out

        group-hover:-translate-y-1
        group-hover:scale-110
        group-hover:shadow-[
          0_5px_0_#B18A42,
          0_10px_15px_rgba(23,59,43,0.14),
          0_16px_25px_rgba(201,162,76,0.25),
          inset_0_2px_3px_rgba(255,255,255,1)
        ]
      "
    >
      {/* Glossy top reflection */}
      <span
        className="
          pointer-events-none absolute
          inset-x-2 top-1 h-1/3
          rounded-full
          bg-gradient-to-b
          from-white/90 to-transparent
          blur-[2px]
        "
      />

      {/* 3D Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="
          relative z-10 h-6 w-6
          drop-shadow-[0_2px_1px_rgba(115,78,25,0.35)]
          transition-all duration-500
          group-hover:scale-110
        "
        aria-hidden="true"
      >
        {icons[name]}
      </svg>

      {/* Bottom reflection */}
      <span
        className="
          pointer-events-none absolute
          bottom-0 left-2 right-2
          h-px bg-white/80
        "
      />
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-[10px] font-bold uppercase tracking-[.25em] text-[#B8862A] sm:text-xs">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-green sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-green/65 sm:text-base">
          {description}
        </p>
      )}

      <div className="mx-auto mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-transparent via-[#C9A24C] to-transparent" />
    </div>
  );
}

export default function Difference() {
  const stepIcons = ["message", "document", "rocket"];

  const stepAccents = [
    "from-[#E9C978] to-[#B8862A]",
    "from-[#829D83] to-[#315C45]",
    "from-[#C9A24C] to-[#80612A]",
  ];

  return (
    <>
      {/* ================= DIFFERENCE SECTION ================= */}
      <section className="relative overflow-hidden bg-cream px-5 py-20 sm:px-8 sm:py-24">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#C9A24C]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-green/[0.04] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <SectionHeading
            eyebrow="From business setup to brand protection"
            title="Practical support, under one roof."
            description="A joined-up approach for the important steps of starting and running a business."
          />

          {/* Practical Support Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {points.map(([title, text, icon], i) => (
              <article
                key={title}
                className="
                  group relative isolate overflow-hidden rounded-2xl
                  border border-green/[0.09] bg-white
                  p-6 sm:p-7 lg:p-8
                  shadow-[0_8px_30px_rgba(23,59,43,0.04)]
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#C9A24C]/45
                  hover:shadow-[0_18px_40px_rgba(23,59,43,0.09)]
                "
              >
                {/* Background Number */}
                <span className="pointer-events-none absolute -right-1 -top-7 -z-10 select-none font-serif text-[110px] font-bold leading-none text-green/[0.10] transition-all duration-500 group-hover:text-green/[0.16]">
                  0{i + 1}
                </span>

                {/* Gold Top Line */}
                <div className="absolute left-0 top-0 h-[3px] w-0 bg-gradient-to-r from-[#B8862A] to-[#E9C978] transition-all duration-500 group-hover:w-full" />

                <PremiumIcon name={icon} />

                <div className="relative mt-7">
                  <h3 className="font-serif text-xl font-bold leading-snug text-green sm:text-2xl">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-green/65">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section
        id="how-it-works"
        className="relative overflow-hidden bg-pale-sage px-5 py-20 sm:px-8 sm:py-24"
      >

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#C9A24C]/[0.07] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <SectionHeading
            eyebrow="A clear process"
            title="Get started in 3 simple steps."
            description="From your first conversation to getting the right support, we keep every step simple and transparent."
          />

          {/* Document Style Process Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {steps.map(([number, title, description], i) => (
              <article
                key={number}
                className="
                  group relative isolate flex min-h-[210px]
                  overflow-hidden rounded-2xl
                  border border-[#D8D9D2]
                  bg-gradient-to-br from-white via-[#FBFAF5] to-[#F0EEE5]
                  p-5 pr-9 sm:p-6 sm:pr-10

                  shadow-[0_8px_18px_rgba(30,55,43,0.10),0_2px_4px_rgba(30,55,43,0.06),inset_0_1px_0_rgba(255,255,255,0.95)]

                  transition-all duration-500 ease-out
                  hover:-translate-y-2
                  hover:border-[#C9A24C]/60
                  hover:shadow-[0_18px_30px_rgba(30,55,43,0.13),0_5px_10px_rgba(201,162,76,0.10)]
                "
              >

                {/* Right Vertical Accent Strip */}
                <div
                  className={`
                    absolute right-0 top-0 h-full w-[9px]
                    bg-gradient-to-b ${stepAccents[i % stepAccents.length]}
                    shadow-[-2px_0_7px_rgba(23,59,43,0.12)]
                    transition-all duration-500
                    group-hover:w-[13px]
                  `}
                />

                <div className="relative z-10 flex w-full flex-col">

                  {/* 3D Process Icon */}
                  <div className="flex items-center justify-start">
                    <ProcessIcon name={stepIcons[i] || "document"} />
                  </div>

                  {/* Card Content */}
                  <div className="mt-6">
                    <h3 className="
                      max-w-[95%] font-serif
                      text-lg font-bold leading-snug
                      text-green sm:text-xl
                    ">
                      {title}
                    </h3>

                    <p className="
                      mt-2 max-w-[95%]
                      text-xs leading-6 text-green/65
                      sm:text-sm sm:leading-6
                    ">
                      {description}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-auto flex items-center gap-2 pt-5">
                    <span
                      className={`
                        h-[2px] w-8 rounded-full
                        bg-gradient-to-r ${stepAccents[i % stepAccents.length]}
                        transition-all duration-500
                        group-hover:w-14
                      `}
                    />

                    <span className="text-[9px] font-semibold uppercase tracking-[.17em] text-green/35">
                      Your journey
                    </span>
                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}
