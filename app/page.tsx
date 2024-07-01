import Image from 'next/image';
import { HiBattery100, HiBattery50  } from "react-icons/hi2";
import voltinela from "../public/voltinela-logo2-01.png"

export default function Home() {
  return (
    <div>
      <div className="pb-3 border-b">
        <h1 className="title text-xl text-[#323232] font-bold">
          <span className="text-[#4c7753]">Sobre</span> mi
        </h1>
      </div>
      <div className="mt-5 text-[#646464]">
        <p>
          <strong>Lorem ipsum dolor sit</strong>, amet consectetur adipisicing elit. Cum, suscipit laborum odio aspernatur praesentium, delectus nam, sapiente nobis maiores labore quos minus dignissimos numquam molestias tenetur eius natus. Beatae, at.
        </p>
      </div>
      <br />
      <div>
        <ul className="text-[#646464] text-base font-light">
          <li>
            <strong>Edad . . . . .</strong> 24
          </li>
          <li>
            <strong>Residencia . . . . .</strong> Venezuela
          </li>
          <li>
            <strong>Ocupación . . . . .</strong> Freelancer
          </li>
          <li>
            <strong>Dirección . . . . .</strong> Carabobo, Valencia
          </li>
        </ul>
      </div>
      <br />
      <div>
        <div className="pb-3">
          <h2 className="title text-xl text-[#323232] font-bold">
            <span className="text-[#4c7753]">Mis</span> servicios
          </h2>
        </div>
        <div id="servicios" className="border-t">
          <div className="w-[50%] p-5 inline-block">
            <h5 className="font-semibold">Front-end</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
          <div className="w-[50%] p-5 inline-block">
            <h5 className="font-semibold">Back-end</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
          <div className="w-[50%] p-5 inline-block">
            <h5 className="font-semibold">WordPress</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
          <div className="w-[50%] p-5 inline-block">
            <h5 className="font-semibold">WordPress Security</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="pb-3">
          <h2 className="title text-xl text-[#323232] font-bold">
            <span className="text-[#4c7753]">P</span>ricing
          </h2>
        </div>
        <div id="precios" className="border-t">
          <div className="w-1/2 p-5 inline-block text-center">
            <HiBattery50 className="w-full text-4xl" color="#4c7753" />
            <p className="text-[#323232] font-semibold">Basic</p>
            <br />
            <h5 className="text-base text-[#646464]">
              <span className="text-sm text-[#323232] font-normal align-top">$</span>
              <span className="text-5xl text-[#323232] font-medium">22</span> hour
            </h5>
            <br />
            <ul className="text-[#646464]">
              <li>Desarrollo de proyecto</li>
              <br />
              <li>Servicio de instalación</li>
              <br />
              <li>Auditoría SEO</li>
              <br />
              <li className="line-through opacity-[0.6]">Alojamiento y dominio</li>
              <br />
              <li className="line-through opacity-[0.6]">Mantenimiento y seguridad</li>
            </ul>
          </div>
          <div className="w-1/2 p-5 inline-block text-center">
            <HiBattery100 className="w-full text-4xl" color="#4c7753" />
            <p className="text-[#323232] font-semibold">Pro</p>
            <br />
            <h5 className="text-base text-[#646464]">
              <span className="text-sm text-[#323232] font-normal align-top">$</span>
              <span className="text-5xl text-[#323232] font-medium">28</span> hour
            </h5>
            <br />
            <ul className="text-[#646464]">
              <li>Desarrollo de proyecto</li>
              <br />
              <li>Servicio de instalación</li>
              <br />
              <li>Auditoría SEO</li>
              <br />
              <li>Alojamiento y dominio</li>
              <br />
              <li>Mantenimiento y seguridad</li>
            </ul>
          </div>
        </div>
        <br />
        <div>
          <div className="pb-3">
            <h2 className="title text-xl text-[#323232] font-bold">
              <span className="text-[#4c7753]">C</span>lientes
            </h2>
          </div>
          <div id="precios" className="border-t">
            <div className='p-8'>
              <Image className='size-24 opacity-[0.4] transition duration-300 hover:opacity-100' src={voltinela} alt="Voltinela" />
            </div>
          </div>
        </div>
        <br />
        <div>
          <div className="pb-3">
            <h2 className="title text-xl text-[#323232] font-bold">
              <span className="text-[#4c7753]">T</span>estimonios
            </h2>
          </div>
          <div id="testimonios" className="border-t">
            <div className='p-8'>
              <p className='font-light italic opacity-[0.65]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, voluptatibus. Incidunt, natus! Voluptatum maiores cumque ducimus aliquam, quas fugit eum, soluta vero commodi, qui ipsum suscipit sit voluptatem recusandae fugiat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
