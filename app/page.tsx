"use client";
import { TypeAnimation } from 'react-type-animation';
//import { PiCardsFill } from "react-icons/pi";
//import { MdDesignServices, MdOutlineDataArray, MdRule, MdMiscellaneousServices } from "react-icons/md";
//import { AiFillProduct } from "react-icons/ai";
//import { FaShoppingCart } from "react-icons/fa";
//import { FaDatabase } from "react-icons/fa6";
//import { BsDatabaseFillGear } from "react-icons/bs";
//import { TbFileDatabase } from "react-icons/tb";
//import { IoMdSettings } from "react-icons/io";
import styles from "./styles/page.module.css";

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
    <div className={`${styles.page} relative z-0 rounded-none bg-white border-y-8 border-white w-full h-full md:rounded-md lg:overflow-y-auto lg:rounded-s-none`}>
      <h2 className="px-6 pt-6">¡Hola! Soy Ernesto, programador web de Venezuela, Carabobo, Valencia.</h2>
      <section id="about" className="px-6 pt-6">
        <h1 className="title"><span className="text-complementary me-1">Sobre</span>mi</h1>
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
        <h1 className="title"><span className="text-complementary me-1">Mis</span>servicios</h1>
        <div className="mt-5 flex flex-row gap-3 divide-x-2">
          <div className="w-1/2">
            <h5 className="font-semibold">{TitleAnimation(["Diseño personalizado", "Responsivo", "Optimizado", ""])}</h5>
            <p>
              Proyecto adaptado a tus necesitdades, suministro diferentes opciones de diseño de internet y personalizo
              según las necesidades que tengas para tu negocio.
            </p>
          </div>
          <div className="w-1/2 ps-3">
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
            <h5 className="font-semibold">{TitleAnimation(["Tienda online", "Blog personal", "Landing page", ""])}</h5>
            <p>
              Ofrezco diferentes servicios de desarrollo web, desde sitios web estáticos hasta aplicaciones web complejas,
              adaptados a las necesidades específicas de tu negocio.
            </p>
          </div>
          <div className="w-1/2 ps-3">
            <div className="w-full py-2"></div>
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
