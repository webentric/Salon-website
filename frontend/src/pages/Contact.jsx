import { useState } from "react";

const SOCIAL_LINKS = [
    {
        name: "Facebook",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        name: "Pinterest",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
        ),
    },
    {
        name: "Google+",
        href: "#",
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
        ),
    },
];

const INFO_ITEMS = [
    {
        label: "Address",
        value: "No: 15, 2nd floor, Khader Nawaz Khan Rd,\nNungambakkam, Chennai,\nTamil Nadu 600034",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: "Phone",
        value: "098407 83334",
        href: "tel:+919840783334",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.07 6.07l1.1-1.1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        label: "Email",
        value: "info@anlon.com",
        href: "mailto:info@anlon.com",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        label: "Working Hours",
        value: "Monday to Sunday\n10:00 AM – 9:00 PM",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
];

const SERVICES_LIST = [
    "Hair Aesthetics",
    "Skin Care",
    "Nail Care",
    "Hair Colouring",
    "Keratin Treatment",
    "HydraFacial",
    "Nail Art",
    "Products",
    "Other",
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
        if (!form.message.trim()) e.message = "Message is required";
        return e;
    };

    const handleChange = (e) => {
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) setErrors((p) => ({ ...p, [e.target.name]: null }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setSubmitted(true);
    };

    return (
        <div className="bg-[#0e0c0b] min-h-screen">


            {/* ══════════════════════════════════════
          TAN STRIP
      ══════════════════════════════════════ */}
            <section className="bg-[#b07d5e] py-5 px-8">
                <p className="font-['Montserrat',sans-serif] text-white text-[0.65rem] font-medium tracking-[0.22em] uppercase text-center">
                    Taking Appointments · Monday to Sunday · 10am – 9pm
                </p>
            </section>

            {/* ══════════════════════════════════════
          CONTACT INFO CARDS
      ══════════════════════════════════════ */}
            <section className="max-w-[1100px] mx-auto px-8 sm:px-12 py-16" aria-label="Contact information">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {INFO_ITEMS.map(({ label, value, href, icon }) => (
                        <div
                            key={label}
                            className="group flex flex-col gap-4 p-7 bg-[#161412] border border-white/[0.06] hover:border-[#b07d5e]/40 transition-all duration-300"
                        >
                            <div className="text-[#b07d5e]">{icon}</div>
                            <div>
                                <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.55rem] font-semibold tracking-[0.2em] uppercase mb-2">
                                    {label}
                                </p>
                                {href ? (
                                    <a
                                        href={href}
                                        className="font-['Montserrat',sans-serif] text-white/70 text-[0.7rem] leading-[1.8] tracking-wide hover:text-white transition-colors duration-200 whitespace-pre-line"
                                    >
                                        {value}
                                    </a>
                                ) : (
                                    <p className="font-['Montserrat',sans-serif] text-white/70 text-[0.7rem] leading-[1.8] tracking-wide whitespace-pre-line">
                                        {value}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════
          FORM + MAP SPLIT
      ══════════════════════════════════════ */}
            <section className="bg-[#161412] border-y border-white/[0.06] py-20 px-8 sm:px-12" aria-labelledby="contact-form-title">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* ── Form ── */}
                    <div>
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            Send A Message
                        </p>
                        <h2
                            id="contact-form-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)] mb-8"
                        >
                            Write To Us
                        </h2>

                        {submitted ? (
                            <div className="flex flex-col items-start gap-4 py-10">
                                <div className="w-12 h-12 rounded-full bg-[#b07d5e]/15 flex items-center justify-center">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b07d5e" strokeWidth="2" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light text-[1.4rem] tracking-wide">
                                    Message Received!
                                </h3>
                                <p className="font-['Montserrat',sans-serif] text-white/50 text-[0.7rem] leading-[1.85] tracking-wide max-w-[360px]">
                                    Thank you for reaching out, {form.name.split(" ")[0]}. Our team will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => { setForm({ name: "", email: "", phone: "", service: "", message: "" }); setSubmitted(false); }}
                                    className="mt-2 font-['Montserrat',sans-serif] text-[#8faeae] text-[0.6rem] font-semibold tracking-[0.16em] uppercase hover:text-white transition-colors duration-200 focus-visible:outline-none"
                                >
                                    Send Another Message →
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                                {/* Row 1 — Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="name" className="font-['Montserrat',sans-serif] text-white/50 text-[0.58rem] font-medium tracking-[0.16em] uppercase">
                                            Full Name <span className="text-[#b07d5e]" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            id="name" name="name" type="text" autoComplete="name"
                                            value={form.name} onChange={handleChange}
                                            placeholder="Priya Sharma"
                                            aria-required="true"
                                            aria-describedby={errors.name ? "name-error" : undefined}
                                            className={`bg-[#0e0c0b] border px-4 py-3 font-['Montserrat',sans-serif] text-white text-[0.7rem] tracking-wide placeholder:text-white/20 focus:outline-none transition-colors duration-200 ${errors.name ? "border-[#c4706e]/70 focus:border-[#c4706e]" : "border-white/10 focus:border-[#b07d5e]/60"}`}
                                        />
                                        {errors.name && <p id="name-error" role="alert" className="font-['Montserrat',sans-serif] text-[#c4706e] text-[0.58rem] tracking-wide">{errors.name}</p>}
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="email" className="font-['Montserrat',sans-serif] text-white/50 text-[0.58rem] font-medium tracking-[0.16em] uppercase">
                                            Email <span className="text-[#b07d5e]" aria-hidden="true">*</span>
                                        </label>
                                        <input
                                            id="email" name="email" type="email" autoComplete="email"
                                            value={form.email} onChange={handleChange}
                                            placeholder="you@email.com"
                                            aria-required="true"
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                            className={`bg-[#0e0c0b] border px-4 py-3 font-['Montserrat',sans-serif] text-white text-[0.7rem] tracking-wide placeholder:text-white/20 focus:outline-none transition-colors duration-200 ${errors.email ? "border-[#c4706e]/70 focus:border-[#c4706e]" : "border-white/10 focus:border-[#b07d5e]/60"}`}
                                        />
                                        {errors.email && <p id="email-error" role="alert" className="font-['Montserrat',sans-serif] text-[#c4706e] text-[0.58rem] tracking-wide">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Row 2 — Phone + Service */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="phone" className="font-['Montserrat',sans-serif] text-white/50 text-[0.58rem] font-medium tracking-[0.16em] uppercase">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone" name="phone" type="tel" autoComplete="tel"
                                            value={form.phone} onChange={handleChange}
                                            placeholder="+91 98407 83334"
                                            className="bg-[#0e0c0b] border border-white/10 px-4 py-3 font-['Montserrat',sans-serif] text-white text-[0.7rem] tracking-wide placeholder:text-white/20 focus:outline-none focus:border-[#b07d5e]/60 transition-colors duration-200"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label htmlFor="service" className="font-['Montserrat',sans-serif] text-white/50 text-[0.58rem] font-medium tracking-[0.16em] uppercase">
                                            Service Enquiry
                                        </label>
                                        <select
                                            id="service" name="service"
                                            value={form.service} onChange={handleChange}
                                            className="bg-[#0e0c0b] border border-white/10 px-4 py-3 font-['Montserrat',sans-serif] text-white text-[0.7rem] tracking-wide focus:outline-none focus:border-[#b07d5e]/60 transition-colors duration-200 appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="text-white/30">Select a service</option>
                                            {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3 — Message */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="message" className="font-['Montserrat',sans-serif] text-white/50 text-[0.58rem] font-medium tracking-[0.16em] uppercase">
                                        Your Message <span className="text-[#b07d5e]" aria-hidden="true">*</span>
                                    </label>
                                    <textarea
                                        id="message" name="message" rows={5}
                                        value={form.message} onChange={handleChange}
                                        placeholder="Tell us how we can help you..."
                                        aria-required="true"
                                        aria-describedby={errors.message ? "message-error" : undefined}
                                        className={`bg-[#0e0c0b] border px-4 py-3 font-['Montserrat',sans-serif] text-white text-[0.7rem] tracking-wide placeholder:text-white/20 focus:outline-none resize-none transition-colors duration-200 ${errors.message ? "border-[#c4706e]/70 focus:border-[#c4706e]" : "border-white/10 focus:border-[#b07d5e]/60"}`}
                                    />
                                    {errors.message && <p id="message-error" role="alert" className="font-['Montserrat',sans-serif] text-[#c4706e] text-[0.58rem] tracking-wide">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    className="self-start inline-flex items-center gap-3 px-9 py-3.5 bg-[#8faeae] hover:bg-[#6b9090] font-['Montserrat',sans-serif] text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8faeae]/50"
                                >
                                    Send Message
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <polygon points="5,3 19,12 5,21" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>

                    {/* ── Map + Social ── */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                                Find Us
                            </p>
                            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)] mb-6">
                                Our Location
                            </h2>
                            {/* Google Map Embed */}
                            <div className="w-full h-[280px] overflow-hidden border border-white/[0.07]">
                                <iframe
                                    title="ANLON Art Salon location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5780019869!2d80.24214807454765!3d13.05756598726028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b6a9b0e4cd%3A0x6fbc4a9b1c5e6e4a!2sKhader%20Nawaz%20Khan%20Rd%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600034!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                                    width="100%" height="100%"
                                    style={{ border: 0, filter: "grayscale(1) invert(1) contrast(0.85)" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        {/* Social */}
                        <div className="pt-2">
                            <p className="font-['Montserrat',sans-serif] text-white/40 text-[0.58rem] font-semibold tracking-[0.22em] uppercase mb-5">
                                Stay In Touch
                            </p>
                            <div className="flex items-center gap-3">
                                {SOCIAL_LINKS.map(({ name, href, icon }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        aria-label={`Visit ANLON on ${name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/50 hover:text-white hover:border-[#b07d5e]/50 transition-all duration-200 focus-visible:outline-none"
                                    >
                                        {icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Direct booking CTA card */}
                        <div className="p-7 border border-[#b07d5e]/30 bg-[#b07d5e]/[0.04]">
                            <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.58rem] font-semibold tracking-[0.2em] uppercase mb-2">
                                Prefer To Call?
                            </p>
                            <p className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light text-[1.3rem] tracking-wide mb-1">
                                098407 83334
                            </p>
                            <p className="font-['Montserrat',sans-serif] text-white/40 text-[0.65rem] tracking-wide mb-5">
                                Mon – Sun · 10:00 AM – 9:00 PM
                            </p>
                            <a
                                href="tel:+919840783334"
                                className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#8faeae]/50 hover:bg-[#8faeae]/15 font-['Montserrat',sans-serif] text-[0.58rem] font-semibold tracking-[0.18em] uppercase text-white/80 hover:text-white transition-all duration-200 focus-visible:outline-none"
                            >
                                Call Now
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.07 6.07l1.1-1.1a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* ══════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════ */}
            <section className="relative w-full py-24 flex items-center justify-center overflow-hidden" aria-label="Book an appointment CTA">
                <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&auto=format&fit=crop&q=70"
                    alt=""
                    role="presentation"
                    width={1600} height={400}
                    loading="lazy" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0e0c0b]/80" aria-hidden="true" />
                <div className="relative z-10 flex flex-col items-center text-center px-8 gap-6">
                    <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.2em] text-[clamp(1.6rem,4vw,2.8rem)]">
                        Ready For Your Next Visit?
                    </h2>
                    <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] tracking-wide max-w-[420px] leading-relaxed">
                        Book your appointment online or call us directly — we're always happy to welcome you.
                    </p>
                    <a
                        href="#booking"
                        className="inline-flex items-center gap-3 px-10 py-4 border border-[#8faeae] hover:bg-[#8faeae]/20 font-['Montserrat',sans-serif] text-[0.62rem] font-semibold tracking-[0.22em] uppercase text-white transition-colors duration-200 focus-visible:outline-none"
                    >
                        Book An Appointment
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </a>
                </div>
            </section>

        </div>
    );
}