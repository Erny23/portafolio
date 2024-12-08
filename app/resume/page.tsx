import React from 'react';
import { Metadata } from "next";
import styles from "../styles/page.module.css";
import * as ui from "../ui";

export const metadata: Metadata = {
  title: 'Sobre mi',
  description: 'My resume',
}

const page = () => {
  return (
    <div className={`${styles.page}`}>
      <div className="p-6">Resume</div>
      <div className="p-6">
        <ui.backend />
      </div>
    </div>
  )
}

export default page
