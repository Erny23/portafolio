/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaCloudDownloadAlt } from "react-icons/fa";
import Subtitle from "../animation/subtitle";
import styles from "../../styles/profile.module.css";

const Profile = () => {
  return (
    <section className={`${styles.card} bg-white w-full overflow-hidden md:rounded-lg lg:w-96`}>
      <div className={`${styles.img} relative z-0`}>
        <img className="h-auto w-auto" src="/profile-3.png" alt="profile" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-3 py-4">
        <h1 className="font-bold">Ernesto Fava</h1>
        <div className="text-complementary text-lg">
          <Subtitle />
        </div>
        <div className="flex flex-row justify-center gap-4">
          <a href="https://wa.me/584128849604" target="_blank">
            <FaWhatsapp className="icons size-6" />
          </a>
          <a href="https://www.linkedin.com/in/ernesto-fava-0075481a9" target="_blank">
            <FaLinkedin className="icons size-6" />
          </a>
          <a href="https://github.com/Erny23" target="_blank">
            <FaGithub className="icons size-6" />
          </a>
        </div>
        <div className="h-[.08rem] w-11/12 bg-gray-300"></div>
        <a href="/CV-ErnestoFava.pdf" download>
          <button id="downloadCV" className="w-full">
            <h3 className="flex flex-row">Descargar CV <span><FaCloudDownloadAlt className="h-full ms-1" /></span></h3>
          </button>
        </a>
      </div>
    </section>
  )
}

export default Profile
