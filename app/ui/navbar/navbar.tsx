import React from 'react';
import * as navbar from "./options";

const Navbar = () => {
  return (
    <>
        <nav className="block bg-white md:hidden"><navbar.movil /></nav>
        <nav className="relative z-10 hidden md:block"><navbar.desktop /></nav>
    </>
  )
}

export default Navbar
