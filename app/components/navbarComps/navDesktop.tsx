"use client";
import React from 'react';
import { FaUser, FaCode } from "react-icons/fa";
//import { TiThMenu } from "react-icons/ti";
//import { BsChatSquareDotsFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { usePathname } from 'next/navigation';
import Link from 'next/link'

const NavDesktop = () => {

    const router = usePathname();

    return (
        <>
            <ul id="navDesktop" className="absolute top-8 -left-24 bg-white py-3 px-2 rounded-md divide-y-2 z-20">
                <li className={`${router === "/" ? "text-complementary" : null} py-3`}>
                    <Link href="/">
                        <FaUser className="w-full" />
                        <h3 className="text-center">Sobre mi</h3>
                    </Link>
                </li>
                {/*<li className={`${router === "/resume" ? "text-complementary" : null} py-3`}>
                    <Link href="/resume">
                        <TiThMenu className="w-full" />
                        <h3 className="text-center">Resumen</h3>
                    </Link>
                </li>*/}
                <li className={`${router === "/works" ? "text-complementary" : null} py-3`}>
                    <Link href="/works">
                        <FaCode className="w-full" />
                        <h3 className="text-center">Trabajos</h3>
                    </Link>
                </li>
                {/*<li className={`${router === "/blog" ? "text-complementary" : null} py-3`}>
                    <Link href="/blog">
                        <BsChatSquareDotsFill className="w-full" />
                        <h3 className="text-center">Blog</h3>
                    </Link>
                </li>*/}
                <li className={`${router === "/contact" ? "text-complementary" : null} py-3`}>
                    <Link href="/contact">
                        <BiSolidContact className="w-full" />
                        <h3 className="text-center">Contacto</h3>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default NavDesktop
