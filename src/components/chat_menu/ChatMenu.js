import React, {Component} from 'react'
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import styles from './chat_menu.module.css'


class ChatMenu extends Component{

  render() {
    return (

      <div>
        <HeaderTwo/>
        <div className={styles.flexContainer}>
          <div className={styles.flexChild}>
            <h5 style={{fontWeight: 'bold', color: '#4B176A'}}>Messages</h5>
          </div>

          <div className={styles.flexChild2}></div>
        </div>

        <Footer/>


      </div>

    )
  }

}

export default withRouter(ChatMenu)