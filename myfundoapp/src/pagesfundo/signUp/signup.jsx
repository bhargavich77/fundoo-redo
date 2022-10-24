import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './signup.css'
import img1 from './GoogleImage.jpg'
import img2 from './signupImage.jpg'

import {SignUp} from '../../servicesfundo/Userservice'


const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;
function Signup() {
    const [regexObj, setRegexObj] = React.useState({
        firstNameBorder: false,
        firstNameHelper: "",
        lastNameBorder: false,
        lastNameHelper: "",
    });
    const [signupObj, setSignupObj] = React.useState({ firstName: "", lastName: "",email: "" , password: "",service:"advance"});

    const takeFirstname = (event) => {
        setSignupObj((prevState) => ({ ...prevState, firstName: event.target.value }));
      };
    
      const takeLastname = (event) => {
        setSignupObj((prevState) => ({ ...prevState, lastName: event.target.value }));
      };
      const takeUsername = (event) => {
        setSignupObj((prevState) => ({...prevState,email:event.target.value}));
      };

      const takePassword = (event) => {
        setSignupObj((prevState) => ({...prevState,password: event.target.value,}));
      };

      const submit = () => {
        let firstnameTest = firstNameRegex.test(signupObj.firstName);
        let lastnameTest = lastNameRegex.test(signupObj.lastName);
        let usernameTest = emailRegex.test(signupObj.email);
        let passwordTest = passwordRegex.test(signupObj.password);
        
        if (firstnameTest === false) {
          setRegexObj((prevState) => ({
            ...prevState,
            firstnameBorder: true,
            firstnameHelper: "enter valid firstname",
          }));
        } else if (firstnameTest === true) {
          setRegexObj((prevState) => ({
            ...prevState,
            firstnameBorder: false,
            firstnameHelper: "",
          }));
        }
        if (lastnameTest === false) {
          setRegexObj((prevState) => ({
            ...prevState,
            lastnameBorder: true,
            lastnameHelper: "enter valid lastname",
          }));
        } else if (lastnameTest === true) {
          setRegexObj((prevState) => ({
            ...prevState,
            lastnameBorder: false,
            lastnameHelper: "",
          }));
        }

        if (usernameTest === false) {
            setRegexObj((prevState) => ({
              ...prevState,
              usernameBorder: true,
              usernameHelper: "Choose a Gmail address",
            }));
          } else if (usernameTest === true) {
            setRegexObj((prevState) => ({
              ...prevState,
              usernameBorder: false,
              usernameHelper: "",
            }));
          }
      

      if (passwordTest === false) {
        setRegexObj((prevState) => ({
          ...prevState,
          passwordBorder: true,
          passwordHelper: "Enter a password",
        }));
      } else if (passwordTest === true) {
        setRegexObj((prevState) => ({
          ...prevState,
          passwordBorder: false,
          passwordHelper: "",
        }));
      }
   

    if (firstnameTest === true && lastnameTest === true && usernameTest === true && passwordTest === true) {
      SignUp(signupObj)
          .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.id) })
          .catch((error) => { console.log(error) })
  }
};

  return (
    <div className='main-div'>
        <div className='sub-div1'>
            <img id='googleimage1' src={img1}  />
            <h2 id='heading'>Create Your Google Account</h2>
            <div className='name-field'>
                
                <TextField className='fullname'
                id="outlined-basic"
                error={regexObj.firstnameBorder}
                label="First name"
                variant="outlined"
                onChange={takeFirstname}
                helperText={regexObj.firstnameHelper}
                size='small'
                />
                
                <TextField className='fullname'
                id="outlined-basic"
                error={regexObj.lastnameBorder}
                label="Last name"
                variant="outlined"
                onChange={takeLastname}
                helperText={regexObj.lastnameHelper}
                size='small'
                />
            </div>
            <div>
               
                <TextField className='user-name'
                id="outlined-basic"
                error={regexObj.usernameBorder}
                label="Username"
                variant="outlined"
                onChange={takeUsername}
                helperText={regexObj.usernameHelper}
                size='small'
                />
                <p className='text-field'>You can use letters,numbers & periods</p>
                <p id='text1'><b>Use my Current email address instead</b></p>
            </div>
            <div>
                <div className='password'>
                    
                    <TextField className='password-div'
                    id="outlined-basic"
                    error={regexObj.passwordBorder}
                    label="Password"
                    variant="outlined"
                    onChange={takePassword}
                    helperText={regexObj.passwordHelper}
                    size='small'
                />
                    <TextField className='password-div' id="outlined-basic" label="Confirm" variant="outlined" placeholder='Confirm' size="small" />
                    
                </div>
                <p className='text-field'>Use 8 or more characters with a mix of letters, numbers &<br/> symbols</p>

                <div className='checkbox-main'>
                    <input  type="checkbox" />
                    <p id='show-pwd'>Show password</p>
                </div>
            </div>
            
            <div className='button-div'>
                <p id='sign-in'>Sign in instead</p>
                <Button onClick={submit} id='next-button' variant="contained">Next</Button>
            </div>
        </div>
        <div className='sub-div2'>
            <img id='image2' src={img2} />
            <p>One account.All of Google<br/>working for you.</p>
        </div>
    </div>
  )

  }
export default Signup