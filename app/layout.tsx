import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import * as components from "./components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ernesto Fava",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased block justify-center items-center x:container x:mx-auto x:grid x:gap-3 x:py-8 lg:gap-0 lg:h-screen lg:flex`} >

        <nav className="relative z-10">
          <components.navbar />
          <components.cardProfile />
        </nav>

        {children}

        <div className="cube absolute left-0 size-24" style={{animationDelay: "2s"}}></div>

      </body>
    </html>
  );
}
