"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
//import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { FaImage } from "react-icons/fa";
import { PiVideoFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

type props = {
    src: string,
    type: string
}

const Modal = (props: props) => {

    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <>
            <button className="flex justify-center items-center size-full lg:bg-zinc-800/60 lg:opacity-0 lg:transition-opacity lg:duration-200 lg:hover:opacity-100" onClick={() => setOpen(true)}>
                {props.type === "photo" ? (
                        <FaImage className="hidden text-zinc-200 size-16 lg:block" />
                    ) : (
                        <PiVideoFill className="hidden text-zinc-200 size-16 lg:block" />
                )}
            </button>

            <Dialog open={open} onClose={setOpen} className="relative z-50">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10">
                    <div className="relative size-full flex justify-center items-center">
                        <div className="absolute z-20 top-5 right-5 bg-gray-400/50 rounded-lg p-0.5 cursor-pointer" onClick={() => setOpen(false)}>
                            <IoClose className="text-white size-8" />
                        </div>
                        <DialogPanel
                            transition
                            className="relative transform shadow-xl transition-all max-w-5xl
                            data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:lg:translate-y-0 data-[closed]:lg:scale-95
                            "
                        >
                            {props.type === "photo" ? (
                                <>
                                    {/*eslint-disable-next-line jsx-a11y/alt-text*/}
                                    <img className="w-auto h-auto max-h-[48rem]" src={props.src} />
                                </>
                            ) : (
                                <video className="w-auto h-auto max-h-[48rem]" autoPlay loop muted>
                                    <source src={props.src} type="video/webm" />
                                    Tu navegador no soporta el elemento de video.
                                </video>
                            )}
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Modal
