import { useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
    {
        id: 1,
        text: "Loved this place and the hair makeover done was extremely amazing :) I'm completely happy and satisfied with the mind blowing services and experience i received from them. Especially Appu who did the magic in just few minutes. I got good hair and skin tips as well from them. Thank you so much guys for the new look. Definitely coming there next time and so on .. Best Wishes!! Keep up the great work :)",
        author: "Ferlin Getziah",
    },
    {
        id: 2,
        text: "Absolutely wonderful experience at ANLON! The staff was incredibly professional and attentive. My skin has never looked better after their facial treatment. The ambiance is luxurious and calming. Highly recommend to anyone looking for a premium salon experience in the city.",
        author: "Priya Sharma",
    },
    {
        id: 3,
        text: "Best nail care service I've ever had. The technicians are meticulous, hygienic and truly skilled. The salon is beautifully designed and every detail is taken care of. Will definitely be coming back with my friends. ANLON has truly set a new standard for salons!",
        author: "Meera Nair",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("next"); // "next" | "prev"

    const go = useCallback((dir) => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setCurrent((prev) =>
                dir === "next"
                    ? (prev + 1) % TESTIMONIALS.length
                    : (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
            );
            setAnimating(false);
        }, 320);
    }, [animating]);

    // Auto-advance every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => go("next"), 6000);
        return () => clearInterval(timer);
    }, [go]);

    const { text, author } = TESTIMONIALS[current];

    return (
        <section
            className="relative w-full min-h-[520px] flex items-center justify-center overflow-hidden"
            aria-label="Testimonials"
        >

            <div className="absolute inset-0 bg-white" aria-hidden="true" />

            {/* ── LEFT ARROW ── */}
            <button
                onClick={() => go("prev")}
                aria-label="Previous testimonial"
                className="
          absolute left-6 sm:left-10 z-20
          flex items-center justify-center
          w-11 h-11 rounded-full
          text-black/70 hover:black-white
          hover:bg-black/10
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
        "
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>

            {/* ── RIGHT ARROW ── */}
            <button
                onClick={() => go("next")}
                aria-label="Next testimonial"
                className="
          absolute right-6 sm:right-10 z-20
          flex items-center justify-center
          w-11 h-11 rounded-full
          text-black/70 hover:to-black-white
          hover:bg-black/10
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
        "
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

            {/* ── CONTENT ── */}
            <div className="relative z-10 flex flex-col items-center text-center px-16 sm:px-24 lg:px-40 py-16 max-w-[860px] mx-auto w-full">

                {/* Supertitle */}
                <p className="font-['Montserrat',sans-serif] text-black/50 text-[0.58rem] font-medium tracking-[0.25em] uppercase mb-3">
                    — See What Our Clients Are Saying! —
                </p>

                {/* TESTIMONIALS heading */}
                <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-black font-light uppercase tracking-[0.2em] text-[clamp(1.6rem,4vw,2.8rem)] leading-tight mb-8 relative">
                    {/* Decorative large quote mark */}
                    <span
                        className="absolute -left-8 sm:-left-16 -top-4 font-['Cormorant_Garamond',Georgia,serif] text-black/40 text-[8rem] leading-none select-none pointer-events-none"
                        aria-hidden="true"
                    >
                        "
                    </span>
                    Testimonials
                </h2>

                {/* Review text with fade transition */}
                <div
                    className="transition-all duration-300"
                    style={{
                        opacity: animating ? 0 : 1,
                        transform: animating
                            ? `translateX(${direction === "next" ? "-20px" : "20px"})`
                            : "translateX(0)",
                    }}
                >
                    <blockquote
                        className="font-['Montserrat',sans-serif] text-black text-[0.8rem] sm:text-[0.85rem] font-normal leading-[2] tracking-wide text-center mb-8"
                    >
                        {text}
                    </blockquote>

                    <cite className="font-['Cormorant_Garamond',Georgia,serif] text-black/55 italic text-[0.9rem] tracking-wide not-italic">
                        — {author}
                    </cite>
                </div>

                {/* Dot indicators */}
                <div className="flex gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
                    {TESTIMONIALS.map((t, i) => (
                        <button
                            key={t.id}
                            role="tab"
                            aria-selected={i === current}
                            aria-label={`Go to testimonial ${i + 1}`}
                            onClick={() => { setDirection(i > current ? "next" : "prev"); setCurrent(i); }}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 ${i === current ? "bg-white w-4" : "bg-white/35"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}