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
            <ul className="fixed top-12 left-3 grid gap-3 divide-y-2 bg-white rounded-md w-24 p-3 lg:absolute lg:top-6 lg:-left-28">
                <li className={`${router === "/" ? "text-complementary" : null} pt-3 lg:rounded-md lg:hover:bg-gray-200`}>
                    <Link href="/">
                        <FaUser className="w-full" />
                        <h3 className="text-center">Perfil</h3>
                    </Link>
                </li>
                <li className={`${router === "/works" ? "text-complementary" : null} pt-3 lg:rounded-md lg:hover:bg-gray-200`}>
                    <Link href="/works">
                        <FaCode className="w-full" />
                        <h3 className="text-center">Trabajos</h3>
                    </Link>
                </li>
                <li className={`${router === "/contact" ? "text-complementary" : null} py-3 lg:rounded-md lg:hover:bg-gray-200`}>
                    <Link href="/contact">
                        <BiSolidContact className="w-full" />
                        <h3 className="text-center">Contacto</h3>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Desktop
