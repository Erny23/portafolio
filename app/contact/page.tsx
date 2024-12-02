import React from 'react';
import { Metadata } from "next";
import Form from '../ui/form/form';
import styles from "../styles/page.module.css";

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'My contacts',
}

const page = () => {
  return (
    <div className={`${styles.page} relative z-0 rounded-none bg-white border-y-8 border-white w-full h-full md:rounded-md lg:overflow-y-auto lg:rounded-s-none`}>
      <section className="p-6">
        <Form />
      </section>
    </div>
  )
}

export default page
