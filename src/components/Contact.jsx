
import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { services } from "../data/content";

const emptyForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const contactDetails = [
  {
    label: "Our Location",
    value: "Patna, Bihar",
    type: "location",
  },
  {
    label: "Phone Number",
    value: "9046720420",
    href: "tel:+919046720420",
    type: "phone",
  },
  {
    label: "Email Address",
    value: "HARVITAA.SOLUTIONS@GMAIL.COM",
    href: "mailto:HARVITAA.SOLUTIONS@GMAIL.COM",
    type: "email",
  },
];

const contactIcons = {
  location: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
};

function ContactIcon({ type }) {
  return (
    <div className="
      relative flex h-12 w-12 shrink-0
      items-center justify-center rounded-xl

      border border-[#D8BD7D]/50
      bg-gradient-to-br from-[#FFF5DA] via-[#F0DDAF] to-[#D9BB77]

      text-[#846126]

      shadow-[0_3px_0_#A78343,0_7px_14px_rgba(0,0,0,0.16),inset_0_2px_3px_rgba(255,255,255,0.9)]

      transition-all duration-300
      group-hover:-translate-y-1
      group-hover:shadow-[0_5px_0_#A78343,0_10px_18px_rgba(201,162,76,0.25)]
    ">
      <span className="
        pointer-events-none absolute
        inset-x-2 top-1 h-1/3
        rounded-full bg-white/50 blur-[2px]
      " />

      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="
          relative z-10 h-5 w-5
          drop-shadow-[0_1px_1px_rgba(115,78,25,0.3)]
        "
        aria-hidden="true"
      >
        {contactIcons[type]}
      </svg>
    </div>
  );
}

function Field({
  label,
  className = "",
  icon,
  ...props
}) {
  return (
    <div className={className}>
      <label
        htmlFor={props.id || props.name}
        className="
          mb-2 block text-xs
          font-bold tracking-wide text-green
          sm:text-sm
        "
      >
        {label}
      </label>

      <div className="relative">
        {icon && (
          <span className="
            pointer-events-none absolute
            left-4 top-1/2 -translate-y-1/2
            text-green/35
          ">
            {icon}
          </span>
        )}

        <input
          {...props}
          id={props.id || props.name}
          className={`
            w-full rounded-xl
            border border-green/15
            bg-[#FBFAF5]
            px-4 py-3.5

            text-sm text-green
            placeholder:text-green/35

            shadow-[inset_0_1px_3px_rgba(23,59,43,0.025)]

            outline-none
            transition-all duration-300

            hover:border-[#C9A24C]/45

            focus:border-[#C9A24C]
            focus:bg-white
            focus:ring-4
            focus:ring-[#C9A24C]/10

            ${icon ? "pl-11" : ""}

            ${className}
          `}
        />
      </div>
    </div>
  );
}

function FormIcon({ children }) {
  return (
    <span className="text-green/40">
      {children}
    </span>
  );
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setSubmitStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim();
    if (!endpoint) {
      setSubmitStatus({
        type: "error",
        message: "The contact form is not connected yet. Please contact us by phone or WhatsApp.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(form),
      });

      setForm(emptyForm);
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your enquiry has been sent. Our team will contact you shortly.",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "We couldn't send your enquiry. Please try again or contact us by phone or WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative isolate overflow-hidden
        bg-sand px-5 py-20
        sm:px-8 sm:py-24
      "
    >
      {/* Background Decorations */}
      <div className="
        pointer-events-none absolute
        -right-32 top-10 h-80 w-80
        rounded-full bg-[#C9A24C]/[0.08] blur-3xl
      " />

      <div className="
        pointer-events-none absolute
        -bottom-32 -left-32 h-80 w-80
        rounded-full bg-green/[0.07] blur-3xl
      " />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <div className="
            mx-auto mb-5 flex w-fit
            items-center gap-2 rounded-full
            border border-[#C9A24C]/30
            bg-[#F8F0DE] px-4 py-2
          ">
            <span className="
              h-2 w-2 rounded-full
              bg-gradient-to-br
              from-[#E9C978] to-[#B8862A]
              shadow-[0_0_8px_rgba(201,162,76,0.4)]
            " />

            <span className="
              text-[9px] font-bold uppercase
              tracking-[.22em] text-[#98732E]
            ">
              Get in touch
            </span>
          </div>

          <h2 className="
            font-serif text-3xl font-bold
            leading-tight text-green
            sm:text-4xl lg:text-5xl
          ">
            Let's Talk About Your Business.
          </h2>

          <p className="
            mx-auto mt-5 max-w-xl
            text-sm leading-7 text-green/65
            sm:text-base
          ">
            Have a question or need professional business support?
            Share your requirements and let's take the next step together.
          </p>

          <div className="
            mx-auto mt-6 h-[2px] w-20
            rounded-full bg-gradient-to-r
            from-transparent via-[#C9A24C] to-transparent
          " />

        </div>

        {/* Main Contact Layout */}
        <div className="
          grid items-stretch gap-7
          lg:grid-cols-[0.85fr_1.15fr]
          lg:gap-8
        ">

          {/* ================= LEFT CONTACT PANEL ================= */}
          <div className="
            group/panel relative isolate
            overflow-hidden rounded-3xl

            border border-[#C9A24C]/35

            bg-gradient-to-br
            from-[#244F39] via-[#173B2B] to-[#102D20]

            p-7 sm:p-9 lg:p-10

            shadow-[0_20px_50px_rgba(23,59,43,0.16)]
          ">

            {/* Decorative Glows */}
            <div className="
              pointer-events-none absolute
              -right-20 -top-20
              h-64 w-64 rounded-full
              bg-[#C9A24C]/10 blur-3xl
            " />

            <div className="
              pointer-events-none absolute
              -bottom-24 -left-20
              h-64 w-64 rounded-full
              bg-white/[0.04] blur-3xl
            " />

            {/* Decorative Gold Circle */}
            <div className="
              pointer-events-none absolute
              -right-14 bottom-10
              h-48 w-48 rounded-full
              border border-[#E9C978]/10
            " />

            <div className="relative z-10">

              {/* Eyebrow */}
              <p className="
                text-[10px] font-bold
                uppercase tracking-[.24em]
                text-[#E9C978]
              ">
                Contact Information
              </p>

              <h3 className="
                mt-4 max-w-sm
                font-serif text-3xl font-bold
                leading-tight text-cream
                sm:text-4xl
              ">
                We're always ready to help you.
              </h3>

              <p className="
                mt-5 max-w-sm
                text-sm leading-7 text-cream/65
              ">
                Connect with HARVITAA for business registration,
                compliance and brand protection support.
              </p>

              {/* Gold Divider */}
              <div className="
                mt-7 h-[2px] w-16
                rounded-full
                bg-gradient-to-r
                from-[#E9C978] to-[#B8862A]
              " />

              {/* Contact Details */}
              <div className="mt-9 space-y-7">

                {contactDetails.map(({ label, value, href, type }) => (
                  <div
                    key={label}
                    className="
                      group flex items-center gap-4
                    "
                  >

                    <ContactIcon type={type} />

                    <div className="min-w-0">

                      <p className="
                        text-[10px] font-bold
                        uppercase tracking-[.18em]
                        text-[#E9C978]/75
                      ">
                        {label}
                      </p>

                      {href ? (
                        <a
                          href={href}
                          className="
                            mt-1 block break-all
                            text-sm font-semibold
                            text-cream
                            transition-colors duration-300
                            hover:text-[#E9C978]
                            sm:text-base
                          "
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="
                          mt-1 text-sm font-semibold
                          text-cream sm:text-base
                        ">
                          {value}
                        </p>
                      )}

                    </div>
                  </div>
                ))}

              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919046720420"
                target="_blank"
                rel="noreferrer"
                className="
                  group mt-10 inline-flex w-full
                  items-center justify-center gap-3

                  rounded-xl
                  border border-[#E9C978]/60

                  bg-gradient-to-r
                  from-[#E9C978] to-[#C99A3B]

                  px-5 py-4
                  text-sm font-bold text-green

                  shadow-[0_5px_18px_rgba(201,162,76,0.20)]

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_10px_25px_rgba(201,162,76,0.30)]
                "
              >
                <WhatsAppIcon />

                Chat with us on WhatsApp

                <span className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                ">
                  →
                </span>
              </a>

              {/* Bottom Note */}
              <p className="
                mt-5 text-center
                text-[10px] tracking-wide
                text-cream/40
              ">
                We look forward to hearing from you.
              </p>

            </div>
          </div>

          {/* ================= RIGHT ENQUIRY FORM ================= */}
          <div className="
            relative overflow-hidden
            rounded-3xl border border-[#C9A24C]/20

            bg-gradient-to-br
            from-white via-[#FFFDF9] to-[#F8F4E9]

            p-6 sm:p-9 lg:p-10

            shadow-[0_15px_45px_rgba(23,59,43,0.07)]
          ">

            {/* Top Decorative Line */}
            <div className="
              absolute left-0 top-0
              h-[4px] w-full
              bg-gradient-to-r
              from-[#B8862A] via-[#E9C978] to-transparent
            " />

            {/* Form Header */}
            <div className="mb-8">

              <p className="
                text-[10px] font-bold
                uppercase tracking-[.22em]
                text-[#B8862A]
              ">
                Send us a message
              </p>

              <h3 className="
                mt-3 font-serif
                text-2xl font-bold text-green
                sm:text-3xl
              ">
                Get in Touch
              </h3>

              <p className="
                mt-3 text-sm leading-6
                text-green/60
              ">
                Fill out the form below and our team
                will get back to you.
              </p>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>

              <div className="grid gap-5 sm:grid-cols-2">

                {/* Full Name */}
                <Field
                  label="Full Name *"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                {/* Phone */}
                <Field
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />

                {/* Email */}
                <Field
                  label="Email Address *"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="sm:col-span-2"
                />

                {/* Service Select */}
                <div className="sm:col-span-2">

                  <label
                    htmlFor="service"
                    className="
                      mb-2 block text-xs
                      font-bold tracking-wide text-green
                      sm:text-sm
                    "
                  >
                    Service Required
                  </label>

                  <div className="relative">

                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="
                        w-full appearance-none
                        rounded-xl

                        border border-green/15
                        bg-[#FBFAF5]

                        px-4 py-3.5 pr-11
                        text-sm text-green

                        outline-none
                        transition-all duration-300

                        hover:border-[#C9A24C]/45

                        focus:border-[#C9A24C]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-[#C9A24C]/10
                      "
                    >
                      <option value="">
                        Select a service
                      </option>

                      {services.map((s) => (
                        <option key={s.no} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="
                        pointer-events-none
                        absolute right-4 top-1/2
                        h-4 w-4 -translate-y-1/2
                        text-[#98732E]
                      "
                      aria-hidden="true"
                    >
                      <path d="m7 10 5 5 5-5" />
                    </svg>

                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">

                  <label
                    htmlFor="message"
                    className="
                      mb-2 block text-xs
                      font-bold tracking-wide text-green
                      sm:text-sm
                    "
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className="
                      w-full resize-none
                      rounded-xl

                      border border-green/15
                      bg-[#FBFAF5]

                      px-4 py-3.5
                      text-sm text-green

                      placeholder:text-green/35

                      outline-none
                      transition-all duration-300

                      hover:border-[#C9A24C]/45

                      focus:border-[#C9A24C]
                      focus:bg-white
                      focus:ring-4
                      focus:ring-[#C9A24C]/10
                    "
                  />

                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  group relative mt-7
                  flex w-full items-center
                  justify-center gap-3

                  overflow-hidden rounded-xl
                  border border-[#C9A24C]/60

                  bg-gradient-to-r
                  from-[#E9C978] via-[#D9B45F] to-[#BD8E35]

                  px-6 py-4

                  text-sm font-bold text-green

                  shadow-[0_5px_15px_rgba(201,162,76,0.18)]

                  transition-all duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_10px_25px_rgba(201,162,76,0.28)]

                  active:translate-y-0
                  disabled:cursor-wait disabled:opacity-70
                "
              >

                {/* Shine Effect */}
                <span className="
                  pointer-events-none absolute
                  inset-y-0 left-0 w-1/3
                  -translate-x-[150%] -skew-x-12
                  bg-gradient-to-r
                  from-transparent via-white/40 to-transparent
                  transition-transform duration-700
                  group-hover:translate-x-[450%]
                " />

                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="
                    relative z-10 h-5 w-5
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>

              </button>

              {submitStatus.message && (
                <p
                  role={submitStatus.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`mt-4 text-center text-sm ${
                    submitStatus.type === "error" ? "text-red-700" : "text-green"
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}

              {/* Privacy Note */}
              <p className="
                mt-4 text-center
                text-[10px] leading-5
                text-green/45
              ">
                Thank you for reaching out to HARVITAA.
                Our team will review your enquiry.
              </p>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
