import React from 'react';
import { Metadata } from "next";
import styles from "../styles/page.module.css";

export const metadata: Metadata = {
  title: 'Sobre mi',
  description: 'My resume',
}

const page = () => {
  return (
    <div className={`${styles.page} relative z-0 rounded-none bg-white border-y-8 border-white w-full md:rounded-md lg:rounded-s-none`}>
      <div className="p-6">Resume</div>
    </div>
  )
}

export default page
