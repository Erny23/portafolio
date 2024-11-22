import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaCloudDownloadAlt } from "react-icons/fa";
import Subtitle from "../animation/subtitle";
import styles from "../../styles/profile.module.css";

const Profile = () => {
  return (
    <section className={`${styles.card} bg-white w-full rounded-none overflow-hidden md:rounded-md`}>
      <div className={`${styles.img} relative`}>
        <div className="relative z-10">
          <img className="size-full" src="profile-3.png" />
        </div>
      </div>
      <div className="relative px-4 py-6 z-30">
        <h1 className="mb-3 font-bold text-3xl text-tittle text-center">Ernesto Fava</h1>
        <div className="mb-4 font-medium text-complementary text-center">
          <Subtitle />
        </div>
        <div className="flex justify-center gap-4">
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
      </div>
      <div className="relative z-30">
        <div className="h-[.08rem] mx-8 bg-gray-300 lg:mx-2"></div>
        <a href="/CV-ErnestoFava.pdf" download>
          <button id="downloadCV" className="w-full py-6">
            <h3 className="flex flex-row justify-center items-center">Descargar CV <span><FaCloudDownloadAlt className="h-full ms-1" /></span></h3>
          </button>
        </a>
      </div>
    </section>
  )
}

export default Profile
