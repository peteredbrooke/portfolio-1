import {React, useEffect} from 'react'
import styles from "./Projects.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import library from '../../data/fa-library.js';
import Calculator from "./videos/calculator.mp4"
import Game from "./videos/game.mp4"
import Brewdog from "./videos/brewdog.mp4"
import HoverVideoPlayer from "react-hover-video-player"
import Home from "../Home"
// import {Link} from "react-router-dom"

const Projects = () => {

    


    return (
        <>
        
        <div className={styles.projectsMain}>
            <div className={styles.upArrow}>
                <a href="#home">
                    <FontAwesomeIcon icon={"long-arrow-alt-up"} />
                </a>        
            </div>
            <div className={styles.downArrow}>
                <a href="#skills">
                    <FontAwesomeIcon icon={"long-arrow-alt-down"} />   
                </a>            
            </div>
            
            <div className={styles.projectsGrid}>
                <div className={styles.projectsCard} >
                    <a href="https://peteredbrooke.github.io/calculator/">
                        <h1 className={styles.cardTitle}>JS Calculator</h1>
                        <HoverVideoPlayer className={styles.videoClip}
                            videoSrc={Calculator}
                            pausedOverlay={
                                <img src="thumbnail-image.jpg" alt="" />
                            }
                            loadingOverlay={
                                <div className="loading-spinner-overlay" />
                            }
                        />
                        <p className={styles.description}>  This fully functional Calculator was made using JavaScript, HTML and Sass. Click the image to vist the live site. </p>
                    </a>
                    
                </div>
                <div className={styles.projectsCard}>
                    <a href="https://peteredbrooke.github.io/snes_game/">
                        <h1 className={styles.cardTitle}>16 Bit JS Game</h1>
                        <HoverVideoPlayer className={styles.videoClip}
                                videoSrc={Game}
                                pausedOverlay={
                                    <img src="thumbnail-image.jpg" alt="" />
                                }
                                loadingOverlay={
                                    <div className="loading-spinner-overlay" />
                                }
                        />
                        <p className={styles.description}>16bit/SNES style top down rpg, this is the very first iteration of demo #1, all programmed from the ground up in Javascript/HTML and all designed and characters created by myself in photoshop. </p>
                    </a>
                    
                </div>
                <div className={styles.projectsCard}>
                    <a href="https://peteredbrooke.github.io/brewdogAPI/">
                        <h1 className={styles.cardTitle}>Brewdog API</h1>
                        <HoverVideoPlayer className={styles.videoClip}
                            videoSrc={Brewdog}
                            pausedOverlay={
                                <img src="thumbnail-image.jpg" alt="" />
                            }
                            loadingOverlay={
                                <div className="loading-spinner-overlay" />
                            }
                        />
                        <p className={styles.description}> Built using React, this nifty little API site allows users to find their favourite brewdog beers by search result, ABV and beer type. </p>              
                    </a>
                    
                </div>
                <div className={styles.projectsCard}>
                    <a href="https://peteredbrooke.github.io/morse-translator/">
                        <h1 className={styles.cardTitle}>JS Morse Translator</h1>
                        <p className={styles.description}>A very basic and rudamentary english to morse code translator, one of the first projects I did. </p>

                    </a>
                    
                </div>
                <div className={styles.projectsCard}>
                    <a href="https://knowaste-3c92c.web.app/">
                        <h1 className={styles.cardTitle}>KnowWaste</h1>
                        <p className={styles.description}>
                            My first real world MVP, tasked with creating a website for students to order their weekly meals during term time. The goal, to cut down on food waste by tracking and recording orders so that canteens aren't left with excess food at the end of each working day. 
                        </p>
                    </a>
                    
                </div>
                {/* <div className={styles.projectsCard}>
                    
                </div> */}
            </div>
            
        </div>
        </>
    )
}

export default Projects
