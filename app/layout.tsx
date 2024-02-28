import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TheHeader from "./header/TheHeader";
import { TheFooter } from "./header/TheFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description:
    "Revolutionize E-Commerce with our innovative AI platform! Generate High-quality images, seamless Listing configuration, and automated store uploads for No upfront cost. Seamlessly integrate the latest AI image generation into your channels. Create, Sell, Thrive!",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="h-full"
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
