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
    <div className={`${styles.page} relative z-0 rounded-none bg-white border-y-8 border-white w-full md:rounded-md lg:rounded-s-none`}>
      <List />
    </div>
  )
}

export default Page
