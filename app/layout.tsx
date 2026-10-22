import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const url = "https://your-domain.com"; // SWAP: your real domain
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Gideon Ikaehor | Full-Stack Developer",
  description: "Full-Stack Engineer specializing in PHP, Python, and TypeScript. Portfolio, store, and contact.",
  openGraph: { title: "Gideon Ikaehor | Full-Stack Developer", description: "Building the web, one stack at a time.", url, siteName: "Gideon Ikaehor", type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Gideon Ikaehor, Full-Stack Developer" }] }, // SWAP: add public/og.png (1200x630)
  twitter: { card: "summary_large_image", title: "Gideon Ikaehor | Full-Stack Developer", images: ["/og.png"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${inter.variable} ${mono.variable}`}><body>{children}</body></html>);
}
