import React from 'react';
import { Metadata } from "next";
import List from "../ui/list/list";
import styles from "../styles/page.module.css";

export const metadata: Metadata = {
  title: 'Mis trabajos',
  description: 'My works',
}

const Page = () => {
  return (
    <div className={`${styles.page}`}>
      <List />
    </div>
  )
}

export default Page
