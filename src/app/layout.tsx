import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import FortuneNav from "@/components/FortuneNav";
import HackClubFlag from "@/components/HackClubFlag";
import RetroSoundProvider from "@/components/RetroSoundProvider";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXTAUTH_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://fortune-ysws.vercel.app"),
  ),
  title: {
    default: "Fortune | Build a Real Business with Hack Club",
    template: "%s | Fortune YSWS",
  },
  description:
    "Fortune is a Hack Club YSWS for teen founders. Learn business, build a useful product, and ship a website for your idea.",
  keywords: [
    "Fortune YSWS",
    "Hack Club",
    "teen founders",
    "build a business",
    "student startup",
    "business learning",
    "ship a website",
  ],
  authors: [{ name: "Fortune YSWS" }],
  creator: "Fortune YSWS",
  publisher: "Hack Club",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Fortune | Build a Real Business with Hack Club",
    description:
      "Learn the business, build the product, and ship something people want with Fortune YSWS.",
    siteName: "Fortune YSWS",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Fortune | Build a Real Business with Hack Club",
    description:
      "A Hack Club YSWS for teen founders who want to turn ideas into real products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&family=Patrick+Hand&family=Space+Grotesk:wght@500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="https://assets.hackclub.com/icon-rounded.png" />
      </head>
      <body className="min-h-screen bg-[#f7f1e1] text-[#181926] antialiased selection:bg-[#ec3750] selection:text-white">
        <AuthProvider>
          <RetroSoundProvider>
            {/* Hack Club Flag Ribbon (auto-hidden in fullscreen PC mode) */}
            <HackClubFlag />

            {/* Persistent Retro Top Navbar */}
            <FortuneNav />

            <div>
              {children}
            </div>
          </RetroSoundProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
