import React from 'react'
import styles from "./Home.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import library from '../../data/fa-library.js';
import planet from "./images/planet.png"
import NavBar from "../NavBar/NavBar"
import Projects from "../Projects";
import About from "../About";
import Skills from "../Skills";
import Footer from "../Footer"
import Contact from "../Contact"

const Home = () => {
    // const element = document.getElementById("projects")
    // element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    return (
        <>
        
        <div id="home" className={styles.landing}>
            
            <div className={styles.downArrow}>
                <a href="#projects">
                    <FontAwesomeIcon icon={"long-arrow-alt-down"} />
                </a>   
            </div>
            <div className={styles.landingTextBox}>
                <h1 className={styles.landingText}>Hi I'm Peter J Edbrooke 
                <br/>
                <div className={styles.slidingVertical}>
                    <span>Web</span>
                    <span>Frontend</span>
                    <span>Backend</span>
                    <span>JavaScript</span>
                    <span>React</span>
                </div>
                <br/>
                Developer
                </h1>
                <div className={`${styles.slidingVertical}  ${styles.landingTextBox2}`}>
                    <h2>Created with.. 
                        <span>
                            <FontAwesomeIcon icon={["fab", "react"]} />
                        </span>  
                        <span>
                            <FontAwesomeIcon icon={["fab", "html5"]} />
                        </span>
                        
                        <span>
                            <FontAwesomeIcon icon={["fab", "sass"]} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={["fab", "js-square"]}/>
                        </span>
                            
                        </h2>
                    
                </div>

                
                
            </div>   
            <div className={styles.spaceIcon}>
                    {/* <FontAwesomeIcon icon={["fas", "space-shuttle"]} /> */}
                    {/* <img src={require("./planet.png")} alt=""/> */}
                    {/* <img src={planet} alt=""/> */}

            </div>
            
        </div>
        <section id="projects">
            <Projects />
        </section>
        <section id="skills">
            <Skills />
        </section>
        <section id="about">
            <About />
        </section>
        <section id="contact">
            <Contact />
        </section>
        <section id="footer">
            <Footer />
        </section>
        
        </>
    )
}


export default Home
