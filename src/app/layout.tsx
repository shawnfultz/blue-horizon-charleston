import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Horizon Team | Charleston, SC Real Estate — Coming Soon",
  description:
    "Experience the Lowcountry lifestyle with the Blue Horizon Team. Discover luxury homes, historic estates, and waterfront living in Charleston, SC. Coming soon.",
  openGraph: {
    title: "Blue Horizon Team | Charleston, SC Real Estate",
    description:
      "Discover luxury homes, historic estates, and waterfront living in Charleston, SC with the Blue Horizon Team.",
    url: "https://bluehorizoncharleston.com",
    siteName: "Blue Horizon Team",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Horizon Team | Charleston, SC Real Estate",
    description:
      "Discover luxury homes, historic estates, and waterfront living in Charleston, SC.",
  },
  keywords: [
    "Charleston SC real estate",
    "Charleston real estate team",
    "Blue Horizon Team",
    "Charleston homes for sale",
    "Lowcountry real estate",
    "Mount Pleasant homes",
    "James Island real estate",
    "West Ashley homes",
    "relocating to Charleston SC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
