"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center group"
          aria-label="Shahraba KV, home"
        >
          <svg
            width="56"
            height="33"
            viewBox="0 0 56 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 md:h-8 w-auto"
          >
            <path
              d="M12.6298 30.62C10.3098 30.62 8.30976 30.2467 6.62976 29.5C4.97643 28.7267 3.45643 27.5667 2.06976 26.02L6.14976 21.98C7.05643 23.02 8.05643 23.8333 9.14976 24.42C10.2698 24.98 11.5631 25.26 13.0298 25.26C14.3631 25.26 15.3898 25.02 16.1098 24.54C16.8564 24.06 17.2298 23.3933 17.2298 22.54C17.2298 21.7667 16.9898 21.14 16.5098 20.66C16.0298 20.18 15.3898 19.7667 14.5898 19.42C13.8164 19.0733 12.9498 18.74 11.9898 18.42C11.0564 18.1 10.1231 17.74 9.18976 17.34C8.25643 16.9133 7.38976 16.3933 6.58976 15.78C5.81643 15.14 5.18976 14.3533 4.70976 13.42C4.22976 12.46 3.98976 11.26 3.98976 9.81999C3.98976 8.08666 4.40309 6.59333 5.22976 5.33999C6.08309 4.08666 7.25643 3.13999 8.74976 2.49999C10.2431 1.83333 11.9631 1.49999 13.9098 1.49999C15.8831 1.49999 17.6831 1.84666 19.3098 2.53999C20.9631 3.23332 22.3231 4.17999 23.3898 5.37999L19.3098 9.41999C18.4564 8.53999 17.5898 7.88666 16.7098 7.45999C15.8564 7.03332 14.8831 6.81999 13.7898 6.81999C12.6964 6.81999 11.8298 7.03332 11.1898 7.45999C10.5498 7.85999 10.2298 8.44666 10.2298 9.21999C10.2298 9.93999 10.4698 10.5267 10.9498 10.98C11.4298 11.4067 12.0564 11.78 12.8298 12.1C13.6298 12.42 14.4964 12.74 15.4298 13.06C16.3898 13.38 17.3364 13.7533 18.2698 14.18C19.2031 14.6067 20.0564 15.1533 20.8298 15.82C21.6298 16.46 22.2698 17.2867 22.7498 18.3C23.2298 19.2867 23.4698 20.5133 23.4698 21.98C23.4698 24.6733 22.5098 26.7933 20.5898 28.34C18.6698 29.86 16.0164 30.62 12.6298 30.62ZM44.9501 30.18L33.5101 15.46L44.5901 1.93999H52.3501L39.8701 16.62V14.06L52.7501 30.18H44.9501ZM27.8701 30.18V1.93999H34.1501V30.18H27.8701Z"
              fill="url(#skv-logo-gradient)"
            />
            <defs>
              <linearGradient
                id="skv-logo-gradient"
                x1="0"
                y1="0"
                x2="56"
                y2="33"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF3D8E" />
                <stop offset="0.5" stopColor="#B51F64" />
                <stop offset="1" stopColor="#6A0E3D" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base leading-6 text-text-secondary hover:text-text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:shahrabasheri153@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 bg-text-primary text-white rounded-full hover:bg-text-secondary transition-all duration-300 text-base leading-6 font-medium"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 text-text-primary"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-black/5">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-base leading-6 text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:shahrabasheri153@gmail.com"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 bg-text-primary text-white rounded-full transition-colors text-base leading-6 font-medium"
            >
              Get in touch
            </a>
          </nav>
        </div>
      )}

    </header>
  );
}
