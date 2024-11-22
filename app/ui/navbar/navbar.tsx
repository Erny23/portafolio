import React from 'react';
import * as navbar from "./options";

const Navbar = () => {
  return (
    <>
        <section className="block bg-white md:hidden"><navbar.movil /></section>
        <section className="hidden md:block lg:hidden"><navbar.tablet /></section>
        <section className="relative hidden lg:block"><navbar.desktop /></section>
    </>
  )
}

export default Navbar
