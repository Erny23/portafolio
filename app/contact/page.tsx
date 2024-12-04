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
    <div className={`${styles.page}`}>
      <section className="p-6">
        <Form />
      </section>
    </div>
  )
}

export default page
