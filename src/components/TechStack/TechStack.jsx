import React from 'react';
import styles from "./TechStack.module.css"

const TechStack = () => {
  return (
    <section className={styles.container} id='techStack'>
        <h2 className={styles.title}>Tech Stack</h2>
        <div className={styles.content}>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/html.png" alt="HTML" /></div>
                <p>HTML</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/css.png" alt="CSS" /></div>
                <p>CSS</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/js1.png" alt="JS" /></div>
                <p>Javascript</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/react.png" alt="React" /></div>
                <p>React js</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/redux.png" alt="Redux" /></div>
                <p>Redux Toolkit</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/node.png" alt="Node" /></div>
                <p>Node js</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/tailwind.png" alt="Git" /></div>
                <p>Tailwind CSS</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/Express.png" alt="Github" /></div>
                <p>Express.js</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/MongoDB.png" alt="Github" /></div>
                <p>MangoDB</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/github.png" alt="Github" /></div>
                <p>Version Control</p>
            </div>
        </div>
    </section>
  )
}

export default TechStack