export default function AboutUs() {
    return (
        <section
            className="w-full flex flex-col lg:flex-row min-h-[560px]"
            aria-labelledby="about-heading"
        >
            {/* ── LEFT — Dark content panel ── */}
            <div className="relative flex-1 bg-[#0e0c0b] px-10 sm:px-14 lg:px-16 pt-16 pb-12 flex flex-col justify-between overflow-hidden">

                {/* Decorative wave SVG background */}
                <svg
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 w-full opacity-[0.07] pointer-events-none select-none"
                    viewBox="0 0 600 200" preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0,120 C80,60 160,180 280,100 C400,20 480,160 600,80 L600,200 L0,200 Z"
                        fill="white"
                    />
                    <path
                        d="M0,150 C100,90 200,180 340,120 C460,60 520,160 600,100 L600,200 L0,200 Z"
                        fill="white" opacity="0.5"
                    />
                </svg>

                {/* Top content */}
                <div className="relative z-10 max-w-[520px]">
                    {/* ABOUT US heading */}
                    <h2
                        id="about-heading"
                        className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light tracking-[0.18em] uppercase text-[clamp(1.8rem,3.8vw,2.8rem)] leading-tight mb-8"
                    >
                        About Us
                    </h2>

                    {/* Welcome subheading */}
                    <h3
                        className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light italic text-[clamp(1.1rem,2vw,1.45rem)] leading-snug mb-5"
                    >
                        Welcome to ANLON Skin & Hair — where luxury meets precision care.
                    </h3>

                    {/* Body paragraph 1 */}
                    <p
                        className="font-['Montserrat',sans-serif] text-white/55 text-md leading-[1.5] tracking-wide text-justify mb-5"
                    >
                        At ANLON, we believe beauty is not just about appearance—it’s about confidence, care, and individuality. Our salon is designed to offer a refined experience where advanced techniques meet personalized attention.
                        From expert hair aesthetics to specialized skin treatments, every service is delivered with precision, using high-quality products and modern technology. Our professionals are trained to understand your unique needs, ensuring results that enhance your natural beauty.
                        Step into a space where comfort, elegance, and expertise come together to create an experience that goes beyond ordinary salon care.
                    </p>

                    {/* Body paragraph 2 — bold */}
                    <p
                        className="font-['Montserrat',sans-serif] text-white/75 text-sm font-semibold leading-[1.9] tracking-wide text-justify"
                    >
                        Experience premium care, visible results, and a transformation that truly reflects you.
                    </p>
                </div>

                {/* ── BOTTOM CTA LINKS ── */}
                <div className="relative z-10 flex items-center gap-8 mt-12 pt-6 border-t border-white/10">
                    {/* Book an Appointment */}
                    <a
                        href="#booking"
                        className="group flex items-center gap-2 font-['Montserrat',sans-serif] text-xs md:text-md font-semibold tracking-[0.18em] uppercase text-amber-300/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
                    >
                        <svg
                            width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2"
                            aria-hidden="true"
                            className="group-hover:translate-x-0.5 transition-transform duration-200"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                        Book An Appointment
                    </a>

                    {/* Salon Locator */}
                    <a
                        href="#locator"
                        className="group flex items-center gap-2 font-['Montserrat',sans-serif] text-xs md:text-md font-semibold tracking-[0.18em] uppercase text-amber-300/60 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:text-white"
                    >
                        {/* Pin icon */}
                        <svg
                            width="20" height="20" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" strokeWidth="2"
                            aria-hidden="true"
                        >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        Salon Locator
                    </a>
                </div>
            </div>

            {/* ── RIGHT — Salon photo ── */}
            <div className="w-full lg:w-[50%] min-h-[340px] lg:min-h-full flex-shrink-0 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=900&auto=format&fit=crop&q=85"
                    alt="Smiling stylist blow-drying a client's hair at ANLON salon"
                    width={900}
                    height={700}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </section>
    );
}