import React from 'react'
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import Header from '../header2/Header';
import Footer from '../footer/Footer';
import styles from "./LoginTwo.module.css"
import {Form} from "react-bootstrap"
import { BsBoxArrowInRight } from 'react-icons/bs'





function LoginTwo(){
  const otherWay = { position:"fixed"}
  return (
    <div className={styles.home} style={{backgroundColor:"#E5E5E5"}}>
      <Header />
      <Grid xl={12} container direction="column" alignItems="center" justify="center">
      <Grid xl={10} container  direction="column" alignItems="center" justify="center" style={{ minHeight: '580px'}}>

        <Grid item xs={10} sm={8} md={8} lg={6} xl={6} style={{ minHeight: '550px',minWidth:"29%", backgroundColor:"#FFFFFF"}} container className={styles.newlogin}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  container direction="column" alignItems="center" justify="flex-start">
            <Grid item>
              <h1 className={styles.newheading}> Luci </h1>
            </Grid>
            <Grid item>
              <p className={styles.newtext}> An interactive real estate investing assistant</p>
            </Grid>  

            <Grid item container direction="column" alignItems="center" justify="flex-start"> 
              <Form>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Form.Group>
                    <Form.Control title="username" className={styles.newinput} id={styles.userIcon} type="text" placeholder="User Name"></Form.Control>
                  </Form.Group>
                </Grid>
             
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Form.Group>
                    <Form.Control  className={styles.newinput} id={styles.passIcon}  type="text" placeholder="Password" />
                  </Form.Group>
                </Grid>


              <Grid item container xs={12} spacing={2} m={2} direction="column" alignItems="center" justify="flex-start">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Link to="/signup"> 
                    <button className={styles.newbutton} style={{background:"#fff", color:"#4B176A", border:"1px solid #4B176A"}}>
                    <BsBoxArrowInRight  style={{marginRight:"5px"}}/> 
                      Sign Up
                    </button>
                  </Link>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Link to="/login">
                    <button className={styles.newbutton}>
                    <i class="fas fa-paper-plane" style={{marginRight:"5px"}}></i> 
                      Login
                    </button>
                  </Link>
                </Grid>
              </Grid>
                

              </Form>
            </Grid>
          </Grid>
          </Grid>

        </Grid>   
      </Grid> 
      <Footer style={otherWay}/>
    </div>
  )
}

export default LoginTwo



















// import React from 'react';
// import styles from "./signupTwo.module.css"
// import luciImage from './../../../../src/assets/LuciLogin.png';
// // import signImg from '/../../../../src/assets/log-in.png'
// // import loginImg from '/../../../../src/assets/Group 10.png'
// // import bgImage from '/../../../../src/assets/background.jpeg';
// import Header from './../../header2/Header';
// import Footer from './../../footer/Footer';
// import { BsBoxArrowInRight } from 'react-icons/bs'

// const SignupTwo = props => (
//     <LoginForm />
// );
  

// class LoginForm extends React.Component{
//   render(){
//     return(
//     <div className={styles.home}>
//         {/* <Header /> */}
//         {/* <img src={bgImage} alt="Background Image" /> */}
//          <div >
//             <FormHeader/>
//             <Form /> 
//             {/* <OtherMethods /> */}
//         </div>
//         {/* <Footer /> */}
//     </div>
     
//     )
//   }
// }

// const FormHeader = props => (
//     <h2 id={styles.headerTitle}>{props.title}
//     <img src={luciImage} alt="Avatar" />
//     <p> An interactive real estate investing assistant</p>
//     </h2>
// );


// const Form = props => (

//    <div>
//      <FormInput   placeholder="First Name" type="text" />
//      <FormInput   placeholder="Last Name" type="text" />
//      <FormInput   placeholder="Address" type="text"/>
//      <FormInput   placeholder="Town/City" type="text" />
//      <FormInput   placeholder="State" type="text"/>
//      <FormInput   placeholder="Zip Code" type="number" />
//      <FormInput   placeholder="Instant Strategy" type="text" style={{marginBottom:"20px"}}/>
//      <FormButton  title="Sign up"> < BsBoxArrowInRight />  </FormButton>  
//      <FormButton  title="Login"> <i class="fas fa-paper-plane"></i> </FormButton>
     
//    </div>

// );

// const FormButton = props => (
//   <div id={styles.button} className={styles.row}>
//     <button style={{marginLeft:"28px"}}>{props.children} {props.title}</button>
//   </div>
// );

// const FormInput = props => (
//   <div className={styles.row}>
//     <label>{props.description}</label>
//     <input id={props.id} type={props.type} placeholder={props.placeholder}/>
//   </div>  
// );

// const OtherMethods = props => (
//   <div id={styles.alternativeLogin}>
//     <label>Or sign in with:</label>
//     <div id={styles.iconGroup}>
//       {/* <Facebook />
//       <Twitter />
//       <Google /> */}
//     </div>
//   </div>
// );

// // const Facebook = props => (
// //   <a href="#" id="facebookIcon"></a>
// // );

// // const Twitter = props => (
// //   <a href="#" id="twitterIcon"></a>
// // );

// // const Google = props => (
// //   <a href="#" id="googleIcon"></a>
// // );

// export default SignupTwo;