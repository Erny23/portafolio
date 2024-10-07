import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Mi blog',
  description: 'My blog',
}

const page = () => {
  return (
    <main id="blog" className="bg-white rounded-none x:rounded-md lg:rounded-s-none lg:h-[35rem] lg:-ms-0.5 lg:w-1/2 lg:p-1.5 lg:overflow-auto">
      <div className="p-6">Blog</div>
    </main>
  )
}

export default page
