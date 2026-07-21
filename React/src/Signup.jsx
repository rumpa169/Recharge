import React, { useState } from "react";
import"./Signup.css";
import { useNavigate } from "react-router-dom";
function Signup() {
const[email, setEmail] = useState("");
const[password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const[error, setErrors] = useState({
email:"", 
password:"",
confirmPassword:""
});
const navigate = useNavigate();
const handleSignup = (e) => { 
  e.preventDefault();
let validationErrors = { email:"", password:"", confirmPassword:""};
let hasError = false;
if (!email){
validationErrors.email="Email is required ";
hasError = true;
}

if (!password) {
validationErrors.password="Password is required ";
hasError = true;
}
if (!confirmPassword) {
validationErrors.confirmPassword="Confirm Password is required ";
hasError = true;
} else if (password !==confirmPassword){
  validationErrors.confirmPassword = "Password do not match";
  hasError = true;
}
if (hasError) {
setErrors(validationErrors);
return;
  }
  localStorage.setItem("registeredEmail", email)
localStorage.setItem("registeredPassword", password)
setErrors({ email:"", password:"", confirmPassword:""});
navigate("/signin");
};


return (
 <div className="Signup-container">
<img
src="/image/Signup.png"
alt="Signup"
className="Signup-image"
/>
 
<div className="Create-Account">
<h2>Create Account</h2>
 {/*Email*/}
 <label>Email</label>
<div className="input">
  <img src="/image/email.png" alt="email" className="input-icon" />
  <input type="email" placeholder="Enter your email" 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  />
</div>
 {/*Password*/}
 <label>Password</label>
<div className="input">
  <img src="/image/password.png" alt="password" className="input-icon" />
  <input type="password" placeholder="Enter your password" 
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 required
 />
  <img src="/image/password eye.png" alt="password eye" className="input-icon"/>
</div>
{/*Confirm Password*/}
<label>Confirm Password</label>
<div className="input">
  <img src="/image/confirm password.png" alt="confirm password" className="input-icon" />
  <input type="password" placeholder="Enter confirm password" 
value={confirmPassword}
onChange={(e) => setConfirmPassword(e.target.value)}
required
/>
<img src="/image/confirm password eye.png" alt="confirm password eye" className="input-icon"/>

</div>
{/* Sign Up */}
<button type="button" className="Signup-btn" onClick={handleSignup}> Sign Up</button>

<div className="Signin-text"/>
Already have an account? <span className="signin-link" onClick={()=> navigate("/signin")}>Sign in</span>
</div>

<div className="diviber">
 <span className="line"></span> 
 <p>Or</p>
 <span className="line"></span>
</div>
{/* icons */}
<div className="icons-container">
<img src="/image/google.png" alt="google" className="icons"/>
<img src="/image/facebook.png" alt="facebook" className="icons"/>
</div>

</div>


 
);
}
export default Signup;