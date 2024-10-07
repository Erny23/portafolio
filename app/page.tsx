import { HiBattery100, HiBattery50 } from "react-icons/hi2";

export default function Home() {
  return (
    <>
      <section id="about" className="px-6 pt-6">
        <h1 className="title font-bold text-lg"><span className="text-complementary me-1">Sobre</span>mi</h1>
        <p className="mt-2">
          <strong>Lorem ipsum dolor sit</strong>, amet consectetur adipisicing elit. Cum, suscipit laborum odio aspernatur praesentium, delectus nam, sapiente nobis maiores labore quos minus dignissimos numquam molestias tenetur eius natus. Beatae, at.
        </p>
        <ul className="mt-5">
          <li>
            <strong>Edad . . . . .</strong> <p className="font-light text-textAlt">24</p>
          </li>
          <li>
            <strong>Residencia . . . . .</strong> <p className="font-light text-textAlt">Venezuela</p>
          </li>
          <li>
            <strong>Ocupación . . . . .</strong> <p className="font-light text-textAlt">Freelancer</p>
          </li>
          <li>
            <strong>Dirección . . . . .</strong> <p className="font-light text-textAlt">Carabobo, Valencia</p>
          </li>
        </ul>
      </section>
      <br />
      <section id="services" className="p-6 border-t-2">
        <h1 className="title font-bold text-lg"><span className="text-complementary me-1">Mis</span>servicios</h1>
        <div className="mt-5 flex flex-row gap-3 divide-x-2">
          <div className="">
            <h5 className="font-semibold">Front-end</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
          <div className="ps-3">
            <h5 className="font-semibold">Back-end</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
        </div>
        <div className="mt-6 flex flex-row gap-3">
          <div>
            <div className="w-full border-t-2 py-2"></div>
            <h5 className="font-semibold">WordPress</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
          <div className="mt-5 h-44 border-s-2"></div>
          <div>
            <div className="w-full border-t-2 py-2"></div>
            <h5 className="font-semibold">WordPress Security</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
        </div>
      </section>
      <section id="pricing" className="p-6 border-t-2">
        <h1 className="title font-bold text-lg"><span className="text-complementary">P</span>recios</h1>
        <div>
          <div className="w-1/2 p-5 inline-block text-center">
            <HiBattery50 className="w-full text-4xl" color="#4c7753" />
            <p className="text-[#323232] font-semibold">Basic</p>
            <br />
            <h5 className="text-base text-textAlt">
              <span className="text-sm text-[#323232] font-normal align-top">$</span>
              <span className="text-5xl text-[#323232] font-medium">22</span> hour
            </h5>
            <br />
            <ul className="text-textAlt">
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
            <h5 className="text-base text-textAlt">
              <span className="text-sm text-[#323232] font-normal align-top">$</span>
              <span className="text-5xl text-[#323232] font-medium">28</span> hour
            </h5>
            <br />
            <ul className="text-textAlt">
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
      </section>
      <section id="clients" className="p-6 border-t-2">
        <h1 className="title font-bold text-lg"><span className="text-complementary">C</span>lientes</h1>
      </section>
      <section id="testimonies" className="p-6 border-t-2">
        <h1 className="title font-bold text-lg"><span className="text-complementary">T</span>estimonios</h1>
        <div className='p-8'>
          <p className='font-light italic opacity-[0.65]'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, voluptatibus. Incidunt, natus! Voluptatum maiores cumque ducimus aliquam, quas fugit eum, soluta vero commodi, qui ipsum suscipit sit voluptatem recusandae fugiat.
          </p>
        </div>
      </section>
    </>
  );
}
