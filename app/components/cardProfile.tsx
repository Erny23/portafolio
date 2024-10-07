import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaCloudDownloadAlt } from "react-icons/fa";
import SubtitleAnimation from './profileComps/subtitleAnimation';

const CardProfile = () => {
  return (
    <section id="cardProfile" className="bg-white rounded-none overflow-hidden lg:rounded-md">
      <div id="profileImage" className="relative size-[25rem] overflow-hidden lg:size-[22rem]">
        <img className="absolute -top-10 left-0 right-0 z-10" src="/profile-2.jpg" alt="Picture of the author" />
      </div>
      <div className="px-4 py-6">
        <h1 className="mb-3 font-bold text-3xl text-tittle text-center">Ernesto Fava</h1>
        <div className="mb-4 font-medium text-complementary text-center">
          <SubtitleAnimation />
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
      <div>
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

export default CardProfile
