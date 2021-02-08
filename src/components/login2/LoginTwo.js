import React from 'react';
import styles from "./loginTwo.module.css"
import luciImage from './../../../src/assets/LuciLogin.png';
import signImg from './../../../src/assets/log-in.png'
import loginImg from './../../../src/assets/Group 10.png'
import bgImage from './../../../src/assets/background.jpeg';
import Header from './../header2/Header';
import Footer from './../footer/Footer';
import { BsBoxArrowInRight } from 'react-icons/bs'

const LoginTwo = props => (
    <LoginForm />
);
  

class LoginForm extends React.Component{
  render(){
    return(
    <div className={styles.home}>
        <Header />
        {/* <img src={bgImage} alt="Background Image" /> */}
        <div id={styles.loginform}>
            <FormHeader/>
            <Form />
            {/* <OtherMethods /> */}
        </div>
        <Footer />
    </div>
     
    )
  }
}

const FormHeader = props => (
    <h2 id={styles.headerTitle}>{props.title}
    <img src={luciImage} alt="Avatar" />
    <p> An interactive real estate investing assistant</p>
    </h2>
);


const Form = props => (
<>
    {/* <div>
        <li><input className={styles.loginInput} id={styles.userIcon} style={{textIndent:"17px"}} type="text" placeholder="User Name" /></li>
        <li><input className={styles.loginInput} id={styles.passIcon} style={{textIndent:"17px", marginTop:"10px"}} type="password" placeholder="Password" /></li>
    </div> */}

   <div>
     <FormInput  id={styles.userIcon} placeholder="User Name" type="text" />
     <FormInput  id={styles.passIcon} placeholder="Password" type="password"/>
     <FormButton  title="Login">  <i class="fas fa-paper-plane"></i> </FormButton>
     <FormButton title="Sign up">  < BsBoxArrowInRight />  </FormButton>

   </div>
</>
);

const FormButton = props => (
  <div id={styles.button} class={styles.row}>
    <button style={{marginLeft:"25px"}}> {props.children} {props.title}</button>
  </div>
);

const FormInput = props => (
  <div class={styles.row}>
    <label>{props.description}</label>
    <input id={props.id} type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id={styles.alternativeLogin}>
    <label>Or sign in with:</label>
    <div id={styles.iconGroup}>
      {/* <Facebook />
      <Twitter />
      <Google /> */}
    </div>
  </div>
);

// const Facebook = props => (
//   <a href="#" id="facebookIcon"></a>
// );

// const Twitter = props => (
//   <a href="#" id="twitterIcon"></a>
// );

// const Google = props => (
//   <a href="#" id="googleIcon"></a>
// );

export default LoginTwo;