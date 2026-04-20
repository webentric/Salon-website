import { useEffect, useRef } from "react";
import hero_bg from '../assets/images/hero-bg.jpg'

export default function Hero() {
    const headingRef = useRef(null);

    // Subtle fade-in on mount
    useEffect(() => {
        const el = headingRef.current;
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";
        requestAnimationFrame(() => {
            el.style.transition = "opacity 900ms ease, transform 900ms ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        });
    }, []);

    return (
        <section
            className="relative w-full min-h-screen bg-[#0e0c0b] overflow-hidden flex items-center"
            aria-label="Hero — The Exclusive Salon in Your Town"
        >
            {/* ── BACKGROUND WOMAN PHOTO (right-aligned) ── */}
            {/*
        Replace the src below with your actual image.
        Using a high-quality placeholder for now.
      */}
            <div className="absolute inset-0 flex justify-end pointer-events-none select-none">
                <img
                    src={hero_bg}
                    alt="Elegant woman with curly hair — ANLON Salon model"
                    width={1000}
                    height={900}
                    loading="eager"
                    decoding="async"
                    className="h-full w-auto max-w-[72%] object-cover object-top"
                />
                {/* Left-to-right dark gradient so text is readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c0b] via-[#0e0c0b]/80 via-40% to-transparent" />
            </div>

            {/* ── BOOK AN APPOINTMENT — top right ── */}
            <a
                href="#booking"
                className="absolute top-0 right-0 z-20 flex items-center gap-2
          px-6 py-4
          bg-[#8faeae] hover:bg-[#6b9090]
          font-['Montserrat',sans-serif] text-[0.6rem] font-semibold
          tracking-[0.22em] uppercase text-white whitespace-nowrap
          transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
        "
            >
                BOOK AN APPOINTMENT
                <svg
                    width="10" height="10" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5"
                    aria-hidden="true"
                >
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </a>

            {/* ── TEXT CONTENT — left side ── */}
            <div
                ref={headingRef}
                className="relative z-10 px-8 sm:px-16 lg:px-24 max-w-[600px] pt-24 pb-16"
            >
                {/* Main heading */}
                <h1
                    className="
            font-['Cormorant_Garamond',Georgia,serif]
            font-light text-white
            text-6xl
            leading-[1.05] tracking-wide
            uppercase mb-5
          "
                >
                    The Exclusive
                    <br />
                    Salon In Your Town
                </h1>

                {/* Subtle divider */}
                <div className="w-10 h-[1px] bg-[#b07d5e] mb-5" aria-hidden="true" />

                {/* Subtext */}
                <p
                    className="
            font-['Montserrat',sans-serif]
            text-white/50 text-sm
            font-normal leading-relaxed tracking-wide
            max-w-[340px]
          "
                >
                    Acquainted with world-class tools and in-house Dermatologist cum
                    Cosmetologist for stunning looks and absolute luxury.
                </p>

                {/* Optional CTA button */}
                <a
                    href="#booking"
                    className="
            mt-8 inline-flex items-center gap-2
            px-7 py-5
            bg-[#8faeae] hover:bg-[#6b9090]
            text-white font-['Montserrat',sans-serif]
            text-[0.6rem] font-semibold tracking-[0.2em] uppercase
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30
          "
                >
                    BOOK AN APPOINTMENT
                    <svg
                        width="10" height="10" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2.5"
                        aria-hidden="true"
                    >
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </a>
            </div>
        </section>
    );
}