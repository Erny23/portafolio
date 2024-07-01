import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SidebarMovil from "./interface/sidebarMobile";
import SidebarComp from "./interface/sidebar";
import CardComp from "./interface/card"
import Info from "./interface/info";
import "./globals.css";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ernesto Fava",
  description: "Portafolio basado en NextJS",
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/x-icon",
      sizes: "16x16",
      rel: "icon",
    },
  },
};

export default function RootLayout( {children} : Readonly<{children: React.ReactNode}> ) {
  return (
    <html lang="es">
      <body className={`${monserrat.className}`}>
        <div id="page" className="relative block h-auto w-full h-auto lg:flex lg:h-[100vh] lg:justify-center lg:items-center">
          <div className="relative container mx-auto py-[5.28rem] top-0 left-0 w-auto h-auto max-w-[25rem] max-h-[initial] transition-all xs:py-5 xs:max-w-[44rem] xs:ps-24 xs:pe-8 xs:py-5 lg:my-[8vh] lg:mx-[6vw] lg:px-0 lg:max-w-[1268px] lg:max-h-[674px] lg:w-full lg:h-[84vh]">
            <header>
              <SidebarMovil />
              <SidebarComp />
            </header>
            <main>
              <section id="profileCard" className="relative float-none w-auto h-auto lg:w-[28rem] lg:h-full lg:float-left">
                <CardComp />
              </section>
              <Info>
                {children}
              </Info>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
