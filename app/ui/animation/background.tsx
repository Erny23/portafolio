import React from "react";
import styles from "../../styles/background.module.css"

const Background = () => {
  return (
    <>
        {/* Cuadros animados de fondo */}
        <div className={`${styles.cube} absolute left-0 size-24 opacity-70`} style={{animationDelay: "1s"}}></div>
        <div className={`${styles.cube} absolute left-0 size-24 opacity-70`} style={{animationDelay: "8s"}}></div>
        <div className={`${styles.cube} absolute left-[15%] size-48 opacity-50`} style={{animationDelay: "11s"}}></div>
        <div className={`${styles.cube} absolute left-1/4 size-48 opacity-50`} style={{animationDelay: "5s"}}></div>
        <div className={`${styles.cube} absolute left-1/2 size-32 opacity-60`} style={{animationDelay: "3s"}}></div>
        <div className={`${styles.cube} absolute left-1/2 size-24 opacity-70`} style={{animationDelay: "10s"}}></div>
        <div className={`${styles.cube} absolute left-3/4 size-48 opacity-50`} style={{animationDelay: "6s"}}></div>
        <div className={`${styles.cube} absolute left-[90%] size-32 opacity-60`} style={{animationDelay: "2s"}}></div>
        <div className={`${styles.cube} absolute left-[85%] size-24 opacity-70`} style={{animationDelay: "9s"}}></div>
    </>
  )
}

export default Background