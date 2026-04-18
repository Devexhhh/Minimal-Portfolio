import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kumar Sujal — Portfolio",
  description: "Student developer working on web, blockchain & data projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistMono.variable} ${GeistPixelSquare.variable}`}>
      <body>{children}</body>
    </html>
  );
}