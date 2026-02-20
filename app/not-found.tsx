import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="bg-grid" />
      <div className="bg-glow" />
      <div className="bg-grain" />

      <div className="page not-found">
        <nav className="nav">
          <Link href="/" className="logo">
            <div className="logo-dot" />
            Deckswap
          </Link>
        </nav>

        <main className="hero">
          <div className="not-found-code">
            <span className="code-four">4</span>
            <span className="code-zero">0</span>
            <span className="code-four">4</span>
          </div>

          <div className="eyebrow inline-flex items-center gap-2 rounded-full border border-[var(--line-2)] bg-[var(--bg-2)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--ink-1)]">
            <div className="eyebrow-dot h-1.5 w-1.5 rounded-full bg-[var(--red)]" />
            Page not found
          </div>

          <h1 className="headline text-[var(--ink-1)] text-2xl font-bold leading-tight sm:text-3xl">
            This card&apos;s not in the binder.
          </h1>

          <p className="subline max-w-[380px] text-[15px] leading-relaxed text-[var(--ink-3)]">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>

          <div className="actions flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="btn-primary inline-flex h-11 items-center justify-center gap-1.5 rounded-full border-0 bg-[var(--red)] px-5 py-0 text-sm font-semibold text-white no-underline outline-none transition-[background-color,transform] hover:bg-[var(--red-hover)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[var(--ink-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-0)]"
            >
              <svg
                width="13"
                height="13"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Back to Deckswap
            </Link>
            <a
              href="mailto:s.klop@turnovate.nl"
              className="btn-secondary inline-flex h-11 items-center justify-center gap-1.5 rounded-full border-0 bg-[var(--bg-4)] px-5 py-0 text-sm font-semibold text-white no-underline outline-none transition-[background-color,transform] hover:bg-[var(--bg-3)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[var(--ink-2)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-0)]"
            >
              Contact us
            </a>
          </div>
        </main>

        <footer className="footer">
          <div className="footer-left">
            <div className="footer-dot" />
            Deckswap
          </div>
          <div className="footer-links">
            <a className="footer-link" href="mailto:s.klop@turnovate.nl">
              Contact
            </a>
            <Link className="footer-link" href="/privacy">
              Privacy Policy
            </Link>
          </div>
          <div className="footer-copy">© 2026 Deckswap</div>
        </footer>
      </div>
    </>
  );
}
