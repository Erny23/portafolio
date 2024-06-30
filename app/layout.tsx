import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import SidebarMovil from "./interface/sidebarMobile";
import SidebarComp from "./interface/sidebar";
import CardComp from "./interface/card"
import "./globals.css";
import Info from "./interface/info";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ernesto Fava",
  description: "Portafolio basado en NextJS",
};

export default function RootLayout( {children} : Readonly<{children: React.ReactNode}> ) {
  return (
    <html lang="es">
      <body className={`${monserrat.className}`}>
        <div id="page" className="relative block h-auto w-full h-auto lg:flex lg:h-[100vh] lg:justify-center lg:items-center">
          <div className="relative mx-auto ps-24 pe-8 py-5 top-0 left-0 w-auto h-auto max-w-[700px] max-h-[initial] transition-all lg:my-[8vh] lg:mx-[6vw] lg:px-0 lg:max-w-[1268px] lg:max-h-[674px] lg:w-full lg:h-[84vh]">
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
