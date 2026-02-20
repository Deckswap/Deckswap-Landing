import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});
const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Deckswap — Coming Soon',
    description:
        'A faster, simpler way to buy and sell Pokémon cards across Europe. Direct payments, no wallet. Join the waitlist.',
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL ?? 'https://deckswap.eu'
    ),
    openGraph: {
        title: 'Deckswap — Coming Soon',
        description:
            'A faster, simpler way to buy and sell Pokémon cards across Europe. Direct payments, no wallet. Join the waitlist.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Deckswap — Coming Soon',
        description:
            'A faster, simpler way to buy and sell Pokémon cards across Europe. Direct payments, no wallet. Join the waitlist.',
    },
    robots: 'index, follow',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} min-h-screen overflow-x-hidden !bg-[#0d0d0f] !text-[#f0f0f4] font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
