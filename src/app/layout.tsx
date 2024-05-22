import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matej Lauko",
  description: "Matej Lauko - product engineer",
  authors: {
    name: "Matej Lauko",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    site: "@matejlauko",
    creator: "@matejlauko",
    card: "summary",
  },
  openGraph: {
    url: "https://lauko.io",
    type: "website",
    title: "Matej Lauko",
    description: "Matej Lauko - product engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
