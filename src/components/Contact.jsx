import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { services } from "../data/content";

const emptyForm = { name: "", phone: "", email: "", service: "", message: "" };

function Field({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label htmlFor={props.id || props.name} className="mb-2 block text-sm font-bold">{label}</label>
      <input
        {...props}
        id={props.id || props.name}
        className="w-full rounded-md border border-green/20 bg-cream px-4 py-3 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
    setForm(emptyForm);
  };

  return (
    <section id="contact" className="bg-cream px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.24em] text-green/55">Contact HARVITAA</p>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-green/80">
            Share your requirement and our team will get back to you with the right next steps.
          </p>
          <ul className="mt-8 space-y-5 text-sm">
            {["Address", "Phone", "Email"].map((label) => (
              <li key={label}>
                <p className="font-bold">{label}</p>
                <p className="text-green/70">To be provided</p>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-green px-6 py-3 font-bold text-cream transition hover:bg-gold hover:text-green"
          >
            <WhatsAppIcon /> Chat on WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl bg-white p-8 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
            <Field label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label htmlFor="service" className="mb-2 block text-sm font-bold">Service Required</label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-md border border-green/20 bg-cream px-4 py-3 text-sm focus:border-gold focus:outline-none"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s.no} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-bold">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-md border border-green/20 bg-cream px-4 py-3 text-sm focus:border-gold focus:outline-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-gold px-6 py-3.5 font-bold text-green transition hover:bg-green hover:text-cream"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
