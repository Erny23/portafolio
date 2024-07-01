"use client";

import { Card, Button } from "flowbite-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import Subtitle from "../components/subtitle";

export default function CardComp() {
    return (
        <div id="profile" className="relative h-full text-center z-40 xs:h-auto">
            <Card id="card" className="block bg-white w-full h-full xs:h-[41rem] lg:h-[42rem] lg:max-w-md">
                <div id="profilePhoto" className="relative block overflow-hidden w-full h-[28rem] bg-[length:25rem] bg-top bg-no-repeat z-10 xs:h-[25rem] lg:max-w-md" style={{backgroundImage: `url("/imagenPerfil.jpg")`}}></div>
                <h5 className="text-4xl text-[#323232] font-bold">Ernesto Fava</h5>
                <br />
                <div className="font-semibold text-[#4c7753]">
                    <Subtitle/>
                </div>
                <br />
                <div className="flex w-full justify-between px-32 sm:px-40 lg:px-28">
                    <SiWhatsapp className="text-lg text-[#323232] hover:text-[#4c7753] lg:text-xl" />
                    <FiInstagram className="text-lg text-[#323232] hover:text-[#4c7753] lg:text-xl" />
                    <FaLinkedin className="text-lg text-[#323232] hover:text-[#4c7753] lg:text-xl" />
                    <FaGithub className="text-lg text-[#323232] hover:text-[#4c7753] lg:text-xl" />
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