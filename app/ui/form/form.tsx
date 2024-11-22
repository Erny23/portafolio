import React from 'react'

const Form = () => {
  return (
    <>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31413.787187222537!2d-68.06666639647742!3d10.203102922831164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d9d4dca5bdd%3A0xe05625e27cb4b1cd!2sParroquia%20Urbana%20San%20Jos%C3%A9%2C%20Valencia%2C%20Carabobo!5e0!3m2!1ses!2sve!4v1732140932086!5m2!1ses!2sve" 
        width="450" 
        height="250" 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <br />
        <p className='text-center'>Valencia, Carabobo, Venezuela</p>
        <br />
        <form className="flex flex-wrap">
            <label className="w-1/2">Nombre:
                <input className="w-1/2 border-2 ms-1" type="text" />
            </label>
            <label className="w-1/2">Apellido:
                <input className="w-1/2 border-2 ms-1" type="text" />
            </label>
            <label className="w-1/2">Correo:
                <input className="w-1/2 border-2 ms-1" type="email" />
            </label>
            <label className="w-1/2">Telefono:
                <input className="w-1/2 border-2 ms-1" type="tel" />
            </label>
            <label className="w-full">Mensaje:
                <textarea className="w-full border-2 ms-1" />
            </label>
            <button className="w-full bg-complementary text-white p-2">Enviar</button>
        </form>
    </>
  )
}

export default Form