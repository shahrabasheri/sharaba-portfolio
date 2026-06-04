export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-blue-gray py-20 md:py-28 relative overflow-hidden"
    >

      <div className="mx-auto px-6 md:px-12 lg:px-[200px] text-center relative">
        <h2 className="font-display text-4xl md:text-6xl font-medium text-text-primary leading-[1.1] mb-5 tracking-[-0.02em]">
          Want to{" "}
          <span className="font-serif italic font-normal text-gold-dark">
            work together?
          </span>
        </h2>
        <p className="text-text-secondary text-base md:text-lg mb-10 max-w-xl mx-auto">
          Open to product design roles, contract work, or a chat about a
          project.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:shahrabasheri153@gmail.com"
            className="group inline-flex items-center gap-2 px-7 py-3 bg-text-primary text-white rounded-full font-medium hover:bg-text-secondary transition-all duration-300 text-sm md:text-base shadow-lg shadow-black/5"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            shahrabasheri153@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/shahraba-kv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-black/15 text-text-primary rounded-full hover:border-text-primary transition-all duration-300 text-sm md:text-base"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <p className="text-text-secondary/60 text-sm mt-10">
          I usually reply within a day. Dubai, UAE.
        </p>
      </div>
    </section>
  );
}
