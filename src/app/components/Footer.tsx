export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-gray border-t border-black/5 pt-16 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-[1fr,auto] gap-10 md:gap-16 items-end pb-12 border-b border-black/5">
          {/* Brand line */}
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-medium text-text-primary leading-tight mb-3 tracking-[-0.02em]">
              Got a project?{" "}
              <span className="font-serif italic font-normal text-gold-dark">
                Let&apos;s talk.
              </span>
            </h3>
            <p className="text-text-secondary text-base max-w-md">
              Open to design roles, contract work, or a chat about a project.
              Based in Dubai, UAE.
            </p>
          </div>

          {/* Primary CTA */}
          <a
            href="mailto:shahrabasheri153@gmail.com"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-text-primary text-white rounded-full font-medium hover:bg-text-secondary transition-all duration-300 text-sm md:text-base self-start md:self-end"
          >
            shahrabasheri153@gmail.com
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-8">
          <div className="flex items-center gap-2 text-text-secondary/80 text-sm">
            <span>Shahraba KV</span>
            <span className="text-tag-border">·</span>
            <span>{year}</span>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="https://www.linkedin.com/in/shahraba-kv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://www.behance.net/shahrabakv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
              Behance
            </a>
            <a
              href="mailto:shahrabasheri153@gmail.com"
              className="text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
