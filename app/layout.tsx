import Script from 'next/script';
import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'VibraBG - Modern Background Patterns & Gradients for Web Developers',
  description:
    'A curated collection of vibrant, modern background patterns and gradients for web developers. Ready-to-use snippets crafted with Tailwind CSS.',
  keywords:
    'background patterns, gradients, Tailwind CSS, web development, CSS snippets, modern design',
  openGraph: {
    title: 'VibraBG - Modern Background Patterns & Gradients',
    description:
      'Elevate your web designs with our curated collection of modern background patterns and gradients.',
    url: 'https://vibrabg.com',
    type: 'website',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'VibraBG Cover Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VibraBG - Modern Background Patterns & Gradients',
    description:
      'Elevate your web designs with our curated collection of modern background patterns and gradients.',
    image: '/banner.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        {!isDev ? (
          <Script
            async
            src="https://analytics.umami.is/script.js"
            data-website-id="9ad0e597-9fa4-4690-8ca2-18a964ab087f"
          />
        ) : null}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}