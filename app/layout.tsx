import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Canbo Tech | Custom Software for Zimbabwean Businesses",
  description:
    "We replace messy spreadsheets and lost tools with automated, mobile-friendly web apps. Built by NUST experts.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}