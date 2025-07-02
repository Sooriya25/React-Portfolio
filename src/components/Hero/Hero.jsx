import React from 'react'
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sooriya</h1>
            <p className={styles.description}>I'm a Full Stack Developer with hands on experience in the MERN Stack, passionate about building scalable, Efficient and innovative web applications that drive results.</p>
            <a href="mailto:sooriya08092003@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="/assets/hero/hero.jpg" alt="image of me" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero