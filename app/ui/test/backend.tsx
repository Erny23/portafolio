"use client";
import React from "react";

type Props = {
    success: boolean,
    status: number,
    message: string,
    data: string
}

type Props2 = {
    message: string
}

const Backend = () => {

    //const backend = "http://localhost:3001";
    const backend = "https://server.ernestodev.com";

    const [ data, setData ] = React.useState<Props | null>(null);
    const [ data2, setData2 ] = React.useState<Props2 | null>(null);
    const [ data3, setData3 ] = React.useState<boolean>(false);
    //const [ data4, setData4 ] = React.useState<Props2 | null>(null);
    const formRequest = {
        message: "Hello from the frontend"
    };
    /*const mailRequest = {
        message: "Esto es una prueba de mailing"
    };*/

    const conectionRequest = async() => {
        try {
            const response = await fetch(`${backend}`); // Solicitud a la ruta base
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json(); // Suponiendo que la respuesta es JSON
            setData(data); // Manejar los datos recibidos
        } catch (error) {
            console.error('Hubo un problema con la solicitud fetch:', error);
        }
    };

    const dataRequest = async () => {
        try {
            const response = await fetch(`${backend}/testdata`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formRequest),
            });
    
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
    
            const result = await response.json();
            setData2(result);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    const smtpRequest = async() => {
        try {
            const response = await fetch(`${backend}/smtp`); // Solicitud a la ruta base
            const data = await response.json(); // Suponiendo que la respuesta es JSON
            setData3(data); // Manejar los datos recibidos
        } catch (error) {
            console.error('Hubo un problema con la solicitud fetch:', error);
        }
    };

    /*const sendRequest = async () => {
        try {
            const response = await fetch(`${backend}/testsend`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mailRequest),
            });
    
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            };
    
            const result = await response.json();
            setData4(result);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };*/

    React.useEffect(() => {
        conectionRequest();
        dataRequest();
        smtpRequest();
        //sendRequest();
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
                <li>
                    Mode: {data?.data}
                </li>
            </ul>
            <br />
            <h1>Data transfer</h1>
            <ul className="ps-3">
                <li>
                    Message: {data2?.message ? data2?.message : "No message"}
                </li>
            </ul>
            <br />
            <h1>SMTP connection</h1>
            <ul className="ps-3">
                <li className="flex flex-row">
                    Message: {data3 ? (
                            <p className="text-complementary">true</p>
                        ) : (
                            <p className="text-red-600 ps-1">false</p>
                        )
                    } 
                </li>
            </ul>
            {/*<br />
            <h1>Send email</h1>
            <ul className="ps-3">
                <li>
                    Message: {data4?.message ? data4?.message : "No send message"}
                </li>
            </ul>*/}
        </div>
    )
}

export default Backend