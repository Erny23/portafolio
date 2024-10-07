import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mis trabajos',
  description: 'My works',
}

const page = () => {
  return (
    <main id="works" className="bg-white rounded-none x:rounded-md lg:rounded-s-none lg:h-[35rem] lg:-ms-0.5 lg:w-1/2 lg:p-1.5 lg:overflow-auto">
      <div className="p-6">Works</div>
    </main>
  )
}

export default page
