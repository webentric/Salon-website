import { useState } from "react";

const SERVICES = [
    {
        id: "facial",
        title: "Classic Facial",
        desc: "A deep cleansing facial that removes impurities, unclogs pores and leaves your skin glowing. Suitable for all skin types.",
        price: "From ₹699",
        img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "cleanup",
        title: "Skin Clean-Up",
        desc: "A quick yet effective treatment to cleanse, exfoliate and refresh your skin. Perfect for regular maintenance and instant glow.",
        price: "From ₹399",
        img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "detan",
        title: "De-Tan Treatment",
        desc: "Targeted treatment to remove sun tan and restore your natural skin tone. Uses brightening agents for visible results in one session.",
        price: "From ₹599",
        img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "hydra",
        title: "HydraFacial",
        desc: "A multi-step medical-grade treatment combining cleansing, exfoliation, extraction and hydration for transformative results.",
        price: "From ₹2499",
        img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "acne",
        title: "Acne & Pigmentation Care",
        desc: "Dermatologist-guided treatments that target acne, dark spots and uneven skin tone for a clearer, more confident complexion.",
        price: "From ₹1299",
        img: "https://images.unsplash.com/photo-1614859324967-bdf413c35a5e?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "antiaging",
        title: "Anti-Ageing Therapy",
        desc: "Revitalising treatments including collagen boosters and firming serums to reduce fine lines and restore youthful radiance.",
        price: "From ₹2999",
        img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&auto=format&fit=crop&q=80",
    },
];

const SKIN_TYPES = [
    { type: "Oily", icon: "💧", desc: "Deep-cleanse and oil-control treatments to keep shine in check and pores clear." },
    { type: "Dry", icon: "🌿", desc: "Rich hydration therapies and barrier-repair serums that restore moisture and softness." },
    { type: "Combination", icon: "✨", desc: "Balanced protocols that address both oily zones and dry patches in one session." },
    { type: "Sensitive", icon: "🌸", desc: "Gentle, fragrance-free treatments formulated specifically for reactive and sensitive skin." },
];

const FAQS = [
    {
        q: "How often should I get a facial?",
        a: "For most skin types, a professional facial every 4–6 weeks aligns with your skin's natural renewal cycle, keeping it consistently healthy and glowing.",
    },
    {
        q: "Is a HydraFacial suitable for sensitive skin?",
        a: "Yes. HydraFacial is non-invasive and can be customised for sensitive skin. We adjust the serums and suction levels to suit your specific skin tolerance.",
    },
    {
        q: "How many sessions are needed to see results for acne?",
        a: "Many clients notice improvement after 2–3 sessions. However, a course of 6–8 treatments over 8–12 weeks is typically recommended for lasting results.",
    },
    {
        q: "What should I do before my skin appointment?",
        a: "Come with a clean face, avoid retinol or exfoliants 24 hours prior, and inform your therapist of any active breakouts, allergies or recent procedures.",
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

export default function Skin() {
    return (
        <div className="bg-[#0e0c0b] min-h-screen">

            {/* ══════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════ */}
            <section className="relative w-full h-[420px] sm:h-[500px] flex items-center overflow-hidden" aria-label="Skin Care hero">
                <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&auto=format&fit=crop&q=80"
                    alt="Close-up of glowing skin with facial treatment — ANLON Skin Care"
                    width={1600} height={500}
                    loading="eager" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c0b]/92 via-[#0e0c0b]/60 to-transparent" />

                {/* Breadcrumb */}
                <div className="absolute top-8 left-8 sm:left-16 flex items-center gap-2 font-['Montserrat',sans-serif] text-white/40 text-[0.6rem] tracking-[0.18em] uppercase">
                    <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
                    <span aria-hidden="true">/</span>
                    <span className="text-white/70">Skin Care</span>
                </div>

                <div className="relative z-10 px-8 sm:px-16 max-w-[600px]">
                    <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-3">
                        Our Services
                    </p>
                    <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] mb-5">
                        Skin<br />Care
                    </h1>
                    <div className="w-10 h-px bg-[#b07d5e] mb-5" aria-hidden="true" />
                    <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] leading-relaxed tracking-wide max-w-[380px]">
                        Science-backed skin treatments by our in-house Dermatologist &amp; Cosmetologist — because your skin deserves the best.
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
            <section className="max-w-[1100px] mx-auto px-8 sm:px-12 py-20" aria-labelledby="skinservices-title">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
                    <div>
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            What We Offer
                        </p>
                        <h2
                            id="skinservices-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.6rem,3.5vw,2.4rem)]"
                        >
                            Our Skin Treatments
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
          SKIN TYPE SECTION
      ══════════════════════════════════════ */}
            <section className="bg-[#161412] border-y border-white/[0.06] py-20 px-8 sm:px-12" aria-labelledby="skintype-title">
                <div className="max-w-[1100px] mx-auto">
                    <div className="text-center mb-14">
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            Personalised For You
                        </p>
                        <h2
                            id="skintype-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)]"
                        >
                            Treatments For Every Skin Type
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {SKIN_TYPES.map(({ type, icon, desc }) => (
                            <div
                                key={type}
                                className="group flex flex-col items-center text-center p-8 border border-white/[0.06] hover:border-[#b07d5e]/40 transition-all duration-300 hover:bg-[#1c1916]"
                            >
                                <span className="text-3xl mb-4" aria-hidden="true">{icon}</span>
                                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light text-[1.1rem] tracking-wide mb-3 group-hover:text-[#d4a87a] transition-colors duration-200">
                                    {type} Skin
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
            <section className="max-w-[1100px] mx-auto px-8 sm:px-12 py-16" aria-label="Our skin care credentials">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "01", label: "In-House Dermatologist" },
                        { num: "20+", label: "Skin Treatments" },
                        { num: "5K+", label: "Glowing Clients" },
                        { num: "100%", label: "Safe Ingredients" },
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
            <section className="bg-[#161412] border-y border-white/[0.06] py-20 px-8 sm:px-12" aria-labelledby="skinprocess-title">
                <div className="max-w-[1100px] mx-auto">
                    <div className="text-center mb-14">
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            How It Works
                        </p>
                        <h2
                            id="skinprocess-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)]"
                        >
                            Your Skin Journey
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 relative">
                        <div className="hidden sm:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10" aria-hidden="true" />
                        {[
                            { step: "01", title: "Skin Analysis", desc: "Our Cosmetologist assesses your skin type, concerns and goals." },
                            { step: "02", title: "Custom Protocol", desc: "A personalised treatment plan is crafted based on your skin profile." },
                            { step: "03", title: "The Treatment", desc: "Relax as we apply clinically proven techniques and premium products." },
                            { step: "04", title: "Home Care Advice", desc: "We send you home with a tailored skincare routine to maintain results." },
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
          FAQ
      ══════════════════════════════════════ */}
            <section className="py-20 px-8 sm:px-12" aria-labelledby="skinfaq-title">
                <div className="max-w-[720px] mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            Got Questions?
                        </p>
                        <h2
                            id="skinfaq-title"
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
            <section className="relative w-full py-24 flex items-center justify-center overflow-hidden" aria-label="Book a skin care appointment">
                <img
                    src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1600&auto=format&fit=crop&q=75"
                    alt=""
                    role="presentation"
                    width={1600} height={400}
                    loading="lazy" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0e0c0b]/78" aria-hidden="true" />
                <div className="relative z-10 flex flex-col items-center text-center px-8 gap-6">
                    <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.2em] text-[clamp(1.6rem,4vw,2.8rem)]">
                        Reveal Your Best Skin Today
                    </h2>
                    <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] tracking-wide max-w-[420px] leading-relaxed">
                        Schedule your skin consultation and let our experts design the perfect treatment plan for you.
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