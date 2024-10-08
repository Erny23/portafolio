import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaCloudDownloadAlt } from "react-icons/fa";
import SubtitleAnimation from './profileComps/subtitleAnimation';

const CardProfile = () => {
  return (
    <section id="cardProfile" className="bg-white w-full rounded-none overflow-hidden x:rounded-md x:w-[25rem] xx:w-[30rem] md:w-[35rem] lg:w-80 xl:w-96">
      <div id="profileImage" className="relative w-full">
        <div className="relative h-[25rem] bg-[url('/profile-2.jpg')] bg-cover bg-[center_top_-2.5rem] bg-no-repeat z-10 
        xxs:h-[30rem]
        md:h-[36rem]
        lg:h-[22rem]
        xl:h-[25rem]"
        ></div>
      </div>
      <div className="relative px-4 py-6 z-20">
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
