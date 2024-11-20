import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mis contactos',
  description: 'My contacts',
}

const page = () => {
  return (
    <div id="contact" className="page relative z-0 rounded-none bg-white border-y-8 border-white w-full md:rounded-md lg:rounded-s-none">
      <div className="p-6">Contact</div>
    </div>
  )
}

export default page
