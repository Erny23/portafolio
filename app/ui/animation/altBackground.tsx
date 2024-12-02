import React from "react";
import styles from "../../styles/altBackground.module.css"

const AltBackground = () => {
  return (
    <>
        {/* Cuadros animados de fondo */}
        <div className={`${styles.cube} absolute left-0`} style={{animationDelay: "1s"}}></div>
        <div className={`${styles.cube} absolute left-0`} style={{animationDelay: "8s"}}></div>
        <div className={`${styles.cube} absolute left-[15%]`} style={{animationDelay: "11s"}}></div>
        <div className={`${styles.cube} absolute left-1/4`} style={{animationDelay: "5s"}}></div>
        <div className={`${styles.cube} absolute left-1/2`} style={{animationDelay: "3s"}}></div>
        <div className={`${styles.cube} absolute left-1/2`} style={{animationDelay: "10s"}}></div>
        <div className={`${styles.cube} absolute left-3/4`} style={{animationDelay: "6s"}}></div>
        <div className={`${styles.cube} absolute left-[90%]`} style={{animationDelay: "2s"}}></div>
        <div className={`${styles.cube} absolute left-[85%]`} style={{animationDelay: "9s"}}></div>
    </>
  )
}

export default AltBackground
