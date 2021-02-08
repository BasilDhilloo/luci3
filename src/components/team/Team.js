import React from 'react'
import styles from './team.module.css'

import teamImage from './../../../src/assets/team.png';
import bgImage from './../../../src/assets/background.jpeg';
import Header from './../header2/Header'
import Footer from './../footer/Footer';

function Team() {
    return (
        <div>
            <Header />
                <div className={styles.color}>
                    <p className={styles.teamText1}> Team </p>
                    {/* <img src={bgImage} alt="Background Image" /> */}
                        <div className={styles.center}>
                            <div className={styles.loginDiv}>
                                {/* <p>Team</p> */}
                                <img src={teamImage} alt="Avatar" />
                                <h2> John Steiner </h2>
                                <h4> Founder | CEO </h4>
                                <p>
                                It is a long established fact that a reader will be
                                distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem Ipsum
                                is that it has a more-or-less normal distribution of letters,
                                as opposed to using 'Content here, content here', making it 
                                look like readable English. Many desktop publishing packages and 
                                web page editors now use Lorem Ipsum as their default model text, 
                                and a search for 'lorem ipsum' will uncover many web sites still 
                                in their infancy. Various versions have evolved over the years, 
                                sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            </div>
                        </div>
                </div>
            <Footer />
        </div>
    )
}

export default Team;
