import React from 'react'
import styles from "./Skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import photoshop from "./images/adobe-photoshop.png"
import {Link} from "react-router-dom"

const Skills = () => {
    return (
        <div className={styles.skillsContainer}>
           <span className={styles.skillsBox}>
                <FontAwesomeIcon icon={["fab", "html5"]} />
           </span>
           <span className={styles.skillsBox}>
                <FontAwesomeIcon icon={["fab", "react"]} />
           </span>
           <span className={styles.skillsBox}>
                <FontAwesomeIcon icon={["fab", "sass"]} />
           </span>
           <span className={styles.skillsBox}>
                <FontAwesomeIcon icon={["fab", "js-square"]}/>
           </span>
           <span className={styles.skillsBox}>
                <FontAwesomeIcon icon={["fab", "angular"]}/>
           </span>
           <span className={styles.skillsBox}>
               <img src={photoshop}></img>
           </span>
          
        </div>
    )
}

export default Skills
