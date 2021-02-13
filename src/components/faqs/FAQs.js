import React, {Component} from 'react'
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import styles from './FAQs.module.css'
import Helmet from 'react-helmet'

class FAQs extends Component{
  render() {

    return (
      <div style={{background: 'white', color: '4B176A' /*, height:'auto'*/}}>

        <Helmet>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"/>
        </Helmet>

        <HeaderTwo/>
        <h5 style={{ textAlign: 'center', fontWeight:'bold', color:'#4B176A', letterSpacing: '10px'}}>FREQUENTLY ASKED QUESTIONS</h5>
        <h6 style={{textAlign: 'center', color:'#4B176A'}}>Need help?</h6>

        <div className={styles.flexContainer}>
          <div className={styles.flexChild}>
            <div className="form-group">
              {/*<label htmlFor="usr">Name:</label>*/}
              <input type="text" className="form-control" id="usr" style={{borderRadius: '25px', width:'500px'}} placeholder={"Lorem ipsum dolor sit amet ?"}/>
            </div>
          </div>

          <div className={styles.flexChild}></div>
        </div>



        <Footer/>
      </div>
    )
  }
}

export default withRouter(FAQs)