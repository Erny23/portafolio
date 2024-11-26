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
            <section className="">
                <div className="">
                    {data.map((item, index) => {
                        if (selected === "all" || item.category === selected) {
                            return (
                                <div className="relative h-48 w-48 xl:w-[14.2rem] 2xl:w-72 3xl:w-[23.5rem]" key={index}>
                                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                                    <img src={item.img} alt={item.title} className="absolute top-0 left-0 right-0" />
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
