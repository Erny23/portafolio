"use client";

import { Sidebar } from "flowbite-react";
import { HiUser } from "react-icons/hi";
import { SiFormspree } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaAddressBook } from "react-icons/fa6";

export default function SidebarComp() {
    return (
        <Sidebar id="sidebar" className='my-5 mt-12 w-fit h-fit hidden xs:block md:my-0 md:mt-12'>
            <Sidebar.Items>
                <Sidebar.ItemGroup className="divide-y">
                    <Sidebar.Item className="flex-col px-0 pb-0 text-xs" href="/">
                        <HiUser className="m-auto w-5 h-5 fill-[#323232]" />
                        Sobre mi
                    </Sidebar.Item>
                    <Sidebar.Item className="flex-col px-0 pt-3 pb-0 text-xs" href="/Summary">
                        <SiFormspree className="m-auto w-5 h-5 fill-[#323232]" />
                        Resumen
                    </Sidebar.Item>
                    <Sidebar.Item className="flex-col px-0 pt-3 pb-0 text-xs" href="/Works">
                        <FaCode className="m-auto w-5 h-5 fill-[#323232]" />
                        Trabajos
                    </Sidebar.Item>
                    <Sidebar.Item className="flex-col px-0 pt-3 pb-0 text-xs" href="/Blog">
                        <IoChatboxEllipses className="m-auto w-5 h-5 fill-[#323232]" />
                        Blog
                    </Sidebar.Item>
                    <Sidebar.Item className="flex-col px-0 pt-3 text-xs" href="/Contact">
                        <FaAddressBook className="m-auto w-5 h-5 fill-[#323232]" />
                        Contacto
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    )
}