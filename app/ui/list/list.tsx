"use client";
import React from 'react';

const List = () => {

    const [ selected, setSelected ] = React.useState("all");

    return (
        <>
            <section className="flex justify-between px-6 py-6">
                <h1 className="title font-bold text-lg"><span className="text-complementary me-1">Trabajos</span>recientes</h1>
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
            <section className="flex justify-center px-6 w-full">
                {selected === "all" ? (
                    <div className="flex flex-wrap gap-3">
                        <div className="w-52 h-80 bg-foreground rounded-lg text-white"></div>
                        <div className="w-52 h-52 bg-foreground rounded-lg text-white"></div>
                        <div className="w-52 h-40 bg-foreground rounded-lg text-white"></div>
                    </div>
                ) : (
                    <div className="flex flex-wrap gap-3">
                        <div className={`${selected === "videos" ? "block" : "hidden"} w-52 h-80 bg-foreground rounded-lg text-white`}></div>
                        <div className={`${selected === "photos" ? "block" : "hidden"} w-52 h-52 bg-foreground rounded-lg text-white`}></div>
                        <div className={`${selected === "others" ? "block" : "hidden"} w-52 h-40 bg-foreground rounded-lg text-white`}></div>
                    </div>
                )}
            </section>
        </>
    )
}

export default List
