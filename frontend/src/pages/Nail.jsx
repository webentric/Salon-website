import { useState } from "react";

const SERVICES = [
    {
        id: "manicure",
        title: "Classic Manicure",
        desc: "A relaxing hand treatment including nail shaping, cuticle care, hand massage and your choice of nail colour for perfectly polished nails.",
        price: "From ₹349",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "pedicure",
        title: "Luxury Pedicure",
        desc: "A thorough foot care treatment with exfoliation, callus removal, foot massage and nail finishing — leaving your feet soft and refreshed.",
        price: "From ₹499",
        img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "gel",
        title: "Gel Nail Extensions",
        desc: "Long-lasting gel extensions shaped and polished to perfection. Chip-resistant and available in hundreds of colours and finishes.",
        price: "From ₹999",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "acrylic",
        title: "Acrylic Nails",
        desc: "Durable acrylic nails built to your desired length and shape. Ideal for those who want strong, salon-quality nails that last for weeks.",
        price: "From ₹1299",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "nailart",
        title: "Nail Art & Design",
        desc: "Express yourself with our bespoke nail art — from minimalist linework to intricate patterns, florals, ombré and 3D embellishments.",
        price: "From ₹599",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "removal",
        title: "Nail Repair & Removal",
        desc: "Safe, gentle removal of gel, acrylic or dip nails with nail repair for broken or damaged nails — no damage to the natural nail bed.",
        price: "From ₹299",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80",
    },
];

const NAIL_STYLES = [
    { style: "Minimalist", desc: "Clean lines, neutral shades and subtle accents for everyday elegance.", color: "#e8ddd5" },
    { style: "Bold & Bright", desc: "Vivid, saturated colours and high-gloss finishes that make a statement.", color: "#c4706e" },
    { style: "French & Ombré", desc: "Timeless French tips and gradient ombré fades in any colour palette.", color: "#e8c9b8" },
    { style: "Nail Art", desc: "Handcrafted designs — florals, abstracts, gems and everything in between.", color: "#8faeae" },
];

const FAQS = [
    {
        q: "How long do gel nail extensions last?",
        a: "Gel extensions typically last 3–4 weeks with proper care. We recommend a fill every 2–3 weeks to maintain their appearance and integrity.",
    },
    {
        q: "Are acrylic nails safe for natural nails?",
        a: "When applied and removed correctly by a trained technician, acrylic nails pose minimal risk. We always use safe application techniques and proper removal methods to protect your natural nail.",
    },
    {
        q: "Can I get nail art with gel extensions?",
        a: "Absolutely! Nail art can be applied over gel extensions or natural nails. Our nail artists will work with you to create any design you have in mind.",
    },
    {
        q: "How do I maintain my nails between appointments?",
        a: "Keep nails moisturised with cuticle oil daily, wear gloves for heavy household tasks, avoid using nails as tools, and return for a fill or maintenance appointment every 2–3 weeks.",
    },
];

function FAQItem({ q, a }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setOpen((p) => !p)}
                aria-expanded={open}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group focus-visible:outline-none"
            >
                <span className="font-['Montserrat',sans-serif] text-white/80 group-hover:text-white text-[0.75rem] font-medium tracking-wide transition-colors duration-200">
                    {q}
                </span>
                <svg
                    width="16" height="16" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    className={`text-[#b07d5e] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>
            {open && (
                <p className="font-['Montserrat',sans-serif] text-white/50 text-[0.7rem] leading-[1.9] tracking-wide pb-5 pr-8">
                    {a}
                </p>
            )}
        </div>
    );
}

export default function Nail() {
    return (
        <div className="bg-[#0e0c0b] min-h-screen">

            {/* ══════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════ */}
            <section
                className="relative w-full h-[420px] sm:h-[500px] flex items-center overflow-hidden"
                aria-label="Nail Care hero"
            >
                <img
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&auto=format&fit=crop&q=80"
                    alt="Beautifully painted nails — ANLON Nail Care"
                    width={1600} height={500}
                    loading="eager" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c0b]/92 via-[#0e0c0b]/60 to-transparent" />

                {/* Breadcrumb */}
                <div className="absolute top-8 left-8 sm:left-16 flex items-center gap-2 font-['Montserrat',sans-serif] text-white/40 text-[0.6rem] tracking-[0.18em] uppercase">
                    <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
                    <span aria-hidden="true">/</span>
                    <span className="text-white/70">Nail Care</span>
                </div>

                <div className="relative z-10 px-8 sm:px-16 max-w-[600px]">
                    <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-3">
                        Our Services
                    </p>
                    <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] mb-5">
                        Nail<br />Care
                    </h1>
                    <div className="w-10 h-px bg-[#b07d5e] mb-5" aria-hidden="true" />
                    <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] leading-relaxed tracking-wide max-w-[380px]">
                        From classic manicures to intricate nail art — our skilled nail artists deliver flawless results every time.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════════
          TAN INTRO STRIP
      ══════════════════════════════════════ */}
            <section className="bg-[#b07d5e] py-5 px-8 sm:px-16">
                <p className="font-['Montserrat',sans-serif] text-white text-[0.65rem] font-medium tracking-[0.22em] uppercase text-center">
                    Taking Appointments · Monday to Sunday · 10am – 9pm
                </p>
            </section>

            {/* ══════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════ */}
            <section
                className="max-w-[1100px] mx-auto px-8 sm:px-12 py-20"
                aria-labelledby="nailservices-title"
            >
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
                    <div>
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            What We Offer
                        </p>
                        <h2
                            id="nailservices-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.6rem,3.5vw,2.4rem)]"
                        >
                            Our Nail Services
                        </h2>
                    </div>
                    <a
                        href="#booking"
                        className="self-start sm:self-auto inline-flex items-center gap-2 px-7 py-3 bg-[#8faeae] hover:bg-[#6b9090] font-['Montserrat',sans-serif] text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-white transition-colors duration-200 focus-visible:outline-none"
                    >
                        Book Now
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map(({ id, title, desc, price, img }) => (
                        <article
                            key={id}
                            className="group bg-[#161412] border border-white/[0.06] overflow-hidden hover:border-[#b07d5e]/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                        >
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={img} alt={title}
                                    width={600} height={208}
                                    loading="lazy" decoding="async"
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent" />
                                <span className="absolute top-3 right-3 bg-[#b07d5e] font-['Montserrat',sans-serif] text-white text-[0.55rem] font-semibold tracking-[0.14em] uppercase px-3 py-1">
                                    {price}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light text-[1.15rem] tracking-wide mb-3 group-hover:text-[#d4a87a] transition-colors duration-200">
                                    {title}
                                </h3>
                                <p className="font-['Montserrat',sans-serif] text-white/50 text-[0.68rem] leading-[1.85] tracking-wide mb-5">
                                    {desc}
                                </p>
                                <a
                                    href="#booking"
                                    className="inline-flex items-center gap-1.5 font-['Montserrat',sans-serif] text-[#8faeae] text-[0.6rem] font-semibold tracking-[0.16em] uppercase hover:text-white transition-colors duration-200 focus-visible:outline-none group/link"
                                >
                                    Book This Service
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/link:translate-x-0.5 transition-transform duration-200" aria-hidden="true">
                                        <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════
          NAIL STYLE SHOWCASE
      ══════════════════════════════════════ */}
            <section
                className="bg-[#161412] border-y border-white/[0.06] py-20 px-8 sm:px-12"
                aria-labelledby="nailstyle-title"
            >
                <div className="max-w-[1100px] mx-auto">
                    <div className="text-center mb-14">
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            Find Your Style
                        </p>
                        <h2
                            id="nailstyle-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)]"
                        >
                            A Style For Every Mood
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {NAIL_STYLES.map(({ style, desc, color }) => (
                            <div
                                key={style}
                                className="group flex flex-col items-center text-center p-8 border border-white/[0.06] hover:border-[#b07d5e]/40 transition-all duration-300 hover:bg-[#1c1916]"
                            >
                                {/* Colour dot */}
                                <div
                                    className="w-14 h-14 rounded-full mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: color }}
                                    aria-hidden="true"
                                />
                                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light text-[1.1rem] tracking-wide mb-3 group-hover:text-[#d4a87a] transition-colors duration-200">
                                    {style}
                                </h3>
                                <p className="font-['Montserrat',sans-serif] text-white/45 text-[0.65rem] leading-[1.8] tracking-wide">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
            <section
                className="max-w-[1100px] mx-auto px-8 sm:px-12 py-16"
                aria-label="Nail care credentials"
            >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "50+", label: "Nail Colours" },
                        { num: "10+", label: "Nail Artists" },
                        { num: "3K+", label: "Happy Clients" },
                        { num: "100%", label: "Hygienic Tools" },
                    ].map(({ num, label }) => (
                        <div key={label} className="flex flex-col items-center gap-2">
                            <span className="font-['Cormorant_Garamond',Georgia,serif] text-[#b07d5e] font-light text-[clamp(2rem,4vw,3rem)] leading-none">
                                {num}
                            </span>
                            <span className="font-['Montserrat',sans-serif] text-white/50 text-[0.62rem] font-medium tracking-[0.18em] uppercase">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════
          PROCESS STEPS
      ══════════════════════════════════════ */}
            <section
                className="bg-[#161412] border-y border-white/[0.06] py-20 px-8 sm:px-12"
                aria-labelledby="nailprocess-title"
            >
                <div className="max-w-[1100px] mx-auto">
                    <div className="text-center mb-14">
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            How It Works
                        </p>
                        <h2
                            id="nailprocess-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)]"
                        >
                            Your Nail Journey
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 relative">
                        <div className="hidden sm:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10" aria-hidden="true" />
                        {[
                            { step: "01", title: "Choose Your Style", desc: "Browse our lookbook and pick the shape, length and design you love." },
                            { step: "02", title: "Nail Prep", desc: "We cleanse, shape and prep your nails and cuticles for a flawless application." },
                            { step: "03", title: "Application", desc: "Your chosen service is applied with precision using sterile, premium tools." },
                            { step: "04", title: "Finishing Touch", desc: "A topcoat seal and aftercare tips to keep your nails perfect for longer." },
                        ].map(({ step, title, desc }) => (
                            <div key={step} className="flex flex-col items-center text-center relative z-10">
                                <div className="w-16 h-16 rounded-full border border-[#b07d5e]/50 bg-[#0e0c0b] flex items-center justify-center mb-5">
                                    <span className="font-['Cormorant_Garamond',Georgia,serif] text-[#b07d5e] text-[1.2rem] font-light">
                                        {step}
                                    </span>
                                </div>
                                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light text-[1rem] tracking-wide mb-2">
                                    {title}
                                </h3>
                                <p className="font-['Montserrat',sans-serif] text-white/45 text-[0.65rem] leading-[1.8] tracking-wide max-w-[180px]">
                                    {desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          HYGIENE PROMISE
      ══════════════════════════════════════ */}
            <section className="max-w-[1100px] mx-auto px-8 sm:px-12 py-20" aria-labelledby="hygiene-title">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1">
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-3">
                            Our Promise
                        </p>
                        <h2
                            id="hygiene-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)] mb-5"
                        >
                            Hygiene Above Everything
                        </h2>
                        <div className="w-10 h-px bg-[#b07d5e] mb-6" aria-hidden="true" />
                        <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] leading-[1.9] tracking-wide mb-8 max-w-[480px]">
                            Your safety is our top priority. Every tool is sterilised before each appointment, single-use files and buffers are used per client, and our stations are sanitised between every service.
                        </p>
                        <ul className="flex flex-col gap-3">
                            {[
                                "Autoclave-sterilised metal tools",
                                "Single-use files & buffers per client",
                                "Hospital-grade disinfectant on all surfaces",
                                "Nail technicians trained in hygiene protocols",
                            ].map((item) => (
                                <li key={item} className="flex items-center gap-3 font-['Montserrat',sans-serif] text-white/60 text-[0.68rem] tracking-wide">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b07d5e" strokeWidth="2.5" className="flex-shrink-0" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-[420px] h-[300px] overflow-hidden flex-shrink-0">
                        <img
                            src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80"
                            alt="Close-up of professional nail care service"
                            width={420} height={300}
                            loading="lazy" decoding="async"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
            <section
                className="bg-[#161412] py-20 px-8 sm:px-12"
                aria-labelledby="nailfaq-title"
            >
                <div className="max-w-[720px] mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            Got Questions?
                        </p>
                        <h2
                            id="nailfaq-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)]"
                        >
                            Frequently Asked
                        </h2>
                    </div>
                    {FAQS.map((faq) => <FAQItem key={faq.q} {...faq} />)}
                </div>
            </section>

            {/* ══════════════════════════════════════
          BOTTOM CTA BANNER
      ══════════════════════════════════════ */}
            <section
                className="relative w-full py-24 flex items-center justify-center overflow-hidden"
                aria-label="Book a nail care appointment"
            >
                <img
                    src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&auto=format&fit=crop&q=70"
                    alt=""
                    role="presentation"
                    width={1600} height={400}
                    loading="lazy" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0e0c0b]/80" aria-hidden="true" />
                <div className="relative z-10 flex flex-col items-center text-center px-8 gap-6">
                    <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.2em] text-[clamp(1.6rem,4vw,2.8rem)]">
                        Ready for Flawless Nails?
                    </h2>
                    <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] tracking-wide max-w-[420px] leading-relaxed">
                        Book your nail appointment today and walk out with nails you'll absolutely love.
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