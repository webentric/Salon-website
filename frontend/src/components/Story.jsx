import story_bg from '../assets/images/story.jpg'

const LINKS = [
    {
        id: "founder",
        label: ["MET THE", "FOUNDER"],
        href: "#founder",
        img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&auto=format&fit=crop&q=80",
        alt: "Person working on a laptop — Meet the Founder",
        tint: "rgba(196,162,140,0.55)",
    },
    {
        id: "booking",
        label: ["BOOK AN", "APPOINTMENT"],
        href: "#booking",
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
        alt: "Stylist holding tools — Book an Appointment",
        tint: "rgba(210,175,155,0.50)",
    },
    {
        id: "products",
        label: ["SHOP THE", "PRODUCTS"],
        href: "#products",
        img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
        alt: "Luxury skincare bottles — Shop the Products",
        tint: "rgba(190,160,138,0.52)",
    },
    {
        id: "gallery",
        label: ["BEFORE/AFTER", "GALLERY"],
        href: "#gallery",
        img: "",
        alt: "Before and After Gallery",
        tint: "rgba(196,162,138,1)",   // solid tan — no image, just colour
    },
];


export default function Story() {
    return (
        <div className="">
            <section
                className="w-full bg-white py-16 px-4"
                aria-label="Quick links — Meet the Founder, Book, Shop, Gallery"
            >
                <div className="flex flex-wrap justify-center gap-[-24px] sm:gap-0">
                    {LINKS.map(({ id, label, href, img, alt, tint }, i) => (
                        <a
                            key={id}
                            href={href}
                            aria-label={label.join(" ")}
                            className="group relative flex-shrink-0 focus-visible:outline-none"
                            style={{
                                /* Overlap circles slightly on larger screens */
                                marginLeft: i === 0 ? 0 : "clamp(-12px, -2vw, -24px)",
                                zIndex: i + 1,
                            }}
                        >
                            {/* ── CIRCLE ── */}
                            <div
                                className="
                relative
                w-[clamp(170px,20vw,220px)]
                h-[clamp(170px,20vw,220px)]
                rounded-full overflow-hidden
                transition-transform duration-400 ease-out
                group-hover:scale-105 group-hover:z-10
                shadow-md group-hover:shadow-xl
              "
                            >
                                {/* Background photo */}
                                {img && (
                                    <img
                                        src={img}
                                        alt={alt}
                                        width={220}
                                        height={220}
                                        loading="lazy"
                                        decoding="async"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                    />
                                )}

                                {/* Tinted overlay */}
                                <div
                                    className="absolute inset-0"
                                    style={{ background: tint }}
                                    aria-hidden="true"
                                />

                                {/* Centered label */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                                    {label.map((line) => (
                                        <span
                                            key={line}
                                            className="
                      block font-['Montserrat',sans-serif]
                      text-white font-semibold
                      text-[clamp(0.6rem,1.1vw,0.72rem)]
                      tracking-[0.18em] uppercase leading-snug
                    "
                                        >
                                            {line}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
            <section
                className="relative w-full min-h-[480px] flex items-center justify-center overflow-hidden"
                aria-labelledby="story-heading"
            >
                {/* ── BACKGROUND SALON PHOTO ── */}
                <img
                    src={story_bg}
                    alt=""
                    role="presentation"
                    width={1600}
                    height={700}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* ── DARK OVERLAY ── */}
                <div
                    className="absolute inset-0 bg-black/62"
                    aria-hidden="true"
                />

                {/* ── CENTERED CONTENT ── */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-12 py-20 max-w-[700px] mx-auto">

                    {/* Main heading */}
                    <h2
                        id="story-heading"
                        className="
            font-['Cormorant_Garamond',Georgia,serif]
            text-white font-light uppercase
            text-[clamp(1.7rem,4.5vw,3rem)]
            tracking-[0.22em] leading-tight mb-4
          "
                    >
                        The Story of Salon!
                    </h2>

                    {/* Italic subtitle */}
                    <p
                        className="
            font-['Cormorant_Garamond',Georgia,serif]
            text-white/70 font-light italic
            text-lg
            tracking-wide leading-snug mb-8
          "
                    >
                        It's a one stop destination to all your Hair – Nail &amp; Skin care solutions
                    </p>

                    {/* Body paragraph */}
                    <p
                        className="
            font-['Montserrat',sans-serif]
            text-white/65 text-md
            font-normal leading-[1.9] tracking-wide
            max-w-[520px] mb-10 text-center
          "
                    >
                        Anlon Art Salon is a conglomeration of renowned hair stylists, Therapists &amp;
                        Nail Artists of Chennai in association with an Aesthetic Physician. Anlon is a
                        Spot on building in the most elite premium Khader Nawaz Khan road with dedicated
                        basement car parks valet car parking services.
                    </p>

                    {/* Outlined CTA button */}
                    <a
                        href="#booking"
                        className="
            inline-flex items-center gap-3
            px-10 py-4
            border border-[#8faeae] hover:bg-[#8faeae]/20
            font-['Montserrat',sans-serif]
            text-[0.62rem] font-semibold tracking-[0.22em] uppercase
            text-white
            transition-colors duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8faeae]/50
          "
                    >
                        Book An Appointment
                        <svg
                            width="10" height="10" viewBox="0 0 24 24"
                            fill="currentColor" aria-hidden="true"
                        >
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>

    );
}