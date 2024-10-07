import React from 'react';
import * as navbars from "./navbarComps";

const Navbar = () => {
  return (
    <>
        <section className="block bg-white x:hidden"><navbars.navMovil /></section>
        <section className="hidden x:block lg:hidden"><navbars.navTablet /></section>
        <section className="relative hidden lg:block"><navbars.navDesktop /></section>
    </>
  )
}

export default Navbar
