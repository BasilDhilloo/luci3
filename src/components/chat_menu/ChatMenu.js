import React, {Component} from 'react'
import HeaderTwo from "../header2/HeaderTwo";
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import {withRouter} from 'react-router-dom';
import styles from './chat_design.module.css'
import Helmet from 'react-helmet'
import old_styles from './chat_menu.module.css'
import UserIcon from '../../assets/userIcon.png'

class ChatMenu extends Component {

  render() {
    return (

      <div>
        <Helmet>
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet"
                id="bootstrap-css"/>
          <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
          {/*<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>*/}

          <link rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          {/*<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>*/}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          {/*<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>*/}
        </Helmet>

        <HeaderTwo/>
        <div className={old_styles.flexContainer}>

          <div className={old_styles.flexChild}>
            {/*<h3 style={{fontWeight: 'bold', color: '#4B176A'}}>Messages</h3>*/}
            {/*<br/>*/}

            <div className={styles.messaging} style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxSizing: 'border-box',
              boxShadow: '0px 4px 35px -7px rgba(0, 0, 0, 0.15)'
            }}>
              <div className={styles.inbox_msg}>
                <div className={styles.inbox_people} style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxSizing: 'border-box',
                  boxShadow: '0px 4px 35px -7px rgba(0, 0, 0, 0.15)'
                }}>

                  <div className={styles.inbox_chat} className={"scroll"}>
                    <h3 style={{fontWeight: 'bold', color: '#4B176A', marginLeft: '10px'}}>Messages</h3>

                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib} style={{color: '#4B176A'}}>
                          <h5 style={{color: '#4B176A', fontWeight: 'bold'}}>Jone Doe</h5>
                          <p style={{color: '#4B176A'}}>Lorem ipsum dolor sit amet, </p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib} style={{color: '#4B176A'}}>
                          <h5 style={{color: '#4B176A', fontWeight: 'bold'}}>Harry Poter</h5>
                          <p style={{color: '#4B176A'}}>Lorem ipsum sit amet, consectetur</p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib} style={{color: '#4B176A'}}>
                          <h5 style={{color: '#4B176A', fontWeight: 'bold'}}>Walt Disney</h5>
                          <p style={{color: '#4B176A'}}>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib} style={{color: '#4B176A'}}>
                          <h5 style={{color: '#4B176A', fontWeight: 'bold'}}>Washington Sundar</h5>
                          <p style={{color: '#4B176A'}}>Lorem ipsum , consectetur</p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib} style={{color: '#4B176A'}}>
                          <h5 style={{color: '#4B176A', fontWeight: 'bold'}}>William Carry</h5>
                          <p style={{color: '#4B176A'}}>Lorem ipsum dolor sit , consectetur</p>
                        </div>
                      </div>
                    </div>


                    <div className={styles.chat_list}>
                      <div className={styles.chat_people}>
                        <div className={styles.chat_img}>
                          <img src={UserIcon}/>
                        </div>
                        <div className={styles.chat_ib} style={{color: '#4B176A'}}>
                          <h5 style={{color: '#4B176A', fontWeight: 'bold'}}>Fransisco Fernandis</h5>
                          <p style={{color: '#4B176A'}}>Lorem ipsum dolor , </p>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>


                <div  className={styles.mesgs}>
                  <div  className={styles.msg_history}>

                    <div  className={styles.outgoing_msg}>
                      <div  className={styles.sent_msg}>
                        <p>Praesent consectetur ornare urna ut.</p>
                        <span  className={styles.time_date}> 08/02/2021        3.35 PM</span></div>
                      {/*<div  className={styles.incoming_msg_img}><img src={UserIcon}/></div>*/}
                    </div>
                    <div className="incoming_msg">
                      <div  className={styles.incoming_msg_img}><img src={UserIcon}/></div>
                      <div  className={styles.received_msg}>
                        <div  className={styles.received_withd_msg}>
                          <p>Lorem ipsum dolor sit amet, consectetur</p>
                          <span  className={styles.time_date}> 4.12 PM        08/02/2021</span></div>
                      </div>
                    </div>
                    <div  className={styles.outgoing_msg}>
                      <div  className={styles.sent_msg}>
                        <p>Praesent consectetur ornare urna ut euismod.</p>
                        <span  className={styles.time_date}>09/02/2021         11:45 PM</span></div>
                      {/*<div  className={styles.incoming_msg_img}><img src={UserIcon}/></div>*/}
                    </div>
                    <div className="incoming_msg">
                      <div  className={styles.incoming_msg_img}><img src={UserIcon}/></div>
                      <div  className={styles.received_msg}>
                        <div  className={styles.received_withd_msg}>
                          <p>......</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div  className={styles.type_msg}>
                    <div  className={styles.input_msg_write}>
                      <input type="text"  className={styles.input_msg_write} placeholder="Type a message"/>
                      <button  className={styles.msg_send_btn} type="button"><i className="fa fa-paper-plane"
                                                                                aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>




              </div>
            </div>


          </div>

          <div className={old_styles.flexChild2}></div>


        </div>

        <Footer/>


      </div>

    )
  }

}

export default withRouter(ChatMenu)