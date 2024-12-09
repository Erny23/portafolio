"use client";
import React from "react"

const Form = () => {

    const [form, setForm] = React.useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    });

    const [resMessage, setResMessage] = React.useState("");

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Evita que la página se recargue

        try {
            const response = await fetch('https://server.ernestodev.com/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const result = await response.json();
            setResMessage(result.message);
            console.log(resMessage);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setResMessage('Error al enviar el correo');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                        Nombre
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={form.firstName}
                            onChange={handleChange}
                            autoComplete="First name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                        Apellido
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={form.lastName}
                            onChange={handleChange}
                            autoComplete="Last name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                        Empresa
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="company"
                            name="company"
                            type="text"
                            value={form.company}
                            onChange={handleChange}
                            autoComplete="Company name"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                        Correo
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            autoComplete="Email address"
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="Phone number" className="block text-sm/6 font-semibold text-gray-900">
                        Teléfono
                    </label>
                    <div className="mt-2.5">
                        <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
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
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+0 123-456-7890"
                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                        Mensaje
                    </label>
                    <div className="mt-2.5">
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
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
                    Let&apos;s talk
                </button>
            </div>
        </form>
    )
}

export default Form
