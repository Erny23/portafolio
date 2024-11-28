"use client";
import React from 'react';
import style from "../../styles/list.module.css";

const List = () => {

    const [selected, setSelected] = React.useState<string>("all");
    
    return (
        <>
            <section className="flex justify-between px-6 py-6">
                <h1 className="title flex flex-wrap font-bold text-lg"><span className="text-complementary me-1">Trabajos</span><span>recientes</span></h1>
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
                <div className="grid grid-rows-6 grid-cols-2 gap-10">
                    <div className={`${selected === "photos" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-1`}>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute top-0" src="/pcAmazing.jpg" alt="pcAmazing" />
                    </div>
                    <div className={`${selected === "videos" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-2`}>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute top-0" src="/pcAmazing2.jpg" alt="pcAmazing2" />
                    </div>
                    <div className={`${selected === "others" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-3`}>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute top-0" src="/pcAmazing3.jpg" alt="pcAmazing3" />
                    </div>
                    <div className={`${selected === "photos" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-1`}>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute top-0" src="/bloque-1.jpg" alt="pcAmazing" />
                    </div>
                    <div className={`${selected === "videos" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-2`}>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute top-0" src="/bloque-2.jpg" alt="pcAmazing2" />
                    </div>
                    <div className={`${selected === "others" || selected === "all" ? `${style.block}` : `${style.hidden}`} row-span-3`}>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img className="absolute top-0" src="/bloque-3.jpg" alt="pcAmazing3" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default List
