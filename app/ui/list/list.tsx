"use client";
import React from 'react';
import data from "../../assets/data.json";

const List = () => {

    const [ selected, setSelected ] = React.useState("all");

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
            <section className="flex justify-center">
                <div className="flex flex-wrap gap-10 w-11/12">
                    {data.map((item, index) => {
                        if (selected === "all" || item.category === selected) {
                            return (
                                <div key={index}>
                                    <img src={item.img} alt={item.title} className="w-1/2" />
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
            </section>
        </>
    )
}

export default List
