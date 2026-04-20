import { useState } from "react";

const SERVICES = [
    {
        id: "haircut",
        title: "Hair Cut & Styling",
        desc: "Precision cuts tailored to your face shape and lifestyle. Our expert stylists deliver a personalized look that lasts.",
        price: "From ₹499",
        img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "coloring",
        title: "Hair Coloring",
        desc: "From natural balayage to bold fashion colours — we use only premium colour brands for vibrant, long-lasting results.",
        price: "From ₹1499",
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "keratin",
        title: "Keratin Treatment",
        desc: "Smooth, frizz-free hair that lasts up to 6 months. Restore strength, shine and manageability with our keratin therapy.",
        price: "From ₹2999",
        img: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "spa",
        title: "Hair Spa & Deep Conditioning",
        desc: "Nourish damaged hair from root to tip. Our restorative spa treatments leave your hair silky, hydrated and healthy.",
        price: "From ₹799",
        img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "extensions",
        title: "Hair Extensions",
        desc: "Add length and volume instantly with premium Remy hair extensions — seamlessly blended for a completely natural look.",
        price: "From ₹3999",
        img: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=600&auto=format&fit=crop&q=80",
    },
    {
        id: "scalp",
        title: "Scalp Therapy",
        desc: "Targeted treatments for dandruff, hair fall and scalp irritation. Combining dermatologist-backed protocols for real results.",
        price: "From ₹1199",
        img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&auto=format&fit=crop&q=80",
    },
];

const FAQS = [
    {
        q: "How long does a keratin treatment last?",
        a: "A keratin treatment typically lasts between 3 to 6 months depending on your hair type, maintenance routine, and the products you use post-treatment.",
    },
    {
        q: "Is hair colouring safe for damaged hair?",
        a: "We assess your hair condition before any colour service. For damaged hair, we recommend a nourishing treatment first. We use ammonia-free and low-damage colour formulas where possible.",
    },
    {
        q: "How often should I get a hair spa?",
        a: "For optimal hair health, we recommend a hair spa every 3–4 weeks if your hair is chemically treated, or every 6–8 weeks for normal hair.",
    },
    {
        q: "Do you offer hair consultations?",
        a: "Absolutely! Every appointment begins with a complimentary consultation where our stylist assesses your hair, discusses your goals, and recommends the right treatments.",
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
                <p className="font-['Montserrat',sans-serif] text-white/50 text-[0.7rem] leading-[1.9] tracking-wide pb-5 pr-8 animate-[fadeIn_200ms_ease]">
                    {a}
                </p>
            )}
        </div>
    );
}

export default function Hair() {
    return (
        <div className="bg-[#0e0c0b] min-h-screen">

            {/* ══════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════ */}
            <section className="relative w-full h-[420px] sm:h-[500px] flex items-center overflow-hidden" aria-label="Hair Aesthetics hero">
                <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600&auto=format&fit=crop&q=80"
                    alt="Elegant woman with styled hair — ANLON Hair Aesthetics"
                    width={1600} height={500}
                    loading="eager" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c0b]/90 via-[#0e0c0b]/60 to-transparent" />

                {/* Breadcrumb */}
                <div className="absolute top-8 left-8 sm:left-16 flex items-center gap-2 font-['Montserrat',sans-serif] text-white/40 text-[0.6rem] tracking-[0.18em] uppercase">
                    <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
                    <span aria-hidden="true">/</span>
                    <span className="text-white/70">Hair Aesthetics</span>
                </div>

                <div className="relative z-10 px-8 sm:px-16 max-w-[600px]">
                    <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-3">
                        Our Services
                    </p>
                    <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] mb-5">
                        Hair<br />Aesthetics
                    </h1>
                    <div className="w-10 h-px bg-[#b07d5e] mb-5" aria-hidden="true" />
                    <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] leading-relaxed tracking-wide max-w-[380px]">
                        World-class hair services delivered by Chennai's finest stylists — tailored for you.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════════
          INTRO STRIP
      ══════════════════════════════════════ */}
            <section className="bg-[#b07d5e] py-5 px-8 sm:px-16">
                <p className="font-['Montserrat',sans-serif] text-white text-[0.65rem] font-medium tracking-[0.22em] uppercase text-center">
                    Taking Appointments · Monday to Sunday · 10am – 9pm
                </p>
            </section>

            {/* ══════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════ */}
            <section className="max-w-[1100px] mx-auto px-8 sm:px-12 py-20" aria-labelledby="services-title">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
                    <div>
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            What We Offer
                        </p>
                        <h2
                            id="services-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.6rem,3.5vw,2.4rem)]"
                        >
                            Our Hair Services
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
                            className="group relative bg-[#161412] border border-white/[0.06] overflow-hidden hover:border-[#b07d5e]/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={img}
                                    alt={title}
                                    width={600} height={208}
                                    loading="lazy" decoding="async"
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-transparent to-transparent" />
                                {/* Price badge */}
                                <span className="absolute top-3 right-3 bg-[#b07d5e] font-['Montserrat',sans-serif] text-white text-[0.55rem] font-semibold tracking-[0.14em] uppercase px-3 py-1">
                                    {price}
                                </span>
                            </div>

                            {/* Text */}
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
          WHY CHOOSE US — STATS STRIP
      ══════════════════════════════════════ */}
            <section className="bg-[#161412] border-y border-white/[0.06] py-12 px-8 sm:px-12" aria-label="Why choose ANLON">
                <div className="max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    {[
                        { num: "10+", label: "Years Experience" },
                        { num: "5K+", label: "Happy Clients" },
                        { num: "15+", label: "Expert Stylists" },
                        { num: "100%", label: "Premium Products" },
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
            <section className="max-w-[1100px] mx-auto px-8 sm:px-12 py-20" aria-labelledby="process-title">
                <div className="text-center mb-14">
                    <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                        How It Works
                    </p>
                    <h2
                        id="process-title"
                        className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)]"
                    >
                        Your Journey With Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 relative">
                    {/* Connector line (desktop) */}
                    <div className="hidden sm:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-white/10" aria-hidden="true" />

                    {[
                        { step: "01", title: "Consultation", desc: "We begin by understanding your hair goals, lifestyle and condition." },
                        { step: "02", title: "Treatment Plan", desc: "Our stylist recommends a personalised service plan just for you." },
                        { step: "03", title: "The Service", desc: "Sit back while our experts work their magic using premium products." },
                        { step: "04", title: "Aftercare Tips", desc: "We guide you on maintaining your look with the right home care routine." },
                    ].map(({ step, title, desc }) => (
                        <div key={step} className="flex flex-col items-center text-center relative z-10">
                            <div className="w-16 h-16 rounded-full border border-[#b07d5e]/50 bg-[#161412] flex items-center justify-center mb-5">
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
            </section>

            {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
            <section className="bg-[#161412] py-20 px-8 sm:px-12" aria-labelledby="faq-title">
                <div className="max-w-[720px] mx-auto">
                    <div className="text-center mb-12">
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            Got Questions?
                        </p>
                        <h2
                            id="faq-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.5rem,3vw,2.2rem)]"
                        >
                            Frequently Asked
                        </h2>
                    </div>
                    <div>
                        {FAQS.map((faq) => (
                            <FAQItem key={faq.q} {...faq} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
          BOTTOM CTA BANNER
      ══════════════════════════════════════ */}
            <section className="relative w-full py-24 flex items-center justify-center overflow-hidden" aria-label="Book an appointment">
                <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&auto=format&fit=crop&q=75"
                    alt=""
                    role="presentation"
                    width={1600} height={400}
                    loading="lazy" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0e0c0b]/78" aria-hidden="true" />
                <div className="relative z-10 flex flex-col items-center text-center px-8 gap-6">
                    <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.2em] text-[clamp(1.6rem,4vw,2.8rem)]">
                        Ready for Your Transformation?
                    </h2>
                    <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] tracking-wide max-w-[420px] leading-relaxed">
                        Book your appointment today and let our experts craft the perfect look for you.
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