"use client";
import React from 'react';
import { FaUser, FaCode } from "react-icons/fa";
//import { TiThMenu } from "react-icons/ti";
//import { BsChatSquareDotsFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { usePathname } from 'next/navigation';
import Link from 'next/link'

const Desktop = () => {

    const router = usePathname();

    return (
        <>
            <ul className="absolute top-8 -left-20 bg-white py-3 px-1 rounded-md divide-y-2 z-20">
                <li className={`${router === "/" ? "text-complementary" : null} py-3`}>
                    <Link href="/">
                        <FaUser className="w-full" />
                        <h3 className="text-center text-sm">Sobre mi</h3>
                    </Link>
                </li>
                {/*<li className={`${router === "/resume" ? "text-complementary" : null} py-3`}>
                    <Link href="/resume">
                        <TiThMenu className="w-full" />
                        <h3 className="text-center text-sm">Resumen</h3>
                    </Link>
                </li>*/}
                <li className={`${router === "/works" ? "text-complementary" : null} py-3`}>
                    <Link href="/works">
                        <FaCode className="w-full" />
                        <h3 className="text-center text-sm">Trabajos</h3>
                    </Link>
                </li>
                {/*<li className={`${router === "/blog" ? "text-complementary" : null} py-3`}>
                    <Link href="/blog">
                        <BsChatSquareDotsFill className="w-full" />
                        <h3 className="text-center text-sm">Blog</h3>
                    </Link>
                </li>*/}
                <li className={`${router === "/contact" ? "text-complementary" : null} py-3`}>
                    <Link href="/contact">
                        <BiSolidContact className="w-full" />
                        <h3 className="text-center text-sm">Contacto</h3>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Desktop
