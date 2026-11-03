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
    <section id="faqs" className="bg-sand py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">Need to know</p>
          <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-3">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group rounded-xl border border-green/10 bg-cream px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold marker:hidden">
                {question}
                <span className="shrink-0 text-xl text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-green/75">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
