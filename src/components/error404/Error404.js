import React from 'react'
import styles from './error.module.css'
import signImg from './../../assets/log-in.png'
import loginImg from './../..//assets/Group 10.png'
import luciImage from './../../assets/LuciLogin.png';
import bgImage from './../..//assets/background-2.jpeg';
import errorImg from './../../assets/404.png';
// import Header from '../header/Header'
// import Footer from '../footer/Footer';


const Error404 = () => {
    return (
        <div>
             {/* <Header /> */}
        <div className={styles.color}>
                <img src={bgImage} alt="Background Image" />
                <div className={styles.center}>

                  <div className={styles.loginDiv}>
                        <form>
                            <div>
                                {/* <img src={luciImage} alt="Avatar" /> */}
                                <h1> Luci </h1>
                                <p> An interactive real estate investing assistant</p>
                                {/* <img src={errorImg} alt="Error Image" /> */}
                                <h1> 404 </h1>
                                <p className={styles.loginDivtext}> Looks like your lost, LUCI can help you out. </p>
                            </div>
                            
                            <div className="container" style={{marginLeft:"185px"}}>
                                <div className="row" id={styles.marginClass}>
                                    <button className={styles.homeButtonSign}> <img src={signImg} alt="SignIn Image" /> Sign up</button>
                                </div>

                                <div className="row" id={styles.marginClass}>
                                    <button className={styles.homeButtonLogin}> <img className={styles.buttonIcon} src={loginImg} alt="LogIn Image" /> Login </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
       
    )
}

export default Error404;