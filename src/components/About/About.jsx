import React from 'react'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src="/assets/about/about.png" 
                alt="About icon" 
                className={styles.aboutImg}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="/assets/about/uiIcon.png" alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend developement</h3>
                        <p>
                           Build clean, responsive, and accessible web interfaces using React.js, JavaScript, HTML, CSS, and Redux Toolkit. I focus on performance, reusability, and user-centered design. 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="/assets/about/serverIcon.png" alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developement</h3>
                        <p>
                            Building robust backend systems with Node.js, Express, and MongoDB to power fast, reliable, and scalable web applications.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="/assets/about/cursorIcon.png" alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Continuous Learning</h3>
                        <p>
                           Constantly exploring new tools and best practices in front-end development. Currently diving into Tailwind CSS and authentication.
                        </p>
                    </div>
                </li>
            </ul>

        </div>
    </section>
  )
}

export default About