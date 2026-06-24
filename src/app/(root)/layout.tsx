import type { Metadata } from 'next';
import { Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header/header';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LevelAxis Technologies',
  description: 'LevelAxis is a software development company that provides custom software development, cloud solutions, and AI-driven development services.',
  keywords: ['software development', 'cloud solutions', 'AI', 'custom software', 'blockchain', 'devops', 'MVP'],
  openGraph: {
    siteName: 'LevelAxis',
    title: 'LevelAxis | At the axis of computation, consensus, and clarity',
    description: 'We help businesses use modern technology to deliver more',
    url: 'https://levelaxishq.com',
    locale: 'en_US',
    images: { url: '/og-image.png', alt: 'LevelAxis AI Services' },
    type: 'website',
  },
  twitter: {
    title: 'LevelAxis',
    description: 'LevelAxis is a software development company that provides custom software development, cloud solutions, and AI-driven development services.',
    creator: '@levelaxishq',
    site: '@levelaxishq',
    images: { url: '/og-image.png', alt: 'LevelAxis AI Services' },
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <div style={{ display: 'contents' }}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
