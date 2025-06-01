import React from 'react'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src="/assets/about/about.jpg" 
                alt="About icon" 
                className={styles.aboutImg}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src="/assets/about/cursorIcon.png" alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend developement</h3>
                        <p>
                           I build clean, responsive, and accessible web interfaces using React.js, JavaScript, HTML, CSS, and Redux Toolkit. I focus on performance, reusability, and user-centered design. 
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="/assets/about/serverIcon.png" alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Continuous Learning</h3>
                        <p>
                           I'm constantly exploring new tools and best practices in front-end development. Currently diving into Tailwind CSS, authentication, and deployment workflows.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src="/assets/about/uiIcon.png" alt="cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>UI/UX Focused</h3>
                        <p>
                           I prioritize usability and consistency, ensuring that every design I implement feels smooth, intuitive, and visually appealing across all devices. 
                        </p>
                    </div>
                </li>
            </ul>

        </div>
    </section>
  )
}

export default About