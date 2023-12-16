import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Influencer | Created by v0.dev",
  description: "An AI Powered influencer marketing SaaS website created completely by v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div className="bg-black text-white text-center py-2 text-xs">This is a <Link href="https://v0.dev" target="_blank" rel="noreferrer" className="underline underline-offset-4">v0.dev</Link> generated website</div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
