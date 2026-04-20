import { useState } from "react";

const CATEGORIES = ["All", "Hair", "Skin", "Nail", "Tools"];

const PRODUCTS = [
    // Hair
    {
        id: "p1", category: "Hair",
        name: "Keratin Smoothing Serum",
        brand: "ANLON Pro",
        desc: "Salon-grade keratin serum that tames frizz, adds intense shine and protects against heat up to 230°C.",
        price: "₹1,299", originalPrice: "₹1,699",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
    },
    {
        id: "p2", category: "Hair",
        name: "Argan Oil Hair Mask",
        brand: "ANLON Pro",
        desc: "Deep conditioning mask enriched with pure Moroccan argan oil. Restores moisture and softness in 20 minutes.",
        price: "₹899", originalPrice: null,
        badge: null,
        img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
    },
    {
        id: "p3", category: "Hair",
        name: "Scalp Revive Shampoo",
        brand: "ANLON Derma",
        desc: "Dermatologist-formulated shampoo targeting dandruff, hair fall and scalp irritation with tea tree and zinc.",
        price: "₹699", originalPrice: "₹849",
        badge: "New",
        img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
    },
    // Skin
    {
        id: "p4", category: "Skin",
        name: "Vitamin C Brightening Serum",
        brand: "ANLON Derma",
        desc: "20% stabilised Vitamin C serum that fades dark spots, evens skin tone and boosts collagen production.",
        price: "₹1,599", originalPrice: "₹1,999",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
    },
    {
        id: "p5", category: "Skin",
        name: "Hyaluronic Acid Moisturiser",
        brand: "ANLON Derma",
        desc: "Lightweight, oil-free gel moisturiser with triple-weight hyaluronic acid for 72-hour deep hydration.",
        price: "₹1,199", originalPrice: null,
        badge: null,
        img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
    },
    {
        id: "p6", category: "Skin",
        name: "SPF 50 Sunscreen Gel",
        brand: "ANLON Derma",
        desc: "Broad-spectrum PA++++ sunscreen in a non-greasy gel formula. Suitable for all skin types including oily and acne-prone.",
        price: "₹799", originalPrice: "₹999",
        badge: "New",
        img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&auto=format&fit=crop&q=80",
    },
    // Nail
    {
        id: "p7", category: "Nail",
        name: "Gel Nail Polish Set",
        brand: "ANLON Nails",
        desc: "Set of 6 long-lasting gel nail polishes in curated seasonal shades. Chip-resistant for up to 3 weeks.",
        price: "₹1,499", originalPrice: "₹1,799",
        badge: "Best Seller",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&auto=format&fit=crop&q=80",
    },
    {
        id: "p8", category: "Nail",
        name: "Cuticle Repair Oil",
        brand: "ANLON Nails",
        desc: "Nourishing blend of jojoba, vitamin E and sweet almond oil that heals dry, cracked cuticles overnight.",
        price: "₹449", originalPrice: null,
        badge: null,
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&auto=format&fit=crop&q=80",
    },
    {
        id: "p9", category: "Nail",
        name: "Nail Strengthener Base Coat",
        brand: "ANLON Nails",
        desc: "Fortifying base coat with calcium and keratin that prevents breakage and promotes healthy nail growth.",
        price: "₹399", originalPrice: "₹499",
        badge: null,
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&auto=format&fit=crop&q=80",
    },
    // Tools
    {
        id: "p10", category: "Tools",
        name: "Ionic Blow Dryer",
        brand: "ANLON Pro",
        desc: "Professional 2200W ionic blow dryer with ceramic barrel for frizz-free drying. 3 heat settings, cool shot.",
        price: "₹3,999", originalPrice: "₹5,499",
        badge: "Sale",
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
    },
    {
        id: "p11", category: "Tools",
        name: "Ceramic Hair Straightener",
        brand: "ANLON Pro",
        desc: "Floating ceramic plates with infrared heat technology for sleek, damage-free straightening up to 230°C.",
        price: "₹2,999", originalPrice: "₹3,999",
        badge: null,
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80",
    },
    {
        id: "p12", category: "Tools",
        name: "Manicure & Pedicure Kit",
        brand: "ANLON Nails",
        desc: "Professional 12-piece stainless steel nail care kit with ergonomic handles. Comes in a premium leather pouch.",
        price: "₹1,299", originalPrice: null,
        badge: "New",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&auto=format&fit=crop&q=80",
    },
];

const BADGE_STYLE = {
    "Best Seller": "bg-[#b07d5e] text-white",
    "New": "bg-[#8faeae] text-white",
    "Sale": "bg-[#c4706e] text-white",
};

export default function Products() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [cart, setCart] = useState([]);
    const [addedId, setAddedId] = useState(null);

    const filtered = activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory);

    const handleAdd = (id) => {
        setCart((prev) => [...prev, id]);
        setAddedId(id);
        setTimeout(() => setAddedId(null), 1500);
    };

    return (
        <div className="bg-[#0e0c0b] min-h-screen">

            {/* ══════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════ */}
            <section
                className="relative w-full h-[420px] sm:h-[500px] flex items-center overflow-hidden"
                aria-label="Products hero"
            >
                <img
                    src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1600&auto=format&fit=crop&q=80"
                    alt="Premium salon products neatly arranged — ANLON Products"
                    width={1600} height={500}
                    loading="eager" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c0b]/92 via-[#0e0c0b]/60 to-transparent" />

                {/* Breadcrumb */}
                <div className="absolute top-8 left-8 sm:left-16 flex items-center gap-2 font-['Montserrat',sans-serif] text-white/40 text-[0.6rem] tracking-[0.18em] uppercase">
                    <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
                    <span aria-hidden="true">/</span>
                    <span className="text-white/70">Products</span>
                </div>

                {/* Cart indicator */}
                {cart.length > 0 && (
                    <div className="absolute top-7 right-8 sm:right-16 flex items-center gap-2 bg-[#8faeae] px-4 py-2">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                            <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        <span className="font-['Montserrat',sans-serif] text-white text-[0.6rem] font-semibold tracking-[0.12em]">
                            {cart.length} item{cart.length > 1 ? "s" : ""}
                        </span>
                    </div>
                )}

                <div className="relative z-10 px-8 sm:px-16 max-w-[600px]">
                    <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-3">
                        Shop ANLON
                    </p>
                    <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] mb-5">
                        Our<br />Products
                    </h1>
                    <div className="w-10 h-px bg-[#b07d5e] mb-5" aria-hidden="true" />
                    <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] leading-relaxed tracking-wide max-w-[380px]">
                        Salon-grade hair, skin and nail products — the same formulas our experts trust, now available for you to take home.
                    </p>
                </div>
            </section>

            {/* ══════════════════════════════════════
          TAN INTRO STRIP
      ══════════════════════════════════════ */}
            <section className="bg-[#b07d5e] py-5 px-8">
                <p className="font-['Montserrat',sans-serif] text-white text-[0.65rem] font-medium tracking-[0.22em] uppercase text-center">
                    Free Shipping on Orders Above ₹1,999 · Genuine Salon-Grade Products · Easy Returns
                </p>
            </section>

            {/* ══════════════════════════════════════
          FILTER TABS + PRODUCT GRID
      ══════════════════════════════════════ */}
            <section
                className="max-w-[1100px] mx-auto px-8 sm:px-12 py-16"
                aria-labelledby="products-title"
            >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div>
                        <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.6rem] font-medium tracking-[0.28em] uppercase mb-2">
                            Browse By Category
                        </p>
                        <h2
                            id="products-title"
                            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.18em] text-[clamp(1.6rem,3.5vw,2.4rem)]"
                        >
                            All Products
                        </h2>
                    </div>
                    <p className="font-['Montserrat',sans-serif] text-white/40 text-[0.62rem] tracking-wide">
                        {filtered.length} product{filtered.length !== 1 ? "s" : ""}
                    </p>
                </div>

                {/* Category Filter Tabs */}
                <div
                    className="flex flex-wrap gap-2 mb-12"
                    role="tablist"
                    aria-label="Filter products by category"
                >
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            role="tab"
                            aria-selected={activeCategory === cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 font-['Montserrat',sans-serif] text-[0.6rem] font-semibold tracking-[0.16em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b07d5e]/50 ${activeCategory === cat
                                    ? "bg-[#b07d5e] text-white"
                                    : "border border-white/15 text-white/50 hover:border-[#b07d5e]/50 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map(({ id, name, brand, desc, price, originalPrice, badge, img }) => (
                        <article
                            key={id}
                            className="group bg-[#161412] border border-white/[0.06] overflow-hidden hover:border-[#b07d5e]/40 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden bg-[#1c1916]">
                                <img
                                    src={img} alt={name}
                                    width={500} height={208}
                                    loading="lazy" decoding="async"
                                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161412]/60 via-transparent to-transparent" />
                                {badge && (
                                    <span className={`absolute top-3 left-3 font-['Montserrat',sans-serif] text-[0.52rem] font-semibold tracking-[0.14em] uppercase px-3 py-1 ${BADGE_STYLE[badge]}`}>
                                        {badge}
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <p className="font-['Montserrat',sans-serif] text-[#b07d5e] text-[0.55rem] font-medium tracking-[0.2em] uppercase mb-1">
                                    {brand}
                                </p>
                                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light text-[1.1rem] tracking-wide mb-3 group-hover:text-[#d4a87a] transition-colors duration-200">
                                    {name}
                                </h3>
                                <p className="font-['Montserrat',sans-serif] text-white/45 text-[0.65rem] leading-[1.85] tracking-wide mb-5 flex-1">
                                    {desc}
                                </p>

                                {/* Price + CTA */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.06]">
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-['Cormorant_Garamond',Georgia,serif] text-white text-[1.15rem] font-light">
                                            {price}
                                        </span>
                                        {originalPrice && (
                                            <span className="font-['Montserrat',sans-serif] text-white/30 text-[0.6rem] line-through">
                                                {originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleAdd(id)}
                                        aria-label={`Add ${name} to cart`}
                                        className={`flex items-center gap-2 px-4 py-2 font-['Montserrat',sans-serif] text-[0.58rem] font-semibold tracking-[0.14em] uppercase transition-all duration-200 focus-visible:outline-none ${addedId === id
                                                ? "bg-[#b07d5e] text-white"
                                                : "bg-[#8faeae] hover:bg-[#6b9090] text-white"
                                            }`}
                                    >
                                        {addedId === id ? (
                                            <>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                Added
                                            </>
                                        ) : (
                                            <>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                                    <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
                                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                                </svg>
                                                Add to Cart
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════
          WHY BUY FROM US
      ══════════════════════════════════════ */}
            <section
                className="bg-[#161412] border-y border-white/[0.06] py-14 px-8 sm:px-12"
                aria-label="Why buy from ANLON"
            >
                <div className="max-w-[1100px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    {[
                        {
                            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                            title: "100% Genuine",
                            desc: "Every product is sourced directly from brands — no counterfeits.",
                        },
                        {
                            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
                            title: "Fast Delivery",
                            desc: "Pan-India shipping within 3–5 business days.",
                        },
                        {
                            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg>,
                            title: "Easy Returns",
                            desc: "Not satisfied? Return within 7 days for a full refund.",
                        },
                        {
                            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
                            title: "Expert Picks",
                            desc: "Curated by our stylists and dermatologists — only the best.",
                        },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} className="flex flex-col items-center gap-3">
                            <div className="text-[#b07d5e]" aria-hidden="true">{icon}</div>
                            <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light text-[1rem] tracking-wide">
                                {title}
                            </h3>
                            <p className="font-['Montserrat',sans-serif] text-white/45 text-[0.62rem] leading-[1.75] tracking-wide max-w-[160px]">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════
          BOTTOM CTA BANNER
      ══════════════════════════════════════ */}
            <section
                className="relative w-full py-24 flex items-center justify-center overflow-hidden"
                aria-label="Book a salon visit"
            >
                <img
                    src="https://images.unsplash.com/photo-1600948836101-059a1a8e4872?w=1600&auto=format&fit=crop&q=70"
                    alt=""
                    role="presentation"
                    width={1600} height={400}
                    loading="lazy" decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0e0c0b]/80" aria-hidden="true" />
                <div className="relative z-10 flex flex-col items-center text-center px-8 gap-6">
                    <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light uppercase tracking-[0.2em] text-[clamp(1.6rem,4vw,2.8rem)]">
                        Experience It In Salon First
                    </h2>
                    <p className="font-['Montserrat',sans-serif] text-white/55 text-[0.72rem] tracking-wide max-w-[420px] leading-relaxed">
                        Not sure which product is right for you? Book a consultation and let our experts guide you.
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