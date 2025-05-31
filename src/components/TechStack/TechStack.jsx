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
                <div className={styles.skillImageContainer}><img src="/assets/skills/firebase.png" alt="Git" /></div>
                <p>Firebase</p>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillImageContainer}><img src="/assets/skills/github.png" alt="Github" /></div>
                <p>Github</p>
            </div>
        </div>
    </section>
  )
}

export default TechStack