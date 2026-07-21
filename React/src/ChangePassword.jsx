import "./ChangePassword.css";
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
function ChangePassword() {
const navigate = useNavigate ();  
const [oldPassword, setOldPassword] = useState ('');
const [newPassword, setNewPassword] = useState ('');
const [confirmPassword, setConfirmPassword] = useState ('');
const [error, setError] = useState({
oldPassword:"",
newPassword:"",
confirmPassword:""
})
return(

<div className="update_password">  
<div className="password_container">
 <img
src="/image/profile-arrow.png"
alt="arrow"
className="password-arrow"
   onClick={() => navigate("/profile")}
        style={{ cursor: "pointer" }}
/> 
<h1 className="change_password1">Update Password</h1>
</div>
<div className="change-password-container">
<img
src="/image/change_profile_password.png"
alt="profile_password"
className="update_profile_password"
/>
</div>
<div className="Update-password">
<h1 className="password">Update Password</h1>
<p className="account-sequrity">Update your password to keep <br/>your account secuer</p>



<label className="old-password">Old Password</label>
<div className="input_old_password">
 <img src="/image/password.png" alt="password" className="old-password-icon" />    
<input type="password" 
placeholder="Enter your old password"
 value={oldPassword}
 onChange={(e) => setOldPassword(e.target.value)}
 required
 />

<img src="/image/password eye.png" alt="password eye" className="old-password-eye-icon"/>
</div>

<label className="new-password">New Password</label>
<div className="input-new-password">
  <img src="/image/password.png" alt="password" className="new-password-icon" />    
 <input type="password" 
 placeholder="Enter your new password" 
 value={newPassword}
 onChange={(e) => setNewPassword(e.target.value)}
 required
 />

<img src="/image/password eye.png" alt="password eye" className="new-password-eye-icon"/>
</div>


<label className="confirm-password">Confirm Password</label>
<div className="input-confirm-password">
  <img src="/image/password.png" alt="password" className="confirm-password-icon" />    
 <input type="password" 
 placeholder="Enter your confirm password" 
 value={confirmPassword}
 onChange={(e) => setConfirmPassword(e.target.value)}
 required
 />

<img src="/image/password eye.png" alt="password eye" className="confirm-password-eye-icon"/>
</div>
<button className="update-password">Update Password</button>

</div>
</div>











    
);



    
}


export default ChangePassword;