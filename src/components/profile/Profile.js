import React, {Component} from 'react'
import Header from '../header2/Header'
import Footer from "../footer/Footer";
import 'antd/dist/antd.css';
import ProfileImage from '../../assets/profile_image_with_camera_icon.png'
import specificStyles from "./property.module.css";
import styles from './profile.module.css'

class Profile extends Component
{
  render() {

    return(

      <div style={{background:'white', color:'4B176A'}}>
        <Header/>

        <div className={"flex-container"}>
          <h3 className={"display-4"} style={{textAlign:'center', fontWeight:'bold', width:'100%', height:'76px', color: '#4B176A'}}>Profile</h3>
        </div>

        <div className={styles.flexContainer}>
          <div className={styles.flexChild} /*style={{marginTop:'50px' margin-left: 350px;}} */>
            <img className={styles.profileImage} src={ProfileImage}/>
          </div>

          <div className={styles.flexChild2} style={{maxWidth:'80%', /*marginLeft:'150px',*/ marginTop:'50px'}}>

            <h6 className={styles.headingTextSize} /*style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}*/>Jone Doe</h6>
            <p className={styles.paragraphTextSize} /*style={{textAlign:'left'}}*/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique sit amet nibh sit amet sagittis. Mauris aliquet erat sit amet vestibulum lacinia.</p>
            <br/>
            <br/>
            <h6 className={styles.headingTextSize} /*style={{fontSize:'25px', fontWeight:'bold', textAlign:'left'}}*/>Account Information</h6>

            <br/>
            <div className={"row"}>
              <label>Phone Number</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>

            <div className={"row"}>
              <label>Address</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>

            <div className={"row"}>
              <label>Gender</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>

            <div className={"row"}>
              <label>Nationality</label>
              <input list="nationality" id={specificStyles.inputIcon} className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
              <datalist id={"nationality"}>
                <option value={"value1"}/>
                <option value={"value2"}/>
                <option value={"value3"}/>
              </datalist>
            </div>

            <div className={"row"}>
              <label>Password</label>
              <input type="text" id={"name"} className={styles.flex_input} type="text" id={"subject"} style={{background: 'rgba(0, 0, 0, 0.1)',
                color: 'black',
                borderRadius: '10px', marginBottom: '10px', borderColor: 'currentColor'}}/>
            </div>
          </div>
        </div>

        <Footer/>

      </div>

    )
  }

}


export default Profile
