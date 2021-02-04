import React, { Component } from 'react';
import styles from "./home.module.css";
// import bgImage from './../../assets/bg-luci.jpg';
// import luciImage from './../../assets/Luci.png';
import signImg from './../../assets/log-in.png'
import loginImg from './../../assets/Group 10.png'
import Header from '../header2/Header';
import Footer from '../footer/Footer';
import {withRouter} from 'react-router-dom';
// import SignupTwo from "./components/signup/signuptwo/SignupTwo"

class Home extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
        <div>
            <Header />
            <section className={styles.home}>
               <div className="container-fluid" >

                   <div className={styles.rowMain}>
                            <p className={styles.homeLuciImg}> Luci </p>
                            <p className={styles.homeLuciText}>An interactive real estate investting asssistant</p>
                    </div>  

                    <div className={styles.rowMain}>
                            <button onClick={() => this.nextPath('/signup')} className={styles.homeButtonSign}> <img src={signImg} alt="SignIn Image" /> <span>Sign up </span></button>    
                    </div>

                    <div className={styles.rowMain}>        
                            <button onClick={() => this.nextPath('/login')} className={styles.homeButtonLogin}> <img src={loginImg} alt="LogIn Image" /> <span>Login</span> </button>
                    </div>    
                </div>
        </section>
        <Footer />
    </div>
           
        )
    }
}

export default withRouter(Home);
