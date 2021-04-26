import React from 'react'
import styles from "./Contact.module.scss"

const Contact = () => {
    return (
        <div className={styles.contactMain}>
            <div className={styles.contactContainer}>
            <h1>Get in Touch</h1>
                <div className={styles.contactForm}>
                
                    <p>Name</p>
                    <input type="text" name="" id=""/>
                    <p>Email</p>
                    <input type="text" name="" id=""/>
                    <p>Subject</p>
                    <input type="text" name="" id=""/>
                    <p>Message</p>
                    <textarea className={styles.message} type="text" name="" id="" />    
                </div>
                <button className={styles.btn}>Submit</button>
            </div>
            
        </div>
    )
}

export default Contact
