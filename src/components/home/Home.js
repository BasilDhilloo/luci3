import React, { Component } from 'react';
import { Link } from "react-router-dom"
import styles from "./home.module.css";
// import bgImage from './../../assets/bg-luci.jpg';
// import luciImage from './../../assets/Luci.png';
// import signImg from './../../assets/log-in.png'
// import loginImg from './../../assets/Group 10.png'
import Header from '../header2/Header';
import Footer from '../footer/Footer';
import {withRouter} from 'react-router-dom';
import { BsBoxArrowInRight } from 'react-icons/bs'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import { IconContext } from 'react-icons';

// import SignupTwo from "./components/signup/signuptwo/SignupTwo"

class Home extends Component {
    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            // <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
                    <div>
                        <Header />
                        <section className={styles.home}>
                      <div className="container-fluid">

                                <div className={styles.rowMain}>
                                            <p className={styles.homeLuciImg}> Luci </p>
                                            <p className={styles.homeLuciText}>An interactive real estate investing asssistant</p>
                                </div>  
                                <div>
                                    <div>
                                    <div className={styles.rowMain}>
                                            <Link to="/signup"><button onClick={() => this.nextPath('/signup')} className={styles.homeButtonSign}> < BsBoxArrowInRight />   <span>Sign up </span></button>    
                                            </Link>
                                    </div>

                                    <div className={styles.rowMain}>        
                                           <Link to="/login"> 
                                                <button onClick={() => this.nextPath('/login')} className={styles.homeButtonLogin}> <i class="fas fa-paper-plane"></i><span>Login</span> </button>
                                           </Link> 
                                      </div>
                                    </div>
                            
                                </div>
                            </div>
                        </section>
                        <Footer />
                    </div>
            // </IconContext.Provider>
      
        )
    }
}

export default withRouter(Home);
