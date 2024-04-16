import { Poppins } from "next/font/google";
import "./_style/globals.css";

const font = Poppins({ subsets: ["latin"], weight: ["100", "200", '300', '400', '500', '600', '700', '800'] });

export const viewport = {
  themeColor: 'white',
}

export const metadata = {
  title: "Parallax - Framer Motion",
  description: "Parallax effect built with Next.js, Framer Motion and Lenis. Super quick, super fast.",
  generator: 'Next.js',
  applicationName: 'Parallax',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Lenis', 'Parallax', 'Framer Motion'],
  authors: [{ name: 'Maela', url: 'https://maelacudini.com' }],
  metadataBase: new URL('https://parallax-liard-one.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Parallax - Framer Motion",
    description: "Parallax effect built with Next.js, Framer Motion and Lenis. Super quick, super fast.",
    url: 'https://parallax-liard-one.vercel.app/',
    siteName: 'Parallax - Framer Motion',
    images: [
      {
        url: 'https://parallax-liard-one.vercel.app/ogpengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  manifest: 'https://parallax-liard-one.vercel.app/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
