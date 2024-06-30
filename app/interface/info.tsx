"use client"

import { motion } from "framer-motion"

export default function Info( {children} : Readonly<{children: React.ReactNode}> ) {
    return (
        <>
            <section className="relative block overflow-auto bg-white w-auto h-auto top-0 left-0 mt-4 p-8 pb-0 rounded shadow-lg z-30 lg:hidden">{children}</section>
            <motion.section 
            initial={{ x: -300 , opacity: 0.2}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }} id="content" 
            className="relative hidden overflow-auto bg-white w-auto h-auto top-0 left-0 mt-4 p-8 pb-0 rounded shadow-lg z-30 lg:absolute lg:block lg:top-8 lg:left-[33.5rem] lg:bottom-0 lg:mt-0 lg:rounded-r">
                {children}
            </motion.section>
        </>
    )
}
