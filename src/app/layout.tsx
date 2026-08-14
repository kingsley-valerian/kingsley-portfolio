import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
