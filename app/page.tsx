'use client';

import Link from 'next/link';
import { useCallback, useState } from 'react';

function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Home() {
    const [email, setEmail] = useState('');
    const [gdprChecked, setGdprChecked] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [gdprErr, setGdprErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [shake, setShake] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const submitWaitlist = useCallback(async () => {
        if (!validateEmail(email)) {
            setEmailErr(true);
            setShake(true);
            setTimeout(() => setShake(false), 400);
            return;
        }
        if (!gdprChecked) {
            setGdprErr(true);
            setTimeout(() => setGdprErr(false), 2000);
            return;
        }
        setEmailErr(false);
        setGdprErr(false);
        setErrorMessage(null);
        setLoading(true);

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() }),
            });
            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                setErrorMessage(
                    data.error || 'Something went wrong. Please try again.'
                );
                setLoading(false);
                return;
            }
            setSuccess(true);
        } catch {
            setErrorMessage('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    }, [email, gdprChecked]);

    return (
        <>
            <div className="bg-grid" />
            <div className="bg-glow" />
            <div className="bg-accent" />
            <div className="bg-grain" />

            <div className="card-stack-deco">
                <div className="deco-card dc-1">🃏</div>
                <div className="deco-card dc-2">🃏</div>
                <div className="deco-card dc-3">🃏</div>
            </div>

            <div className="page">
                <nav className="nav">
                    <div className="logo">
                        <div className="logo-dot" />
                        Deckswap
                    </div>
                    <div className="nav-tag">Early access</div>
                </nav>

                <main className="hero">
                    <div className="eyebrow">
                        <div className="eyebrow-dot" />
                        Coming soon
                    </div>

                    <h1 className="headline">
                        Buy & sell Pokémon cards
                        <br />
                        <span className="headline-muted">the way it </span>
                        <span className="headline-red">should be.</span>
                    </h1>

                    <p className="subline">
                        Deckswap is a{' '}
                        <strong>direct-payment marketplace</strong> for Pokémon
                        TCG singles built for the European collector community.
                        No wallet deposits, no complexity — just fast,
                        trustworthy trades built for European collectors and
                        designed to work beautifully on mobile.
                    </p>

                    <p className="waitlist-tagline">
                        Be the first to know when we launch.
                    </p>

                    <div className="waitlist-wrap">
                        {!success ? (
                            <>
                                <div className="waitlist-form">
                                    <input
                                        className={`waitlist-input ${
                                            emailErr ? 'err' : ''
                                        }`}
                                        style={
                                            shake
                                                ? {
                                                      animation:
                                                          'shake 0.35s ease',
                                                  }
                                                : undefined
                                        }
                                        type="email"
                                        placeholder="your@email.com"
                                        autoComplete="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setEmailErr(false);
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter')
                                                submitWaitlist();
                                        }}
                                    />
                                    <button
                                        type="button"
                                        className={`waitlist-btn ${
                                            loading ? 'loading' : ''
                                        }`}
                                        onClick={() => void submitWaitlist()}
                                        disabled={loading}
                                    >
                                        <span className="btn-txt">
                                            Join waitlist
                                        </span>
                                        <div className="btn-spinner" />
                                    </button>
                                </div>

                                {errorMessage && (
                                    <p className="waitlist-error">
                                        {errorMessage}
                                    </p>
                                )}

                                <label
                                    className="gdpr-label"
                                    htmlFor="gdpr-check"
                                >
                                    <input
                                        id="gdpr-check"
                                        type="checkbox"
                                        className={`gdpr-check ${
                                            gdprErr ? 'err' : ''
                                        }`}
                                        checked={gdprChecked}
                                        onChange={(e) => {
                                            setGdprChecked(e.target.checked);
                                            setGdprErr(false);
                                        }}
                                    />
                                    <span>
                                        I agree to receive a one-time launch
                                        notification from Deckswap. No spam,
                                        unsubscribe anytime. See our{' '}
                                        <Link
                                            href="/privacy"
                                            className="gdpr-link"
                                        >
                                            Privacy Policy
                                        </Link>
                                        .
                                    </span>
                                </label>

                                <div className="waitlist-note">
                                    No spam. Just a launch notification when we
                                    go live.
                                </div>
                            </>
                        ) : (
                            <div className="success-state show">
                                <div className="success-badge">
                                    <svg
                                        width="14"
                                        height="14"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    You&apos;re on the list!
                                </div>
                                <div className="success-sub-txt">
                                    We&apos;ll let you know the moment Deckswap
                                    goes live.
                                </div>
                            </div>
                        )}
                    </div>
                </main>

                <section className="features">
                    <div className="features-grid">
                        <div className="feature-cell">
                            <div className="feature-icon fi-red">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <div className="feature-title">Direct payments</div>
                            <div className="feature-desc">
                                Stripe Connect — buyers pay securely at checkout
                                with their card or local payment method. No
                                wallet top-ups, no platform balance to manage.
                            </div>
                            <div className="feature-val fv-red">
                                Instant transfer
                            </div>
                        </div>

                        <div className="feature-cell">
                            <div className="feature-icon fi-green">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                >
                                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                    <polyline points="16 7 22 7 22 13" />
                                </svg>
                            </div>
                            <div className="feature-title">
                                ~5% fee, nothing else
                            </div>
                            <div className="feature-desc">
                                One simple platform fee per sale. No listing
                                fees, no monthly subscription.
                            </div>
                            <div className="feature-val fv-green">
                                €0 to list · ~5% on sale
                            </div>
                        </div>

                        <div className="feature-cell">
                            <div className="feature-icon fi-gold">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                >
                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                    <line x1="7" y1="7" x2="7.01" y2="7" />
                                </svg>
                            </div>
                            <div className="feature-title">
                                Condition-first browsing
                            </div>
                            <div className="feature-desc">
                                Find the grade you want instantly. M, NM, EX —
                                aggregated so you&apos;re not scrolling through
                                200 listings.
                            </div>
                            <div className="mini-badges">
                                <span className="mb mb-m">M</span>
                                <span className="mb mb-nm">NM</span>
                                <span className="mb mb-ex">EX</span>
                            </div>
                        </div>

                        <div className="feature-cell">
                            <div className="feature-icon fi-blue">
                                <svg
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.8}
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="2" y1="12" x2="22" y2="12" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                </svg>
                            </div>
                            <div className="feature-title">
                                Built for Europe
                            </div>
                            <div className="feature-desc">
                                Seller flags, EU-wide shipping, local payment
                                methods. The alternative Cardmarket never
                                became.
                            </div>
                            <div className="feature-val fv-blue">
                                🇳🇱 🇩🇪 🇫🇷 🇧🇪 🇪🇸 🇮🇹 & more
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="footer-left">
                        <div className="footer-dot" />
                        Deckswap
                    </div>
                    <div className="footer-links">
                        <a
                            className="footer-link"
                            href="mailto:s.klop@turnovate.nl"
                        >
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
