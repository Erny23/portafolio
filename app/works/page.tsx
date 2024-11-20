import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mis trabajos',
  description: 'My works',
}

const page = () => {
  return (
    <div id="works" className="page relative z-0 rounded-none bg-white border-y-8 border-white w-full md:rounded-md lg:rounded-s-none">
      <div className="p-6">Works</div>
    </div>
  )
}

export default page
