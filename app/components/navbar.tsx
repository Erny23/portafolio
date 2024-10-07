import React from 'react';
import * as navbars from "./navbarComps";

const Navbar = () => {
  return (
    <>
        <section className="block bg-white md:hidden"><navbars.navMovil /></section>
        <section className="hidden md:block lg:hidden">Navbar tablet</section>
        <section className="relative hidden lg:block"><navbars.navDesktop /></section>
    </>
  )
}

export default Navbar
