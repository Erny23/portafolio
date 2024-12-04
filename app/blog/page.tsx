import React from 'react';
import { Metadata } from "next";
import styles from "../styles/page.module.css";

export const metadata: Metadata = {
  title: 'Mi blog',
  description: 'My blog',
}

const page = () => {
  return (
    <div className={`${styles.page}`}>
      <div className="p-6">Blog</div>
    </div>
  )
}

export default page
