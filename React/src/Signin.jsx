
import "./Signin.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signin() {
const[email, setEmail] = useState('');
const[password, setPassword] = useState('');
const[loginerror, setLoginError] = useState('');
const navigate = useNavigate();
const handleSignin = (e) => {
e.preventDefault();
const saveEmail = localStorage.getItem("registeredEmail");
const savePassword = localStorage.getItem("registeredPassword");
if (!saveEmail || !savePassword){
setLoginError("No account found. plaes sign up first!");
return;
}

if (email === saveEmail && password === savePassword){
setLoginError("");
alert("Login Successful")
navigate("/home");}else{
setLoginError("Invalid email or password! please try again");

}

};

return(
<div className="Signin-container">
<img src="/image/signin.png"
alt="Signin"
className="Signin-Image"
/>
<div className="signin"/>
<h1>Sign in</h1>

{/* Email */}
<label>Email</label>
<div className="input">
 <img src="image/email.png" alt="email" className="inputs-icon" />
   
<input type="email"
placeholder="Enter your email"

value = {email}

onChange={(e) => setEmail(e.target.value)}
/>
</div>
{/* Password */}
<label>Password</label>
<div className="input">
<img src="image/password.png" alt="password" className="inputs-icon"/>

<input type="password"
placeholder="Enter your password"
value = {password}
onChange={(e)=> setPassword(e.target.value)}
/>
<img src="/image/Unview.png" alt="Unview" className="input-icons" />
</div>
{loginerror && <p>{loginerror}</p>}
{/* Sign in */}
<button type="button" className="Signin-btn"onClick={handleSignin} > Sign in</button>

<div className="Signup-text"/>

<div className="account">
    Don't have an account? 
<p className="sign-up"> Sign up</p>    
   
</div>
<div className="diviber">
<span className="line"></span>
<p>Or</p>
<span className="line"></span>
</div>
<div className="icon-container">
<img src="/image/google1.png" 
alt="google"   
className="icon"/>
<img src="/image/facebook1.png"
alt="facebook"
className="icon"/>
</div>

</div>

);    
    
}
export default Signin;