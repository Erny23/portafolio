"use client";
import React from "react";

type Props = {
    success: boolean,
    status: number,
    message: string
}

const Backend = () => {

    const [ data, setData ] = React.useState<Props | null>(null);

    const request = async() => {
        try {
            const response = await fetch('https://server.ernestodev.com'); // Solicitud a la ruta base
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json(); // Suponiendo que la respuesta es JSON
            //console.log(data);
            setData(data); // Manejar los datos recibidos
        } catch (error) {
            console.error('Hubo un problema con la solicitud fetch:', error);
        }
    };

    React.useEffect(() => {
        request();
    }, []);

    return (
        <div>
            <h1>Backend connection:</h1>
            <ul className="ps-3">
                <li>
                    Conection:
                        {data?.success === true ? (
                            <span className="text-complementary">success</span>
                        ) : (
                            <span className="text-red-600">failed</span>
                        )}
                </li>
                <li>
                    Status:
                        {data?.status === 200 ? (
                            <span className="text-complementary">{data?.status}</span>
                        ) : (
                            <span className="text-yellow-300">{data?.status}</span>
                        )}
                </li>
                <li>
                    Message: {data?.message}
                </li>
            </ul>
        </div>
    )
}

export default Backend