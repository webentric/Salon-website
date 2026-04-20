const QUICK_LINKS = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "HAIR AESTHETICS", href: "#hair" },
    { label: "SKIN CARE", href: "#skin" },
    { label: "NAIL CARE", href: "#nail" },
    { label: "PRODUCTS", href: "#products" },
    { label: "BEFORE/AFTER", href: "#gallery" },
    { label: "BLOG", href: "#blog" },
];

const SOCIAL = [
    {
        name: "Facebook",
        href: "#",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "#",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "#",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
        ),
    },
    {
        name: "Pinterest",
        href: "#",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.138-1.867 3.138-4.562 0-2.386-1.715-4.052-4.163-4.052-2.836 0-4.498 2.126-4.498 4.322 0 .856.33 1.772.741 2.272a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.338.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        name: "Google+",
        href: "#",
        icon: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden" aria-label="Site footer">

            {/* ── BACKGROUND PHOTO ── */}
            <img
                src="https://images.unsplash.com/photo-1600948836101-059a1a8e4872?w=1600&auto=format&fit=crop&q=70"
                alt=""
                role="presentation"
                width={1600}
                height={600}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* ── VERY DARK OVERLAY ── */}
            <div className="absolute inset-0 bg-[#0a0908]/88" aria-hidden="true" />

            {/* ── MAIN FOOTER CONTENT ── */}
            <div className="relative z-10 max-w-[1100px] mx-auto px-8 sm:px-12 pt-16 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">

                    {/* ── COL 1: ADDRESS ── */}
                    <div>
                        <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light tracking-[0.18em] uppercase text-[clamp(1rem,1.8vw,1.25rem)] mb-6">
                            Address:
                        </h3>

                        {/* Address block */}
                        <div className="flex items-start gap-3 mb-7">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50 flex-shrink-0 mt-0.5" aria-hidden="true">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M3 9h18M9 21V9" />
                            </svg>
                            <address className="not-italic font-['Montserrat',sans-serif] text-white/60 text-[0.7rem] leading-[1.85] tracking-wide">
                                No: 15, 2rd floor, Khader Nawaz Khan Rd,<br />
                                Nungambakkam, Chennai,<br />
                                Tamil Nadu 600034
                            </address>
                        </div>

                        {/* Working hours */}
                        <div className="flex items-start gap-3">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50 flex-shrink-0 mt-0.5" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <div>
                                <p className="font-['Montserrat',sans-serif] text-white text-[0.68rem] font-semibold tracking-[0.12em] uppercase mb-1">
                                    Working Hours:
                                </p>
                                <p className="font-['Montserrat',sans-serif] text-white/60 text-[0.7rem] tracking-wide">
                                    Monday to Sunday – 10am – 9pm
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── COL 2: QUICK LINKS ── */}
                    <div className="sm:border-l sm:border-white/10 sm:pl-10">
                        <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light tracking-[0.18em] uppercase text-[clamp(1rem,1.8vw,1.25rem)] mb-6">
                            Quick Links:
                        </h3>
                        <ul className="flex flex-col gap-[10px]" role="list">
                            {QUICK_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="group flex items-center gap-2 font-['Montserrat',sans-serif] text-white/55 text-[0.65rem] font-medium tracking-[0.14em] uppercase hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── COL 3: CONTACT INFO ── */}
                    <div className="sm:border-l sm:border-white/10 sm:pl-10">
                        <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light tracking-[0.18em] uppercase text-[clamp(1rem,1.8vw,1.25rem)] mb-6">
                            Contact Info:
                        </h3>

                        {/* Phone */}
                        <a
                            href="tel:09840783334"
                            className="flex items-center gap-3 mb-4 group focus-visible:outline-none"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60 flex-shrink-0" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="font-['Montserrat',sans-serif] text-white text-[0.75rem] font-semibold tracking-wide group-hover:text-[#8faeae] transition-colors duration-200">
                                098407 83334
                            </span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:info@anlon.com"
                            className="flex items-center gap-3 mb-8 group focus-visible:outline-none"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60 flex-shrink-0" aria-hidden="true">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span className="font-['Montserrat',sans-serif] text-white text-[0.75rem] font-semibold tracking-wide group-hover:text-[#8faeae] transition-colors duration-200">
                                info@anlon.com
                            </span>
                        </a>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10 mb-6" aria-hidden="true" />

                        {/* Stay in touch */}
                        <p className="font-['Montserrat',sans-serif] text-white/50 text-[0.6rem] font-semibold tracking-[0.2em] uppercase mb-4">
                            Stay In Touch:
                        </p>
                        <div className="flex items-center gap-4" aria-label="Social media links">
                            {SOCIAL.map(({ name, href, icon }) => (
                                <a
                                    key={name}
                                    href={href}
                                    aria-label={name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-7 h-7 rounded-full text-white/55 hover:text-white hover:bg-white/[0.08] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ── BOTTOM COPYRIGHT BAR ── */}
            <div className="relative z-10 border-t border-white/10">
                <div className="max-w-[1100px] mx-auto px-8 sm:px-12 py-5 flex flex-col items-center gap-1 text-center">
                    <p className="font-['Montserrat',sans-serif] text-white/60 text-[0.65rem] tracking-wide">
                        @ copyright 2025 Webentric. All Rights Reserved.
                    </p>
                    <p className="font-['Montserrat',sans-serif] text-white/30 text-[0.55rem] tracking-wider">
                        Web Design : Ray Creations
                    </p>
                </div>
            </div>
        </footer>
    );
}