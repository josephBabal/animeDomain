import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
// import Hero from "@/components/Hero";
// import Footer from "@/components/Footer";

import "./globals.css";
import Navbar from "@/components/Navbar";
const dmSans = DM_Sans({ subsets: ["latin"] });
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: {
    default: "Anime Domain",
    template: '%s | Anime Domain'
  },
  description: "Your favorite anime, all in one place.",
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="bg-zinc-950"> */}
      <body className="bg-zinc-900">
        
        {/* <main className="max-w-7xl mx-auto bg-[#0F1117]"> */}
        <main className="">
          <Navbar />
      
          {children}
          <Footer />
        </main>

      </body>
    </html>
  );
}
