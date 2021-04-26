import React, { useState } from 'react'
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import library from '../../data/fa-library.js';
import { Link } from "react-router-dom"
import Button from "../Button/Button"

const NavBar = (props) => {

    const section5 = props.sectionFive;
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);
    const [click, setClick] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    const closeMobileMenu = () => {
        setClick(false);
    }
    const handleClick= () => {
        setClick(!click);
    }
    window.addEventListener("resize", showButton)
    window.addEventListener("scroll", handleScroll)

    return (
        <div id="mynav" className={navbar ? `${styles.navBarScroll}` : `${styles.navBar}`}>
            <div className={styles.navBarContainer}>
                <Link to="/" className={styles.navBarLogo} onClick={closeMobileMenu}>
                    {/* <FontAwesomeIcon icon= {["fas", "times"]} /> */}
                </Link>
                <div className={styles.menuIcon} onClick={handleClick} >
                    {
                        click ? 
                        <FontAwesomeIcon icon = {["fas", "times"]}/>
                        :
                        <FontAwesomeIcon icon = {["fas", "bars"]}/>
                    }     
                </div>
                <ul className={ click ?   `${styles.navMenuActive}` : `${styles.navMenu}`} >
                    <li className={styles.navItem}>
                        <a href="#home"className={styles.navLinks} to="/" onClick={closeMobileMenu}>Home</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#projects"className={styles.navLinks} to="/projects" onClick={closeMobileMenu}>Projects</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#skills" className={styles.navLinks} to="/skills" onClick={closeMobileMenu}>Skills</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#about" className={styles.navLinks} to="/about" onClick={closeMobileMenu}>About</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="#contact" className={styles.navLinks} to="/contact" onClick={closeMobileMenu}>Contact Me</a>
                    </li>
                </ul>
                
                {/* {button && <Button buttonStyle="btn--outline">Contact Me
                            </Button>} */}
                

            </div>
           
        </div>
    )
}

export default NavBar
