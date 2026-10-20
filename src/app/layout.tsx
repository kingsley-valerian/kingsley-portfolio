
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kingsley Valerian | Full-Stack Developer & IT Support",
  description:
    "Portfolio of Kingsley Valerian, showcasing full-stack web development, backend integrations, web applications, IT support, and digital projects.",
  applicationName: "Kingsley Valerian Portfolio",
  keywords: [
    "Kingsley Valerian",
    "Full-Stack Developer",
    "Junior Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "IT Support",
    "Web Development Portfolio",
  ],
  openGraph: {
    title: "Kingsley Valerian | Full-Stack Developer",
    description:
      "Explore web applications, business websites, and digital projects by Kingsley Valerian.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
