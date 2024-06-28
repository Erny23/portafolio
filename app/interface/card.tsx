"use client";

import { Card, Button } from "flowbite-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

export default function CardComp() {
    return (
        <div id="profile" className="relative text-center z-40">
            <Card className="w-full h-[50rem] md:h-[37rem] lg:h-[46rem] lg:max-w-md">
                <div id="profilePhoto" className="absolute top-0 left-0 rounded-t-md overflow-hidden w-full h-[36rem] bg-cover bg-top bg-no-repeat md:bg-top md:h-[25rem] md:bg-[length:22rem] lg:h-[30rem] lg:max-w-md lg:bg-cover" style={{backgroundImage: `url("/imagenPerfil.jpg")`}}></div>
                <h5 className="text-xl text-[#323232] font-bold mt-[29rem] md:mt-[20rem] lg:mt-[23rem]">Erntesto Fava</h5>

                <div className="flex justify-between px-20 lg:px-24">
                    <SiWhatsapp className="text-xl text-[#323232] hover:text-[#4c7753] lg:text-2xl" />
                    <FiInstagram className="text-xl text-[#323232] hover:text-[#4c7753] lg:text-2xl" />
                    <FaLinkedin className="text-xl text-[#323232] hover:text-[#4c7753] lg:text-2xl" />
                    <FaGithub className="text-xl text-[#323232] hover:text-[#4c7753] lg:text-2xl" />
                </div>
                <div className="absolute w-full bottom-0 left-0 px-4 mb-5">
                    <div className="border-t pt-3">
                        <Button className="m-auto hover:text-[#4c7753]" color="transparent">
                            Descargar CV
                            <FaCloudArrowDown className="inline ml-2 text-lg h-auto" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}