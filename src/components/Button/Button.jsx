import React from 'react'
import styles from "./Button.module.scss"
import { Link } from "react-router-dom"

const STYLES = [`${styles.btnPrimary}`, `${styles.btnOutline}`];
const SIZES = [`${styles.btnMedium}`, `${styles.btnLarge}`];

// const STYLES = [`${styles.btnPrimary}`, "btn--outline"];
// const SIZES = ["btn--medium", "btn--large"];

const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle,
    buttonSize
    }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to="/contact" className={styles.btnMobile}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick} type={type}
            >
                {children}
            </button>
        </Link>
    )
}

export default Button
