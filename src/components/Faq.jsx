
const questions = [
  {
    question: "What services can HARVITAA help me with?",
    answer:
      "We support business registration and setup, trademark and intellectual property assistance, GST and taxation, licences, and ongoing compliance planning.",
  },
  {
    question: "Can you help me choose the right business structure?",
    answer:
      "Yes. Share your business goals and we can guide you through suitable structures and the registration support available for your requirements.",
  },
  {
    question: "Can HARVITAA help protect my brand name?",
    answer:
      "We can assist with trademark searches, filing support, examination guidance, objections, renewals, and other brand-protection requirements. Registration decisions are made by the relevant authorities.",
  },
  {
    question: "What is the process to get started?",
    answer:
      "Tell us what you need, get a plan for the relevant services and documents, and our team will guide you through the next steps.",
  },
  {
    question: "Is HARVITAA a law firm?",
    answer:
      "HARVITAA is a business support and compliance consultancy. Legal opinions, certifications, statutory filings, attestations, and other regulated professional work are handled by appropriately qualified or authorised professionals where required.",
  },
];

export default function Faq() {
  return (
    <section
      id="faqs"
      className="
        relative isolate overflow-hidden
        bg-cream px-5 py-20
        sm:px-8 sm:py-24
      "
    >
      {/* Background Decorations */}
      <div className="
        pointer-events-none absolute
        -right-32 top-10 h-80 w-80
        rounded-full bg-[#C9A24C]/[0.07] blur-3xl
      " />

      <div className="
        pointer-events-none absolute
        -bottom-32 -left-32 h-80 w-80
        rounded-full bg-green/[0.07] blur-3xl
      " />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          {/* Eyebrow */}
          <div className="
            mx-auto mb-5 flex w-fit
            items-center gap-2 rounded-full
            border border-[#C9A24C]/30
            bg-[#F8F0DE] px-4 py-2
          ">
            <span className="
              h-2 w-2 rounded-full
              bg-gradient-to-br from-[#E9C978] to-[#B8862A]
              shadow-[0_0_7px_rgba(201,162,76,0.5)]
            " />

            <p className="
              text-[9px] font-bold uppercase
              tracking-[.24em] text-[#98732E]
              sm:text-[10px]
            ">
              Need to know
            </p>
          </div>

          {/* Heading */}
          <h2 className="
            font-serif text-3xl font-bold
            leading-tight text-green
            sm:text-4xl lg:text-5xl
          ">
            Frequently Asked Questions
          </h2>

          {/* Description */}
          <p className="
            mx-auto mt-5 max-w-xl
            text-sm leading-7 text-green/65
            sm:text-base
          ">
            Find answers to common questions about our services,
            business support and compliance solutions.
          </p>

          {/* Gold Divider */}
          <div className="
            mx-auto mt-7 h-[2px] w-20
            rounded-full
            bg-gradient-to-r
            from-transparent via-[#C9A24C] to-transparent
          " />

        </div>

        {/* FAQ Cards */}
        <div className="space-y-4">

          {questions.map(({ question, answer }, i) => (
            <details
              key={question}
              name="harvitaa-faq"
              className="
                faq-card group relative isolate
                overflow-hidden rounded-2xl

                border border-green/10
                bg-gradient-to-br
                from-white via-[#FFFDF9] to-[#F8F4E9]

                shadow-[0_5px_20px_rgba(23,59,43,0.035)]

                transition-all duration-500

                hover:-translate-y-1
                hover:border-[#C9A24C]/45
                hover:shadow-[0_12px_28px_rgba(23,59,43,0.08)]

                open:border-[#C9A24C]/50
                open:shadow-[0_12px_30px_rgba(23,59,43,0.08)]
              "
            >

              {/* Left Gold Accent */}
              <span className="
                absolute left-0 top-0
                h-0 w-[4px]
                rounded-br-full
                bg-gradient-to-b
                from-[#E9C978] to-[#B8862A]
                transition-all duration-500
                group-open:h-full
              " />

              {/* Question */}
              <summary className="
                relative flex cursor-pointer
                list-none items-center
                justify-between gap-4

                px-5 py-5
                sm:px-7 sm:py-6

                marker:hidden
                [&::-webkit-details-marker]:hidden
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-inset
                focus-visible:ring-[#C9A24C]
              ">

                <div className="flex min-w-0 items-center gap-4">

                  {/* Number Badge */}
                  <span className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-xl

                    border border-[#C9A24C]/25
                    bg-gradient-to-br
                    from-[#FFF7E5] to-[#EDE0C2]

                    font-serif text-xs font-bold
                    text-[#98732E]

                    shadow-[0_3px_7px_rgba(23,59,43,0.08)]

                    transition-all duration-300

                    group-open:border-green/20
                        group-open:bg-pale-sage
                        group-open:text-green
                  ">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Question Text */}
                  <span className="
                    font-serif text-sm
                    font-bold leading-relaxed
                    text-green

                    transition-colors duration-300
                    group-hover:text-[#98732E]
                    group-open:text-green

                    sm:text-base lg:text-[17px]
                  ">
                    {question}
                  </span>

                </div>

                {/* Expand Button */}
                <span className="
                  flex h-9 w-9 shrink-0
                  items-center justify-center
                  rounded-full

                  border border-[#C9A24C]/30
                  bg-[#F8F0DE]
                  text-[#98732E]

                  shadow-[0_3px_7px_rgba(23,59,43,0.06)]

                  transition-all duration-500

                  group-hover:border-[#C9A24C]
                  group-hover:bg-[#EEDBAF]

                  group-open:rotate-180
                  group-open:border-green
                  group-open:bg-green
                  group-open:text-[#E9C978]
                ">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>

                </span>

              </summary>

              {/* Answer */}
              <div className="
                grid grid-rows-[0fr]
                transition-[grid-template-rows]
                duration-300
                group-open:grid-rows-[1fr]
              ">
                <div className="overflow-hidden">

                  <div className="
                    mx-5 border-t border-[#C9A24C]/20
                    px-1 pb-6 pt-5
                    sm:mx-7 sm:px-0
                  ">

                    <div className="
                      flex items-start gap-3
                      sm:gap-4
                    ">

                      {/* Answer Accent */}
                      <span className="
                        mt-1 h-6 w-[3px]
                        shrink-0 rounded-full
                        bg-green
                      " />

                      <p className="
                        max-w-3xl text-sm
                        leading-7 text-green/70
                        sm:text-[15px]
                      ">
                        {answer}
                      </p>

                    </div>

                  </div>
                </div>
              </div>

            </details>
          ))}

        </div>

      </div>
    </section>
  );
}
