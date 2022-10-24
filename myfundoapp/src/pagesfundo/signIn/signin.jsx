import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './signin.css'
import img1 from './GoogleImage.jpg'


import {SignIn} from '../../servicesfundo/Userservice'

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;


function Signin() {
  const [regexObj, setRegexObj] = React.useState({
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
  });
  const [signinObj, setSigninObj] = React.useState({ email: "", password: "" });

  const takeEmail = (event) => {
    setSigninObj((prevState) => ({ ...prevState, email: event.target.value }));
  };

  const takePassword = (event) => {
    setSigninObj((prevState) => ({...prevState, password: event.target.value}));
  };
  const submit = () => {
    let emailTest = emailRegex.test(signinObj.email);
    let passwordTest = passwordRegex.test(signinObj.password);
    if (emailTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter correct email",
      }));
    } else if (emailTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: false,
        emailHelper: "",
      }));
    }
    if (passwordTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct password",
      }));
    } else if (passwordTest === true) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }

    if (emailTest===true && passwordTest === true) {
      SignIn(signinObj)
          .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.id) })
          .catch((error) => { console.log(error) })
  }
  };

  return (
    <div className='main-box'>
      <div className='sub-box'>
        <img id='image1' src={img1}  />
        <p className='sign-in'><b>Sign in</b></p>
        <p className='use-google'>Use your Google Account </p>
      
      
          
          
          <TextField className='textfield'
          id="outlined-basic"
          error={regexObj.emailBorder}
          label="Email"
          variant="outlined"
          onChange={takeEmail}
          helperText={regexObj.emailHelper}
          size='small'/>
            <p className='forgot-email'>Forgot email?</p>
          
         
          <TextField className='textfield'
          id="outlined-basic"
          error={regexObj.passwordBorder}
          label="Password"
          variant="outlined"
          onChange={takePassword}
          helperText={regexObj.passwordHelper}
          size='small'/>
      
     
      <div className='sub-box3'>
          <p className='textarea'>Not your computer? Use Guest mode to sign in privately.<br/><span id='learn-more'>Learn more</span></p>
          
        </div>
        <div className='button-box'>
            <p className='create-account'>Create account</p>
            <Button onClick={submit} variant="contained">Next</Button>
        </div>
    </div>   
    </div>

  )
}

export default Signin