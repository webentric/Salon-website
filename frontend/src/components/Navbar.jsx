import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../data";

const SocialIcons = {
  Facebook: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Twitter: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  Instagram: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  Pinterest: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.138-1.867 3.138-4.562 0-2.386-1.715-4.052-4.163-4.052-2.836 0-4.498 2.126-4.498 4.322 0 .856.33 1.772.741 2.272a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.338.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S17.522 2 12 2z" />
    </svg>
  ),
  Google: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
    </svg>
  ),
};


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    const onOutside = (e) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target) // 👈 exclude button
      ) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [mobileOpen]);

  const buttonRef = useRef(null);

  return (
    <>
      {/* ── FIXED NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-stretch h-[72px] bg-[#111111] transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.6)]" : ""
          }`}
      >
        {/* Skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-4 focus:z-50 focus:bg-[#b07d5e] focus:text-white focus:px-4 focus:py-2 focus:rounded-b text-xs font-semibold tracking-widest"
        >
          Skip to content
        </a>

        {/* ── LOGO ── */}
        <a
          href="/"
          aria-label="ANLON An Art Salon — home"
          className="flex flex-col justify-center items-start px-7 bg-[#b07d5e] min-w-[152px] flex-shrink-0 group no-underline"
        >
          <span
            className="font-['Cormorant_Garamond',Georgia,serif] text-white font-light tracking-[0.22em] leading-none text-[1.85rem] group-hover:opacity-90 transition-opacity"
          >
            ANLON
          </span>
          <span
            className="font-['Cormorant_Garamond',Georgia,serif] text-white/75 font-light italic tracking-wide text-[0.65rem] leading-none mt-[3px]"
          >
            AnArtSalon
          </span>
        </a>

        {/* ── DESKTOP NAV ── */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex flex-1 items-center pl-8 gap-7"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              className={({ isActive }) =>
                `font-['Montserrat',sans-serif] text-sm font-medium tracking-[0.14em] uppercase whitespace-nowrap border-b pb-[2px] transition-colors duration-200 ${isActive
                  ? "text-white border-[#b07d5e]"
                  : "text-white/55 border-transparent hover:text-white hover:border-[#b07d5e] focus-visible:text-white focus-visible:border-[#b07d5e] focus-visible:outline-none"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* ── SOCIAL ICONS (desktop) ── */}
        <div
          aria-label="Social media links"
          className="hidden lg:flex items-center gap-[14px] px-6 flex-shrink-0"
        >
          {Object.entries(SocialIcons).map(([name, icon]) => (
            <a
              key={name}
              href="#"
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-7 h-7 rounded-full text-white/50 hover:text-white hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30 transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* ── BOOK BUTTON ── */}
        <a
          href="#booking"
          className="hidden sm:flex items-center gap-2 self-stretch px-7 bg-[#8faeae] hover:bg-[#6b9090] focus-visible:bg-[#6b9090] focus-visible:outline-none font-['Montserrat',sans-serif] text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-white whitespace-nowrap flex-shrink-0 transition-colors duration-200"
        >
          BOOK AN APPOINTMENT
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          ref={buttonRef}
          className="lg:hidden flex items-center justify-center w-12 h-12 my-auto mx-2 ml-auto rounded text-white hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 transition-colors"
          onClick={() => setMobileOpen((p) => !p)}

          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </header >

      {/* ── MOBILE DRAWER ── */}
      {
        mobileOpen && (
          <div
            id="mobile-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#141414] border-t border-white/[0.07] px-7 pt-6 pb-8 flex flex-col gap-6 lg:hidden animate-[fadeDown_200ms_ease_forwards]"
            style={{ animation: "fadeDown 200ms ease forwards" }}
          >
            <style>{`
            @keyframes fadeDown {
              from { opacity: 0; transform: translateY(-10px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>

            <nav aria-label="Mobile navigation links">
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map(({ label, href }) => (
                  <NavLink
                    onClick={() => setMobileOpen((p) => !p)}
                    key={label}
                    to={href}
                    className={({ isActive }) =>
                      `font-['Montserrat',sans-serif] py-4 text-sm font-medium tracking-[0.14em] uppercase whitespace-nowrap border-b pb-[2px] transition-colors duration-200 ${isActive
                        ? "text-white border-[#b07d5e]"
                        : "text-white/55 border-transparent hover:text-white hover:border-[#b07d5e] focus-visible:text-white focus-visible:border-[#b07d5e] focus-visible:outline-none"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </ul>
            </nav>

            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="self-start flex items-center gap-2 px-6 py-3 bg-[#8faeae] hover:bg-[#6b9090] text-white font-['Montserrat',sans-serif] text-[0.62rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-200"
            >
              BOOK AN APPOINTMENT
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>

            <div className="flex gap-4">
              {Object.entries(SocialIcons).map(([name, icon]) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-8 h-8 rounded-full text-white/45 hover:text-white hover:bg-white/[0.06] transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        )
      }
    </>
  );
}