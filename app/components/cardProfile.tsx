import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaCloudDownloadAlt } from "react-icons/fa";
import SubtitleAnimation from './profileComps/subtitleAnimation';

const CardProfile = () => {
  return (
    <section className="bg-white rounded-md overflow-hidden">
      <div id="profileImage" className="relative size-[22rem] overflow-hidden">
        <img className="absolute -top-10 left-0 right-0 z-10" src="/profile-2.jpg" alt="Picture of the author" />
      </div>
      <div className="px-4 py-6">
        <h1 className="mb-3 font-bold text-3xl text-tittle text-center">Ernesto Fava</h1>
        <div className="mb-4 font-medium text-complementary text-center">
          <SubtitleAnimation />
        </div>
        <div className="flex justify-center gap-4">
          <FaWhatsapp className="icons size-6" />
          <FaLinkedin className="icons size-6" />
          <FaGithub className="icons size-6" />
        </div>
      </div>
      <div>
        <div className="h-[.08rem] mx-2 bg-gray-300"></div>
        <button id="downloadCV" className="w-full py-6">
          <h3 className="flex flex-row justify-center items-center">Descargar CV <span><FaCloudDownloadAlt className="h-full ms-1" /></span></h3>
        </button>
      </div>
    </section>
  )
}

export default CardProfile
