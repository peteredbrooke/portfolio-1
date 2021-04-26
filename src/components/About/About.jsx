import React from 'react'
import styles from "./About.module.scss";

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutMain}>
                <h1>About Me</h1>
                <div className={styles.descriptionContainer}>
                    <p>Hi, I'm Peter, recently I've been honing my programming skills on the nology 12 week programme. Having studied Media & Journalism, I grew my skills in print and online media, including web development and adobe photoshop and illustrator. A keen eye for design and a fascination with User Experience, I am looking to take these skills into a job in Web development</p>
                </div>
            </div>
        </div>
    )
}

export default About
