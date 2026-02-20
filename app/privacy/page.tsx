import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy — Deckswap',
    description:
        'Privacy Policy for Deckswap — how we handle your data when you join the waitlist.',
};

export default function PrivacyPage() {
    return (
        <>
            <div className="bg-grid" />
            <div className="bg-glow" />
            <div className="bg-grain" />

            <div className="page privacy">
                <nav className="nav">
                    <Link href="/" className="logo">
                        <div className="logo-dot" />
                        Deckswap
                    </Link>
                    <Link href="/" className="nav-back">
                        <svg
                            width="14"
                            height="14"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back
                    </Link>
                </nav>

                <main className="privacy-content w-full">
                    <p className="page-label">Legal</p>
                    <h1 className="page-title text-(--ink-1) font-bold">
                        Privacy Policy
                    </h1>
                    <p className="page-updated">Last updated: February 2026</p>

                    <div className="section-title text-(--ink-1) font-semibold">
                        What we collect
                    </div>
                    <p className="section-text">
                        When you join the waitlist we collect your email
                        address. Nothing else.
                    </p>

                    <div className="divider" />

                    <div className="section-title text-(--ink-1) font-semibold">
                        Why we collect it
                    </div>
                    <p className="section-text">
                        We use your email address to keep you informed about
                        Deckswap — including our launch, new features, and other
                        updates we think you&apos;ll find relevant. You can
                        unsubscribe at any time by clicking the unsubscribe link
                        in any email we send, or by contacting us directly.
                    </p>

                    <div className="divider" />

                    <div className="section-title text-(--ink-1) font-semibold">
                        Who we share it with
                    </div>
                    <p className="section-text">
                        We use Resend (resend.com) to manage and send emails.
                        Your email address is stored on their platform solely
                        for this purpose. We do not sell, rent, or share your
                        email address with any other third parties.
                    </p>

                    <div className="divider" />

                    <div className="section-title text-(--ink-1) font-semibold">
                        How long we keep it
                    </div>
                    <p className="section-text">
                        We retain your email address for as long as you remain
                        subscribed. You can ask us to delete your data at any
                        time and we will do so promptly.
                    </p>

                    <div className="divider" />

                    <div className="section-title text-(--ink-1) font-semibold">
                        Your rights (GDPR)
                    </div>
                    <p className="section-text">
                        You have the right to access, correct, or delete your
                        data at any time. You also have the right to withdraw
                        your consent, object to processing, or request data
                        portability. To exercise any of these rights, email us
                        at{' '}
                        <a href="mailto:s.klop@turnovate.nl">
                            s.klop@turnovate.nl
                        </a>{' '}
                        and we will respond within 30 days.
                    </p>

                    <div className="divider" />

                    <div className="section-title text-(--ink-1) font-semibold">
                        Cookies
                    </div>
                    <p className="section-text">
                        This page does not use cookies or any tracking scripts.
                    </p>

                    <div className="divider" />

                    <div className="section-title text-(--ink-1) font-semibold">
                        Controller
                    </div>
                    <p className="section-text">
                        Deckswap
                        <br />
                        <a href="mailto:s.klop@turnovate.nl">
                            s.klop@turnovate.nl
                        </a>
                    </p>
                </main>

                <footer className="footer">
                    <div className="footer-left">
                        <div className="footer-dot" />
                        Deckswap
                    </div>
                    <div className="footer-links">
                        <a
                            className="footer-link text-(--ink-3) hover:text-(--ink-1)"
                            href="mailto:s.klop@turnovate.nl"
                        >
                            Contact
                        </a>
                        <Link
                            className="footer-link text-(--ink-3) hover:text-(--ink-1)"
                            href="/privacy"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                    <div className="footer-copy">© 2026 Deckswap</div>
                </footer>
            </div>
        </>
    );
}
