import React from 'react';
import { Metadata } from "next";
import styles from "../styles/page.module.css";
//import * as ui from "../ui";

export const metadata: Metadata = {
  title: 'Test',
  description: 'Página para testeo',
}

const page = () => {
  return (
    <div className={`${styles.page}`}>
      <div className="p-6">Resume</div>
      <div className="p-6 pt-0">
        {/*<ui.backend />*/}
        {/*<ui.testForm />*/}
      </div>
    </div>
  )
}

export default page
