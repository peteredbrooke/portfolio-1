import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerGrid}>
                <ul className={styles.footerList}>
                    {/* <li>Contact Me</li> */}
                </ul>
                <h4>All Rights Reserved</h4>
            </div>
        </div>
    )
}

export default Footer
