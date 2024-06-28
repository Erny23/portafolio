"use client";

import Link from "next/link";
import { MegaMenu, Navbar } from 'flowbite-react';
import { HiUser } from "react-icons/hi";
import { SiFormspree } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa6";

export default function SidebarMovilComponent() {
  return (
    <MegaMenu className="block py-0 absolute top-0 left-0 right-0 z-40 xs:hidden">
        <div className="px-4 w-full flex flex-col">
            <div className="py-1 max-w-screen-xl items-center md:space-x-8">
                <Navbar.Brand href="/">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Ernesto Fava
                    </span>
                </Navbar.Brand>
            </div>
            <div className="py-2 border-t">
                <ul className="list-none flex items-center justify-between divide-x">
                        <li className="w-full text-center px-0 pb-0 text-xs">
                            <a href="/">
                                <HiUser className="m-auto w-5 h-5 fill-[#323232]" />
                                Sobre mi
                            </a>
                        </li>
                        <li className="w-full text-center px-0 pb-0 text-xs">
                            <a href="/Summary">
                                <SiFormspree className="m-auto w-5 h-5 fill-[#323232]" />
                                Resume
                            </a>
                        </li>
                        <li className="w-full text-center px-0 pb-0 text-xs">
                            <a href="/Works">
                                <FaCode className="m-auto w-5 h-5 fill-[#323232]" />
                                Trabajos
                            </a>
                        </li>
                        <li className="w-full text-center px-0 pb-0 text-xs">
                            <a href="/Blog">
                                <IoChatboxEllipses className="m-auto w-5 h-5 fill-[#323232]" />
                                Blog
                            </a>
                        </li>
                        <li className="w-full text-center px-0 pb-0 text-xs">
                            <a href="/Contact">
                                <FaAddressBook className="m-auto w-5 h-5 fill-[#323232]" />
                                Contacto
                            </a>
                        </li>
                    </ul>
            </div>
        </div>
    </MegaMenu>
  );
}
