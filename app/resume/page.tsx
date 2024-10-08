import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sobre mi',
  description: 'My resume',
}

const page = () => {
  return (
    <main id="resume" className="bg-white rounded-none x:rounded-md lg:rounded-s-none lg:h-[35rem] lg:-ms-0.5 lg:w-1/2 lg:p-1.5 lg:overflow-auto lg:-me-20 xl:h-[38rem]">
      <div className="p-6">Resume</div>
    </main>
  )
}

export default page
