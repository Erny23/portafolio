"use client";
import { TypeAnimation } from 'react-type-animation';
import styles from "./styles/page.module.css";
import * as index from "./ui/index";

export default function Home() {

  const TitleAnimation = (props: (string | number | ((element: HTMLElement | null) => void | Promise<void>))[]) => {

    if (props[3] !== "") {
      return (
        <>
          <TypeAnimation
            sequence={[
              props[0],
              3000,
              props[1],
              3000,
              props[2],
              3000,
              props[3],
              3000,
            ]}
            speed={50}
            style={{ fontSize: '1em', fontWeight: "bolder" }}
            repeat={Infinity}
          />
        </>
      )
    } else if (props[2] !== "") {
      return (
        <>
          <TypeAnimation
            sequence={[
              props[0],
              3000,
              props[1],
              3000,
              props[2],
              3000,
            ]}
            speed={50}
            style={{ fontSize: '1em', fontWeight: "bolder" }}
            repeat={Infinity}
          />
        </>
      )
    } else {
      return (
        <>
          <TypeAnimation
            sequence={[
              props[0],
              3000,
              props[1],
              3000,
            ]}
            speed={50}
            style={{ fontSize: '1em', fontWeight: "bolder" }}
            repeat={Infinity}
          />
        </>
      )
    }
  }

  return (
    <div className={`${styles.page}`}>
      <h2 className="px-6 pt-6">¡Hola! Soy Ernesto, un programador web con experiencia en la creación de sitios web.</h2>
      <section id="about" className="px-6 pt-6">
        <h1 className="title"><span>Sobre</span>mi</h1>
        <p className="mt-2">
          En 2020, me encontraba trabajando como analista de marketing cuando me sumergí en el mundo de la programación,
          enfocándome en el desarrollo web. He realizado proyectos para poner en práctica mis conocimientos y crear
          experiencias web interactivas y escalables. Además, me apasiona compartir lo que aprendo,
          por lo que creo contenido para ayudar a otros a crecer en este campo.
        </p>
        <p className="mt-2">
          Mi objetivo profesional es convertirme en un desarrollador full-stack, capaz de crear soluciones
          innovadoras y eficientes para los usuarios. Estoy constantemente buscando nuevas
          tecnologías y formas de mejorar mis habilidades.
        </p>
      </section>
      <br />
      <section id="services" className="p-6 border-t-2">
        <h1 className="title"><span>Mis</span>servicios</h1>
        <div className="mt-5 flex flex-row gap-3 divide-x-2">
          <div className="w-1/2">
            <index.icons.FaHtml5 className="w-full h-16 text-complementary mb-3 md:h-20" />
            <h5 className="font-semibold">{TitleAnimation(["Diseño personalizado", "Responsivo", "Optimizado", ""])}</h5>
            <p>
              Proyecto adaptado a tus necesitdades, suministro diferentes opciones de diseño de internet y personalizo
              según las necesidades que tengas para tu negocio.
            </p>
          </div>
          <div className="w-1/2 ps-3">
            <index.icons.BsDatabaseFillGear className="w-full h-16 text-complementary mb-3 md:h-20" />
            <h5 className="font-semibold">{TitleAnimation(["Seguridad", "Hosting", "Bases de datos", ""])}</h5>
            <p>
              Te ayudo a mantener tu sitio web seguro, administro bases de datos y configuro servidores con
              diferentes tecnicas de renderizado.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between mt-4 pb-3">
          <div className="w-[45%] ms-2 h-1 border-t-2"></div>
          <div className="w-[45%] h-1 border-t-2"></div>
        </div>
        <div className="flex flex-row gap-3 divide-x-2">
          <div className="w-1/2">
            <div className="w-full py-2"></div>
            <index.icons.BiSolidWindowAlt className="w-full h-16 text-complementary mb-3 md:h-20" />
            <h5 className="font-semibold">{TitleAnimation(["Tienda online", "Blog personal", "Landing page", ""])}</h5>
            <p>
              Ofrezco diferentes servicios de desarrollo web, desde sitios web estáticos hasta aplicaciones web complejas,
              adaptados a las necesidades específicas de tu negocio.
            </p>
          </div>
          <div className="w-1/2 ps-3">
            <div className="w-full py-2"></div>
            <index.icons.TbAdjustmentsCode className="w-full h-16 text-complementary mb-3 md:h-20" />
            <h5 className="font-semibold">{TitleAnimation(["Mantenimiento", "Ajustes de diseño", "Corrección de errores", ""])}</h5>
            <p>
              Te ofrezco un servicio completo de mantenimiento y soporte para garantizar que tu proyecto funcione
              sin problemas y de manera eficiente en todo momento.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
