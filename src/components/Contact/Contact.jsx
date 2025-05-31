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
                <img src="/assets/contact/emailIcon.png" alt="Email icon" />
                <a href="mailto:sooriya08092003@gmail.com">sooriya08092003@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/contact/githubIcon.png" alt="Github icon" />
                <a href="https://github.com/Sooriya25">Sooriya25</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/contact/linkedinIcon.png" alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/sooriya-narayanan-r-516559305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Sooriya Narayanan R</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact