import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-heading",
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tarrl.org'),
  title: {
    default: "TARRL - Texas Advanced Robotics Research Lab",
    template: "%s | TARRL"
  },
  description: "Remote-first Embodied AI research institute. Join PhD-level researchers building open-source robotics systems. Access real robots, collaborate globally, advance your career.",
  keywords: [
    "robotics research",
    "embodied AI",
    "machine learning",
    "PhD robotics",
    "remote research",
    "open source robotics",
    "Texas robotics",
    "AI research lab",
    "humanoid robots",
    "quadruped robots",
    "robot perception",
    "swarm robotics",
    "space robotics",
    "research associate",
    "postdoc robotics"
  ],
  authors: [{ name: "TARRL", url: "https://tarrl.org" }],
  creator: "TARRL - Texas Advanced Robotics Research Lab",
  publisher: "TARRL",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tarrl.org",
    title: "TARRL - Texas Advanced Robotics Research Lab",
    description: "Remote-first Embodied AI research institute. Join PhD-level researchers building open-source robotics systems.",
    siteName: "TARRL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TARRL - Texas Advanced Robotics Research Lab"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TARRL - Texas Advanced Robotics Research Lab",
    description: "Remote-first Embodied AI research institute. Join PhD-level researchers building open-source robotics systems.",
    images: ["/og-image.jpg"],
    creator: "@tarrl"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased w-full overflow-x-hidden`}>
        <div className="w-full min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
