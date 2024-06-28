"use client"

import { motion } from "framer-motion"

export default function Info( {children} : Readonly<{children: React.ReactNode}> ) {
    return (
        <>
            <motion.section 
            initial={{ x: -300 , opacity: 0.2}}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }} id="content" 
            className="right-[-12rem] bg-white rounded-r-lg shadow-lg w-full z-30 md:my-3">
                {children}
            </motion.section>
        </>
    )
}
