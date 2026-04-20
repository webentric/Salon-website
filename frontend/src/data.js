// --------------------- NAVBAR DATA ---------------------

import { href } from "react-router-dom";

export const NAV_LINKS = [
    { label: "HOME", href: "/" },
    { label: "HAIR AESTHETICS", href: "/hair" },
    { label: "SKIN CARE", href: "/skin" },
    { label: "NAIL CARE", href: "/nail" },
    { label: "PRODUCTS", href: "/products" },
    { label: "CONTACT", href: "/contact" }
];

// --------------------- SERVICES DATA ---------------------

export const SERVICES = [
    {
        id: "hair",
        label: "HAIR AESTHETICS",
        href: "#hair",
        img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&auto=format&fit=crop&q=80",
        alt: "Woman with beautiful curly hair — Hair Aesthetics service",
        bg: "#f5ede3",
    },
    {
        id: "skin",
        label: "SKIN CARE",
        href: "#skin",
        img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&auto=format&fit=crop&q=80",
        alt: "Person making heart shape — Skin Care service",
        bg: "#e8e8e8",
    },
    {
        id: "nail",
        label: "NAIL CARE",
        href: "#nail",
        img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&auto=format&fit=crop&q=80",
        alt: "Red painted nails with love text — Nail Care service",
        bg: "#efefef",
    },
    {
        id: "products",
        label: "PRODUCTS",
        href: "#products",
        img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop&q=80",
        alt: "Luxury skincare product bottles — Products",
        bg: "#ede8e0",
    },
];

// --------------------- STORY DATA ---------------------

export const LINKS = [
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

// --------------------- TESTIMONIALLS DATA ---------------------

export const TESTIMONIALS = [
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


// --------------------- FOOTER DATA ---------------------

export const QUICK_LINKS = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "HAIR AESTHETICS", href: "#hair" },
    { label: "SKIN CARE", href: "#skin" },
    { label: "NAIL CARE", href: "#nail" },
    { label: "PRODUCTS", href: "#products" },
    { label: "BEFORE/AFTER", href: "#gallery" },
    { label: "BLOG", href: "#blog" },
];

