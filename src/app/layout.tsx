import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kingsley Valerian | Virtual Assistant",
  description:
    "Kingsley Valerian is a Virtual Assistant providing administrative support, customer support, CRM organization, and digital workflow assistance for businesses and remote teams.",
  keywords: [
    "Kingsley Valerian",
    "Virtual Assistant",
    "Executive Assistant",
    "Administrative Assistant",
    "Customer Support",
    "CRM",
    "Airtable",
    "Freshdesk",
    "Remote Virtual Assistant",
  ],
  authors: [{ name: "Kingsley Valerian" }],
  creator: "Kingsley Valerian",
  openGraph: {
    title: "Kingsley Valerian | Virtual Assistant",
    description:
      "Virtual Assistant providing administrative support, customer support, CRM organization, and digital workflow assistance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}