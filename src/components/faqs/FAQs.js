import React, {Component} from 'react'
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import styles from './FAQs.module.css'

class FAQs extends Component{
  render() {

    return (
      <div style={{background: 'white', color: '4B176A' /*, height:'auto'*/}}>
        <HeaderTwo/>
        <h5 style={{ textAlign: 'center', fontWeight:'bold', color:'#4B176A', letterSpacing: '10px'}}>FREQUENTLY ASKED QUESTIONS</h5>
        <h6 style={{textAlign: 'center', color:'#4B176A'}}>Need help?</h6>

        <div className={styles.flexContainer}></div>



        <Footer/>
      </div>
    )
  }
}

export default withRouter(FAQs)