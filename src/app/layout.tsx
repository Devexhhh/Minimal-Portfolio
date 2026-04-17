import type { Metadata } from "next";
import { GeistPixelGrid } from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sujal Kumar — Portfolio",
  description: "Student developer working on web, blockchain & data projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-pixel-custom: ${GeistPixelGrid.style.fontFamily};
            --font-sans-custom: ${GeistSans.style.fontFamily};
          }
        `}</style>
      </head>
      {/* Apply the Tailwind font-sans utility globally */}
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}