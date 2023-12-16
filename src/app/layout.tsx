import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Influencer | Created by v0.dev",
  description:
    "An AI Powered influencer marketing SaaS website created completely by v0.dev",
  openGraph: {
    url: "influencerai.vercel.app",
    title: "AI Influencer | Created by v0.dev",
    description:
      "An AI Powered influencer marketing SaaS website created completely by v0.dev",
    type: "website",
    siteName: "AI Influencer | Created by v0.dev",
    images: [
      {
        url: "https://influencerai.vercel.app/thumb.png",
        width: 1200,
        height: 630,
        alt: "AI Influencer | Created by v0.dev",
      },
      {
        url: "https://influencerai.vercel.app/thumb.png",
        width: 800,
        height: 600,
        alt: "AI Influencer | Created by v0.dev",
      },
      {
        url: "https://influencerai.vercel.app/thumb.png",
        width: 600,
        height: 600,
        alt: "AI Influencer | Created by v0.dev",
      },
      {
        url: "https://influencerai.vercel.app/thumb.png",
        width: 400,
        height: 400,
        alt: "AI Influencer | Created by v0.dev",
      },
      {
        url: "https://influencerai.vercel.app/thumb.png",
        width: 200,
        height: 200,
        alt: "AI Influencer | Created by v0.dev",
      },
    ],
  },
  twitter: {
    title: "AI Influencer | Created by v0.dev",
    description:
      "An AI Powered influencer marketing SaaS website created completely by v0.dev",
    card: "summary_large_image",
    creator: "@8rxn",
    images: ["https://influencerai.vercel.app/thumb.png"],
  },
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
          <div className="bg-black text-white text-center py-2 text-xs">
            This is a{" "}
            <Link
              href="https://v0.dev"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              v0.dev
            </Link>{" "}
            generated website |{" "}
            <Link
              href="https://github.com/8rxn/v0-influencer-ai"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              Github
            </Link>{" "}
            |{" "}
          </div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
