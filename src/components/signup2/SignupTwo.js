import login2 from 'components/login2/LoginTwo'
import React from 'react'
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import Header from '../header2/Header';
import Footer from '../footer/Footer';
import styles from "./signupTwo.module.css"
import {Form} from "react-bootstrap"
import { BsBoxArrowInRight } from 'react-icons/bs'




function SignupTwo() {
  
  return (
    <div style={{backgroundColor:"#E5E5E5"}}>
      <Header />
      <Grid xl={12} container direction="column" alignItems="center" justify="center">
      <Grid xl={10} container direction="column" alignItems="center" justify="center" style={{ minHeight: '890px'}}>

        <Grid item xs={10} sm={8} md={8} lg={6} xl={6} style={{ minHeight: '850px',minWidth:"30%", backgroundColor:"#FFFFFF"}} container className={styles.newlogin}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  container spacing={1} direction="column" alignItems="center" justify="flex-start">
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
                    <Form.Control className={styles.newinput} type="text" placeholder="First Name" />
                  </Form.Group>
                </Grid>
            
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Form.Group>
                    <Form.Control className={styles.newinput}  type="text" placeholder="Last Name" />
                  </Form.Group>
                </Grid>

                <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Form.Group>
                    <Form.Control className={styles.newinput}  type="text" placeholder="Address" />
                  </Form.Group>
                </Grid>
            
                <Grid item  xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Form.Group>
                    <Form.Control className={styles.newinput}  type="text" placeholder="Town/City" />
                  </Form.Group>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container direction="row" spacing={3}>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Form.Group>
                      <Form.Control className={styles.newinput}  type="text" placeholder="State" />
                    </Form.Group>
                  </Grid>

                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Form.Group>
                      <Form.Control className={styles.newinput}  type="text" placeholder="Zip Code" />
                    </Form.Group>
                  </Grid>
                </Grid>
            
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Form.Group>
                    <Form.Control  className={styles.newinput}  type="text" placeholder="Mam Investment Strategy" />
                  </Form.Group>
                </Grid>


              <Grid item container xs={12} spacing={2} direction="column" alignItems="center" justify="flex-start">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Link to="/signup"> 
                    <button className={styles.newbutton}>
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
      <Footer />
    </div>
  )
}

export default SignupTwo





































// import React from 'react';
// import styles from "./loginTwo.module.css"
// import luciImage from './../../../src/assets/LuciLogin.png';
// import signImg from './../../../src/assets/log-in.png'
// import loginImg from './../../../src/assets/Group 10.png'
// import bgImage from './../../../src/assets/background.jpeg';
// import Header from './../header2/Header';
// import Footer from './../footer/Footer';
// import { BsBoxArrowInRight } from 'react-icons/bs'

// const LoginTwo = props => (
//     <LoginForm />
// );
  

// class LoginForm extends React.Component{
//   render(){
//     return(
//     <div className={styles.home}>
//         <Header />
//         {/* <img src={bgImage} alt="Background Image" /> */}
//         <div id={styles.loginform}>
//             <FormHeader/>
//             <Form />
//             {/* <OtherMethods /> */}
//         </div>
//         <Footer />
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
// <>
//     {/* <div>
//         <li><input className={styles.loginInput} id={styles.userIcon} style={{textIndent:"17px"}} type="text" placeholder="User Name" /></li>
//         <li><input className={styles.loginInput} id={styles.passIcon} style={{textIndent:"17px", marginTop:"10px"}} type="password" placeholder="Password" /></li>
//     </div> */}

//    <div>
//      <FormInput  id={styles.userIcon} placeholder="User Name" type="text" />
//      <FormInput  id={styles.passIcon} placeholder="Password" type="password"/>
//      <FormButton  title="Login">  <i class="fas fa-paper-plane"></i> </FormButton>
//      <FormButton title="Sign up">  < BsBoxArrowInRight />  </FormButton>

//    </div>
// </>
// );

// const FormButton = props => (
//   <div id={styles.button} class={styles.row}>
//     <button style={{marginLeft:"25px"}}> {props.children} {props.title}</button>
//   </div>
// );

// const FormInput = props => (
//   <div class={styles.row}>
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

// export default LoginTwo;