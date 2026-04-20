import { SERVICES } from "../data";

export default function Services() {
    return (
        <section
            className="w-full bg-[#f4f2ee] py-16 px-6 sm:px-12 lg:px-20"
            aria-labelledby="services-heading"
        >
            {/* ── HEADER ROW ── */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-14">
                {/* Title with decorative brace */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <h2
                        id="services-heading"
                        className="font-['Cormorant_Garamond',Georgia,serif] text-[clamp(1.8rem,3.5vw,2.6rem)] font-light tracking-[0.18em] uppercase text-[#1a1a1a]"
                    >
                        Services
                    </h2>
                    {/* Decorative curly brace SVG */}
                    <svg
                        width="28" height="60" viewBox="0 0 28 80"
                        fill="none" stroke="#c9b49a" strokeWidth="1.2"
                        aria-hidden="true" className="opacity-60 mt-1"
                    >
                        <path d="M20 4 C10 4, 6 10, 6 20 L6 34 C6 40, 2 42, 2 42 C2 42, 6 44, 6 50 L6 64 C6 74, 10 80, 20 80" />
                    </svg>
                </div>

                {/* Divider + subtitle */}
                <div className="flex items-center gap-4 sm:ml-2">
                    <div className="hidden sm:block w-px h-10 bg-[#c9b49a]/50" aria-hidden="true" />
                    <p className="font-['Montserrat',sans-serif] text-[0.62rem] font-medium tracking-[0.18em] uppercase text-[#1a1a1a]/45">
                        Taking Appointments for Select Services —
                    </p>
                </div>
            </div>

            {/* ── SERVICE CARDS GRID ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 mb-16 lg:px-50">
                {SERVICES.map(({ id, label, href, img, alt, bg }) => (
                    <a
                        key={id}
                        href={href}
                        className="group flex flex-col items-center gap-5 no-underline focus-visible:outline-none"
                        aria-label={label}
                    >
                        {/* Circle image */}
                        <div
                            className="relative w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden flex-shrink-0 shadow-md transition-shadow duration-300 group-hover:shadow-xl"
                            style={{ backgroundColor: bg }}
                        >
                            <img
                                src={img}
                                alt={alt}
                                width={180}
                                height={180}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Subtle overlay on hover */}
                            <div className="absolute inset-0 rounded-full bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>

                        {/* Label */}
                        <span
                            className="font-['Montserrat',sans-serif] text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[#1a1a1a] text-center group-hover:text-[#b07d5e] transition-colors duration-200"
                        >
                            {label}
                        </span>
                    </a>
                ))}
            </div>

            {/* ── BOOK AN APPOINTMENT BUTTON ── */}
            <div className="flex justify-center">
                <a
                    href="#booking"
                    className="
            inline-flex items-center gap-3
            px-10 py-4
            bg-[#8faeae] hover:bg-[#6b9090]
            font-['Montserrat',sans-serif]
            text-[0.62rem] font-semibold tracking-[0.22em] uppercase
            text-white
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8faeae]/50
          "
                >
                    Book An Appointment
                    <svg
                        width="11" height="11" viewBox="0 0 24 24"
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