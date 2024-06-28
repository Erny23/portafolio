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
        <div id="page" className="block md:flex">
          <div className="container mx-auto px-4 flex flex-row lg:px-12">
            <header className="me-2 z-30">
              <SidebarMovil />
              <SidebarComp />
            </header>
            <main className="w-full my-5 mt-[6rem] xs:mt-5">
              <div className="grid grid-cols-1 gap-4 justify-center md:gap-0 md:grid-cols-2 xl:grid-cols-[28rem_minmax(0rem,_1fr)_0rem]">
                <section id="profileCard" className="relative float-left h-fit">
                  <CardComp />
                </section>
                <Info>
                  {children}
                </Info>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
