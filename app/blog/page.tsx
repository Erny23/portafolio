import React from 'react';
import { Metadata } from "next";
import styles from "../styles/page.module.css";

export const metadata: Metadata = {
  title: 'Mi blog',
  description: 'My blog',
}

const page = () => {
  return (
    <div className={`${styles.page} relative z-0 rounded-none bg-white border-y-8 border-white w-full h-full md:rounded-md lg:overflow-y-auto lg:rounded-s-none`}>
      <div className="p-6">Blog</div>
    </div>
  )
}

export default page
