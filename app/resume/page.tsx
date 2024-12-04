import React from 'react';
import { Metadata } from "next";
import styles from "../styles/page.module.css";

export const metadata: Metadata = {
  title: 'Sobre mi',
  description: 'My resume',
}

const page = () => {
  return (
    <div className={`${styles.page}`}>
      <div className="p-6">Resume</div>
    </div>
  )
}

export default page
