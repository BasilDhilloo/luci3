import React, {Component} from 'react'
import Header from "../header2/Header";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {Layout} from "antd";
import coverImage from './../../assets/contactus_jumbotron_image.png'
import bodyImage from './../../assets/contactus_body_image.png'
import phoneImage from './../../assets/phoneImage.png'
import emailImage from './../../assets/email_image.png'
import {withRouter} from 'react-router-dom';
import styles from './contact.module.css'
import Helmet from 'react-helmet'
import './contact.module.css'

const {Content} = Layout;

class Contact extends Component {

  render() {
    return (

      <div style={{background: 'white'}}>
        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"/>
        </Helmet>


        <Header/>


        <div style={{textAlign: 'center', color: 'white', position: 'relative'}}>
          <img src={coverImage} style={{width: '100%', height: '100%'}}/>
          <h1 className={styles.coverHeadingText}>Contact With Us</h1>
          <p className={styles.coverParagraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tristique sit amet nibh sit amet
            sagittis. Mauris aliquet erat sit amet vestibulum lacinia.</p>
        </div>
        <br/>

        <div className={styles.container} style={{marginBottom: '0px'}}>
          <div className="row" style={{marginLeft: '7px'}}>

            <div className={"col"} style={{display: '-webkit-box'}}>

              <img className={styles.contianerImg} src={phoneImage}/>
              <div className={"row"}>
                <h5 className={styles.containerH1}>Phone Number</h5>
                <p className={styles.containerP}>0000 0000 00</p>

              </div>

            </div>

            <div className={"col"} style={{display: '-webkit-box'}}>
              <img className={styles.contianerImg} src={emailImage}/>
              <div className={"row"}>
                <h5 className={styles.containerH1}>Email Address</h5>
                <p className={styles.containerP}>Loremipsum@gmail.com</p>
              </div>

            </div>

            <div className={"col"} style={{display: '-webkit-box'}}>
              <img className={styles.contianerImg} src={phoneImage}/>
              <div className={"row"}>
                <h5 className={styles.containerH1}>Location</h5>
                <p className={styles.containerP}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

              </div>

            </div>

          </div>
        </div>
        <br/>
        <br/>

        <div className={styles.flexContainer}>

          <div className={styles.flexChild} style={{marginTop: '0px'}}>
            <img className={styles.bodyImage} src={bodyImage}/>
          </div>


          <div className={styles.flexChild2}>

            <div className="row">
              <label>Your Name</label>
              <input className={styles.flex_input} type="text" id={"name"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px'}}/>
            </div>


            <div className="row">
              <label>Your Email</label>
              <input className={styles.flex_input} type="text" id={"email"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px'}}/>
            </div>

            <div className="row">
              <label>Write A Subject</label>
              <input className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px'}}/>
            </div>

            <div className="row">
              <label>Your Message</label>
              <textarea id={"message"} rows={"5"} className={styles.flex_textarea}
                        style={{
                          background: 'rgba(0, 0, 0, 0.1)',
                          color: 'black',
                          borderRadius: '15px',
                          width: '100%'
                        }}/>
            </div>

          </div>


        </div>
        <br/>

        <div className={"flex-container"}>
          <div className={styles.otherChild}>
            <button className={"flexbutton"} /*style={{width: '1420px', height: '86px', fontWeight: 'bold'}}*/>SUBMIT
            </button>
          </div>
        </div>

        <Footer/>


      </div>
    )
  }
}


export default withRouter(Contact)

