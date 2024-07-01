"use client";

import React from 'react';
import { MegaMenu, Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Subtitle from "../components/subtitle";
import { HiUser } from "react-icons/hi";
import { SiFormspree } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa6";
import Link from 'next/link';

export default function SidebarMovilComponent() {

    const pathname = usePathname();
    const router = useRouter();

    //const [ page, setPage ] = React.useState<string>(pathname);
    //console.log(page);
    
    /*if (pathname !== '/') {
        window.scrollTo({top: 0});
    }*/
    //window.scrollTo({top: 50});

    /*const onClick = (e: Event | null) => {
        router.push(`${e?.target?.id}`);
        const id = e.target.id;
        //router.push(`${id}`);
        setPage(id);
        console.log(page);
        //window.scrollTo({top: 150});
    };*/

    const onClick = () => {
        window.scrollTo({top: 800});
    }

  return (
    <MegaMenu className="fixed block p-0 top-0 left-0 right-0 z-[100] xs:hidden">
        <div className="w-full flex flex-col">
            <div className="py-1 max-w-screen-xl items-center md:space-x-8">
                <Navbar.Brand className="w-full flex-col py-1 px-5" href="/">
                    <span className="w-full self-center whitespace-nowrap text-base font-medium text-[#323232]">
                        Ernesto Fava
                    </span>
                    <div className="w-full text-xs font-base text-[#4c7753]">
                        <Subtitle />
                    </div>
                    {/*<div className="w-full text-xs font-base text-[#4c7753]">{pathname}</div>*/}
                </Navbar.Brand>
            </div>
            <div className="py-2 border-t">
                <ul className="list-none flex items-center justify-between divide-x">
                    <li className="w-full text-center px-0 pb-0 text-xs">
                        <Link href="/" onClick={onClick}>
                            <HiUser className="m-auto w-5 h-5 fill-[#323232]" />
                            Sobre mi
                        </Link>
                    </li>
                    <li className="w-full text-center px-0 pb-0 text-xs">
                        <Link href="/Summary">
                            <SiFormspree className="m-auto w-5 h-5 fill-[#323232]" />
                            Resume
                        </Link>
                    </li>
                    <li className="w-full text-center px-0 pb-0 text-xs">
                        <Link href="/Works">
                            <FaCode className="m-auto w-5 h-5 fill-[#323232]" />
                            Trabajos
                        </Link>
                    </li>
                    <li className="w-full text-center px-0 pb-0 text-xs">
                        <Link href="/Blog">
                            <IoChatboxEllipses className="m-auto w-5 h-5 fill-[#323232]" />
                            Blog
                        </Link>
                    </li>
                    <li className="w-full text-center px-0 pb-0 text-xs">
                        <Link href="/Contact">
                            <FaAddressBook className="m-auto w-5 h-5 fill-[#323232]" />
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </MegaMenu>
  );
}
