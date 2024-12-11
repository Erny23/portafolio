import React from "react";
import { FaCheck, FaRegCircle } from "react-icons/fa";
import styles from "../../styles/page.module.css";
import success from "../../styles/success.module.css";

const page = () => {
  return (
    <div className={`${styles.page}`}>
      <section className="w-full h-full flex flex-col justify-center items-center p-6">
        <div className="relative size-32">
          <FaRegCircle className={`${success.successIcon} ${success.circle}`} />
          <FaCheck className={`${success.successIcon} ${success.check} p-8`} />
        </div>
        <br />
        <div>
          <h1 className="text-xl text-center">¡Muchas gracias por contactarme!</h1>
          <h2 className="text-center">Estoy emocionado de conocer más sobre tu proyecto. Revisaré tu mensaje lo antes posible y te responderé a la brevedad.</h2>
        </div>
      </section>
    </div>
  )
}

export default page
