import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import icon from "@/public/favicon.png";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basic Tube",
  description: "An basic Youtube video searching platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {" "}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {/* <HeaderSideNav /> */}
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
