import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "TARRL - Texas Advanced Robotics Research Lab",
  description: "Remote-first Embodied AI research institute. Advance your career. Be at the center of the future.",
  keywords: ["robotics", "AI", "embodied AI", "research", "Texas", "remote-first", "PhD"],
  authors: [{ name: "FloLabs" }],
  openGraph: {
    title: "TARRL - Texas Advanced Robotics Research Lab",
    description: "Remote-first Embodied AI research institute. Advance your career. Be at the center of the future.",
    url: "https://tarrl.org",
    siteName: "TARRL",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TARRL - Texas Advanced Robotics Research Lab",
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
