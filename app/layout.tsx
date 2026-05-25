import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Invariance Group | AI Infrastructure & Corporate Advisory",
  description:
    "We design and deploy autonomous, agentic infrastructure for South Africa's most demanding logistics, legal, and financial enterprises. Operational certainty in a volatile world.",
  keywords: [
    "AI consultancy South Africa",
    "Gauteng AI infrastructure",
    "POPIA compliance AI",
    "SARB BoP automation",
    "Autonomous agentic systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030303] text-slate-100 font-sans">
        {children}
      </body>
    </html>
  );
}
