import React from 'react';
import styles from './footer.module.css'
import './../../App.css';


const Footer = () => {
    return (
        <div className={styles.footer}>
                <div className={styles.text}>
                    <p> Privacy Policy </p>
                    <p> ©Copyright All Rights Reserved.</p>
                </div>
            </div>                                  
    )
}
export default Footer;