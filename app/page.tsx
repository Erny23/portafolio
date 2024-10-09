"use client";
import { TypeAnimation } from 'react-type-animation';
import { PiCardsFill } from "react-icons/pi";
import { MdDesignServices, MdOutlineDataArray, MdRule, MdMiscellaneousServices } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { BsDatabaseFillGear } from "react-icons/bs";
import { TbFileDatabase } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";

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
    <main id="home" className="relative z-0 bg-white rounded-none border-y-8 border-white x:rounded-md lg:rounded-s-none lg:h-[35rem] lg:-ms-0.5 lg:w-1/2 lg:p-1.5 lg:overflow-auto lg:-me-20 xl:h-[38rem]">
      <h1 className="px-6 pt-6">¡Hola! Soy Ernesto, programador web de Venezuela, Carabobo, Valencia.</h1>
      <section id="about" className="px-6 pt-6">
        <h1 className="title font-bold text-lg"><span className="text-complementary me-1">Sobre</span>mi</h1>
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
        <h1 className="title font-bold text-lg"><span className="text-complementary me-1">Mis</span>servicios</h1>
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
              Ofrezco diferentes de servicios de desarrollo web, desde sitios web estáticos hasta aplicaciones web complejas,
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
      <section id="pricing" className="p-6 border-t-2">
        <h1 className="title font-bold text-lg"><span className="text-complementary">P</span>recios</h1>
        <div className="block justify-around 2xl:flex 2xl:flex-wrap">
          <div className="mt-5">
            <h5 className="font-semibold">{TitleAnimation(["Front-end", "Diseño de interfaz", "Interacción con el usuario", "Visualización de datos"])}</h5>
            <ul className="list-inside list-none my-3 ms-4">
              <li>
                <MdDesignServices className="size-6 text-complementary" />
                <p className="mx-2">
                  Diseño de interfaz de usuario
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  <span className="text-xs self-start">$</span>
                  50
                </h6>
              </li>
              <li>
                <PiCardsFill className="size-6 text-complementary" />
                <p className="mx-2">
                  Creación de páginas
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  <span className="text-xs self-start">$</span>
                  90
                  <span className="text-xs self-end ms-0.5 mb-0.5">c/u</span>
                </h6>
              </li>
              <li>
                <AiFillProduct className="size-6 text-complementary" />
                <p className="mx-2">
                  Adición de productos al listado
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  <span className="text-xs self-start">$</span>
                  2
                  <span className="text-xs self-end ms-0.5 mb-0.5">c/u</span>
                </h6>
              </li>
              <li>
                <FaShoppingCart className="size-6 text-complementary" />
                <p className="mx-2">
                  Funciones adicionales
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  <span className="text-xs self-start">$</span>
                  20
                  <span className="text-xs self-end ms-0.5 mb-0.5">c/u</span>
                </h6>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <h5 className="font-semibold">{TitleAnimation(["Back-end", "Procesamiento de datos", "Seguridad", ""])}</h5>
            <ul className="list-inside list-none my-3 ms-4">
              <li>
                <MdOutlineDataArray className="size-6 text-complementary" />
                <p className="mx-2">
                  Procesamiento de datos
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  <span className="text-xs self-start">$</span>
                  15
                </h6>
              </li>
              <li>
                <IoMdSettings className="size-6 text-complementary" />
                <p className="mx-2">
                  Gestión de la base de datos
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  <span className="text-xs self-start">$</span>
                  25
                </h6>
              </li>
              <li>
                <MdRule className="size-6 text-complementary" />
                <p className="mx-2">
                  Lógica de negocio
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  Consultar
                </h6>
              </li>
              <li>
                <MdMiscellaneousServices className="size-6 text-complementary" />
                <p className="mx-2">
                  Integración con otros sistemas
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  Consultar
                </h6>
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <h5 className="font-semibold">{TitleAnimation(["Base de datos", "Almacenamiento de datos", "Integración de sistemas", "Seguridad"])}</h5>
            <ul className="list-inside list-none my-3 ms-4">
              <li>
                <FaDatabase className="size-6 text-complementary" />
                <p className="mx-2">
                  Creación de bases de datos
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  <span className="text-xs self-start">$</span>
                  50
                </h6>
              </li>
              <li>
                <BsDatabaseFillGear className="size-6 text-complementary" />
                <p className="mx-2">
                  Edición de estructura de la bases de datos
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  <span className="text-xs self-start">$</span>
                  5
                </h6>
              </li>
              <li>
                <TbFileDatabase className="size-6 text-complementary" />
                <p className="mx-2">
                  Exportar información de la bases de datos a excel
                </p>
                <h6 className="flex flex-row items-stretch font-bold">
                  <span className="text-xs self-start">$</span>
                  5
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*<section id="clients" className="p-6 border-t-2">
        <h1 className="title font-bold text-lg"><span className="text-complementary">C</span>lientes</h1>
      </section>
      <section id="testimonies" className="p-6 border-t-2">
        <h1 className="title font-bold text-lg"><span className="text-complementary">T</span>estimonios</h1>
        <div className='p-8'>
          <p className='font-light italic opacity-[0.65]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, voluptatibus. Incidunt, natus! Voluptatum maiores cumque ducimus aliquam, quas fugit eum, soluta vero commodi, qui ipsum suscipit sit voluptatem recusandae fugiat.
          </p>
        </div>
      </section>*/}
    </main>
  );
}
