import React from 'react'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>   
                <a href="mailto:sooriya08092003@gmail.com"><img src="/assets/contact/emailIcon.png" alt="Email icon" /></a>
            </li>
            <li className={styles.link}>   
                <a href="https://github.com/Sooriya25"><img src="/assets/contact/githubIcon.png" alt="Github icon" href="https://github.com/Sooriya25"/></a>
            </li>
            <li className={styles.link}>
                <a href="https://www.linkedin.com/in/sooriya-narayanan-r-516559305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/assets/contact/linkedinIcon.png" alt="Linkedin icon" /></a>
            </li>
            <li className={styles.link}>
                <a href="https://www.instagram.com/s_rya_rz?igsh=MWk2a2N2Yzg0MnUzYw=="><img src="/assets/contact/insta.png" alt="insta icon" /></a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact