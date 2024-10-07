"use client";
import React from 'react';
import SubtitleAnimation from '../profileComps/subtitleAnimation';
import { FaUser, FaCode } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { usePathname } from 'next/navigation';
import Link from 'next/link'

const NavMovil = () => {

    const router = usePathname();

    return (
        <>
            <h1 className="font-bold text-xl ps-5 pt-3">Ernesto Fava</h1>
            <h2 className="text-complementary ps-5 pb-2.5"><SubtitleAnimation /></h2>
            <div className="h-[.08rem] mx-1 bg-gray-300"></div>
            <ul className="flex flex-row justify-center py-2.5 font-semibold divide-x-2">
                <li className={`${router === "/" ? "text-complementary" : null} px-1.5`}>
                    <Link href="/">
                        <FaUser className="w-full" />
                        <h3>Sobre mi</h3>
                    </Link>
                </li>
                <li className={`${router === "/resume" ? "text-complementary" : null} px-1.5`}>
                    <Link href="/resume">
                        <TiThMenu className="w-full" />
                        <h3>Resumen</h3>
                    </Link>
                </li>
                <li className={`${router === "/works" ? "text-complementary" : null} px-1.5`}>
                    <Link href="/works">
                        <FaCode className="w-full" />
                        <h3>Trabajos</h3>
                    </Link>
                </li>
                <li className={`${router === "/blog" ? "text-complementary" : null} px-1.5`}>
                    <Link href="/blog">
                        <BsChatSquareDotsFill className="w-full" />
                        <h3>Blog</h3>
                    </Link>
                </li>
                <li className={`${router === "/contact" ? "text-complementary" : null} px-1.5`}>
                    <Link href="/contact">
                        <BiSolidContact className="w-full" />
                        <h3>Contacto</h3>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavMovil
