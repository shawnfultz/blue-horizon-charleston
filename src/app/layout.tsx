import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jen Lee, REALTOR® | Blue Horizon Team | Charleston, SC Real Estate",
  description:
    "Jen Lee is a REALTOR® with Keller Williams Realty Charleston-West Ashley, helping buyers and sellers across Charleston, Mount Pleasant, James Island, West Ashley and the Lowcountry.",
  openGraph: {
    title: "Jen Lee, REALTOR® | Blue Horizon Team, Charleston SC",
    description:
      "Buying or selling in the Lowcountry, with someone in your corner. Jen Lee, Keller Williams Realty Charleston-West Ashley.",
    url: "https://www.bluehorizoncharleston.com",
    siteName: "Blue Horizon Team",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jen Lee, REALTOR® | Blue Horizon Team, Charleston SC",
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
    "Jen Lee realtor",
    "Jen Lee Charleston",
    "Keller Williams Charleston West Ashley",
    "Charleston buyers agent",
    "Daniel Island homes",
    "Sullivan's Island real estate",
    "Folly Beach homes for sale",
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
