/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import '../styles/login.css'
import firebaseDb from "../firebase";
import {Link} from 'react-router-dom';
import { userProfile } from './profile';
import profileView from './profile';

export let userEmail;

// const Login: React.FC<props> = ( { setpage }) => {
const Login = () =>{
	
	const [inputcredentials, invalid] = useState(false)
	// const [homepage, sethomepage] = useState(false)
	
	// const handlepagechange = () =>{
	// 	setpage(false);
	// }
	const passwordeye = () =>{
		const togglePassword = document.getElementById('togglePassword')
        const password = document.querySelector('#password')
        togglePassword.addEventListener('click', function (e) {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
        });
	}

	const handlelogin = () =>{
		const email = document.getElementById('email')
        const userpassword = document.getElementById('password')
		if (email.value && userpassword.value){
			firebaseDb.on("value", snapshot => {
				const data = snapshot.val().users;
				for(const id in data){
					if(data[id].email === email.value && data[id].password === userpassword.value){
						userEmail = data[id].email
						sessionStorage.setItem("email", email.value);
						// <Link to="/todo"><u>Signup</u></Link>
						window.location.href = '/todo';
						// <userProfile.Provider value={data[id]}>
						// 	<profileView />
						// </userProfile.Provider>
						return ;
					}
				}
				invalid(true);
				document.getElementById('password').value = "";
				document.getElementById('email') .value = "";
			});
		}   
	}
 	return(	
    <div >
		<div>
			<div className="text">
				<p><h1>Add a To-Do</h1><h3>Start prioritizing your day</h3></p> 
			</div>
			<div className="outercontainer">
				<form id="loginform" >
					<h2>&nbsp;Login - To feel the change</h2>
					<div className="container">
						<label><b>Email</b></label>
						<input type="login" placeholder="Email" name="email" id="email" required />
						<br></br><br></br>
						<label ><b>Password</b></label>
						<input type="password" placeholder="Enter Password" name="password" id="password"  required />
						<i className="far fa-eye eyelogin" id="togglePassword" onClick={passwordeye}></i>
						<br></br>
						{inputcredentials && <div className='error-message'> Invalid credentials!!!</div>}
						<br></br>
						<div className="psw" ><a href="#">Forgot password?</a></div>
						<br></br>
						<label><input type="checkbox" name="remember" /> Remember me</label>
						<br></br><br></br>
						<button className="buttonlogin" type="button" onClick={handlelogin} >Login</button>
					</div>
					<div style={{marginTop:'30px'}}>Already a member <Link to="/signup"><u>Signup</u></Link> here</div>
				</form>
			</div>
		</div>
		
	</div>
  );
}

export default Login;	