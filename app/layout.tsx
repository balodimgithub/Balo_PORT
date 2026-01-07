"use client"
import { Geist,  } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content ="#4ade80"/>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        {children}
      </body>
     
    </html>
  );
}
