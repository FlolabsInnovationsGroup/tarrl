import type { Metadata } from "next";
import "./globals.css";

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
    description: "Remote-first Embodied AI research institute. Advance your career. Be at the center of the future.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
