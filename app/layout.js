import { Poppins } from "next/font/google";
import "./_style/globals.css";

const font = Poppins({ subsets: ["latin"], weight: ["100", "200", '300', '400', '500', '600', '700', '800'] });

export const metadata = {
  title: "Parallax - Framer Motion",
  description: "Parallax effect built with Next.js, Framer Motion and Lenis. Super quick, super fast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
