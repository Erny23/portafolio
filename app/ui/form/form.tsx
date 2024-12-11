"use client";
import React from "react";
import style from "../../styles/form.module.css";

export default function Example() {

    const api = "https://server.ernestodev.com"

    const [data, setData] = React.useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    });

    const [resMessage, setResMessage] = React.useState<string | null>(null);
    const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        const { firstName, lastName, email, phone } = data;

        // Validar nombre
        if (!/^[a-zA-Z]+$/.test(firstName)) {
            newErrors.firstName = "El nombre solo puede contener letras.";
        }

        // Validar apellido
        if (!/^[a-zA-Z]+$/.test(lastName)) {
            newErrors.lastName = "El apellido solo puede contener letras.";
        }

        // Validar correo
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "El correo no tiene un formato válido.";
        }

        // Validar teléfono
        if (!/^.{7,14}$/.test(phone)) {
            newErrors.phone = "El teléfono debe tener el formato +(código de país) seguido del número correspondiente.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault(); // Evita que la página se recargue

        if (!validate()) { // Validación
            return console.log(errors);
        } else {
            try {

                // Manejo de la solicitud
                const response = await fetch(`${api}/send`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                // Manejo de la respuesta
                if (!response.ok) {
                    const errorData = await response.json();
                    // Aquí puedes manejar errores específicos del servidor
                    throw new Error(errorData.message || 'Error en la respuesta del servidor');
                }

                const result = await response.json();
                setResMessage(result.message);

                // Reinicio del formulario
                setData({
                    firstName: "",
                    lastName: "",
                    company: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setErrors({});

                // Redireccionamiento a página de confirmación
                window.location.href = '/contact/success';

            } catch (error) {
                // Manejo de errores
                console.error("Error al enviar el formulario:", error);
                setResMessage("Error al enviar el correo");
            }
        }
    };

    React.useEffect(() => {
        if (resMessage) {
            console.log(resMessage);
        }
    }, [resMessage]);

    return (
        <div className="isolate">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31413.787187222537!2d-68.06666639647742!3d10.203102922831164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d9d4dca5bdd%3A0xe05625e27cb4b1cd!2sParroquia%20Urbana%20San%20Jos%C3%A9%2C%20Valencia%2C%20Carabobo!5e0!3m2!1ses!2sve!4v1732140932086!5m2!1ses!2sve"
                width="100%"
                height="250"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <form id="contactForm" className="mx-auto mt-8 max-w-xl" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className={`${style.field}`}>
                        <label htmlFor="first-name">
                            Nombre
                        </label>
                        <div>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={data.firstName}
                                onChange={handleChange}
                                autoComplete="First name"
                                required
                            />
                        </div>
                        {errors.firstName && <span>{errors.firstName}</span>}
                    </div>
                    <div className={`${style.field}`}>
                        <label htmlFor="last-name">
                            Apellido
                        </label>
                        <div>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={data.lastName}
                                onChange={handleChange}
                                autoComplete="Last name"
                                required
                            />
                        </div>
                        {errors.lastName && <span>{errors.lastName}</span>}
                    </div>
                    <div className={`${style.field} sm:col-span-2`}>
                        <label htmlFor="company">
                            Empresa
                        </label>
                        <div>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                value={data.company}
                                onChange={handleChange}
                                autoComplete="Company name"
                                required
                            />
                        </div>
                        {errors.company && <span>{errors.company}</span>}
                    </div>
                    <div className={`${style.field} sm:col-span-2`}>
                        <label htmlFor="email">
                            Correo
                        </label>
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                onChange={handleChange}
                                autoComplete="Email address"
                                required
                            />
                        </div>
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                            Teléfono
                        </label>
                        <div className="mt-2.5">
                            <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-complementary">
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                    {/*<select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            aria-label="Country"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                    </select>*/}
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="number"
                                    value={data.phone}
                                    onChange={handleChange}
                                    placeholder="+01234567890"
                                    required
                                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                                />
                            </div>
                            {errors.phone && <span className="text-sm text-red-600">{errors.phone}</span>}
                        </div>
                    </div>
                    <div className={`${style.field} sm:col-span-2`}>
                        <label htmlFor="message">
                            Mensaje
                        </label>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                value={data.message}
                                onChange={handleChange}
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-complementary sm:text-sm/6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-complementary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Enviar
                    </button>
                    {resMessage === "Error al enviar el correo" && <span className="text-sm text-green-600">{resMessage}</span>}
                </div>
            </form>
        </div>
    )
}
