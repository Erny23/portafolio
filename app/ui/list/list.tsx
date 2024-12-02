"use client";
import React from 'react';
import style from "../../styles/list.module.css";
import Modal from "../modal/modal";

const List = () => {

    const [selected, setSelected] = React.useState<string>("all");
    
    return (
        <>
            <section className="flex flex-col justify-center items-center px-6 py-3 sm:flex-row sm:justify-between sm:py-6">
                <h1 className="title font-bold text-lg">
                    <span className="text-complementary me-1">Trabajos</span>
                    <span>recientes</span>
                </h1>
                <ul className="flex gap-3">
                    <li>
                        <button className={`${selected === "all" ? "text-complementary font-semibold" : null}`} onClick={() => setSelected("all")}>Todo</button>
                    </li>
                    <li>
                        <button className={`${selected === "videos" ? "text-complementary font-semibold" : null}`} onClick={() => setSelected("videos")}>Vídeos</button>
                    </li>
                    <li>
                        <button className={`${selected === "photos" ? "text-complementary font-semibold" : null}`} onClick={() => setSelected("photos")}>Fotos</button>
                    </li>
                    <li>
                        <button className={`${selected === "others" ? "text-complementary font-semibold" : null}`} onClick={() => setSelected("others")}>Otros</button>
                    </li>
                </ul>
            </section>
            <div className="mb-5 w-full h-1 border-t-2"></div>
            <section className="container mx-auto px-4">
                <div className="grid grid-rows-5 grid-cols-2 gap-10">
                    <div className={`${selected === "photos" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-1`}>
                        <div className={`${style.small}`}>
                            <Modal src={"/portafolio1.jpg"} type={"photo"} />
                        </div>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute top-0 z-0" src="/portafolio1.jpg" alt="pcAmazing" />
                    </div>
                    <div className={`${selected === "videos" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-2`}>
                        <div className={`absolute inset-0 z-10 ${style.med}`}>
                            <Modal src={"/portfolio1.webm"} type={"video"} />
                        </div>
                        <div className={`absolute top-0 overflow-hidden ${style.med}`}>
                            <video autoPlay loop muted>
                                <source src="/portfolio1.webm" type="video/webm" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                    </div>
                    <div className={`${selected === "photos" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-1`}>
                        <div className={`${style.small}`}>
                            <Modal src={"/pcAmazing.jpg"} type={"photo"} />
                        </div>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute inset-0" src="/pcAmazing.jpg" alt="pcAmazing" />
                    </div>
                    <div className={`${selected === "videos" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-2`}>
                        <div className={`absolute inset-0 z-10 ${style.med}`}>
                            <Modal src={"/pcAmazing2.jpg"} type={"photo"} />
                        </div>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute top-0" src="/pcAmazing2.jpg" alt="pcAmazing2" />
                    </div>
                    <div className={`${selected === "others" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-3`}>
                        <div className={`absolute inset-0 z-10 ${style.large}`}>
                            <Modal src={"/pcAmazing3.jpg"} type={"photo"} />
                        </div>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute top-0" src="/pcAmazing3.jpg" alt="pcAmazing3" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default List
