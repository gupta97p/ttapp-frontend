import '../styles/Login.css';
import axios from "axios"
import React, {useState} from "react";
import {Link} from 'react-router-dom';

import Profile from './profile';

var response_data;

function App() {
  const [user, setUser] = useState(false);
	const [inputcredentials, invalid] = useState(false)
  // const [detail, ]
  
  const HandleSubmit = (event) => {
  
    event.preventDefault();
    var config;
    const email = document.getElementById('email')
    const password = document.getElementById("userpassword")
    try{
      if (email.value && password.value){
        config = {method: 'post',url: 'http://127.0.0.1:8000/api/login/',
          // headers: {'Authorization': 'token 5f1beddc2b0ed77c6980b4a113d740c47b548440'},
          data: {"username":email.value, "password":password.value}
        };
      }
      else{
        alert("Please enter your email and password")
        return false;
      }
    }
    catch(e){
      console.log(e)
    }
    axios(config)
    .then(function (response) {
      console.log(response.data);
      response_data=response.data;
      <Profile detail={response_data} />
      setUser(true);
    })
    .catch(function (error) {
      console.log(error);
      invalid(true);
      document.getElementById('userpassword').value = "";
      document.getElementById('email').value = "";
    }); 
  }
  return (
    <div className="container">
      <form className="input-form" >
        <p className="login-header"> Login into the world of table tennis</p>

        {inputcredentials && <div className='error-message'> Invalid credentials!!!</div>}<br />
        <label>Email</label>
        <input type="email" className="login-form-input"  value="piyush" placeholder="email" name="email" id="email" required/><br /><br />
        
        <label>Password </label>
        <input type="password" className="login-form-input" value="123" placeholder="Password" name="password" id="userpassword" required/><br /><br />

        <input type="checkbox" id="remember" />
        <label > Remember me</label>
        
        <p className="login-forget-password"> Forget Password?</p>
        <button type="submit" className="login-submit-button" onClick={HandleSubmit}>Login</button>
      </form> 
      {user
      ?window.location.href='/profile'
      :console.log("hi from bottom of login page")
      }
      <div>Not a member <Link to="/signup"><u>Signup</u></Link> here</div>

    </div>
  );
}
export default App;
