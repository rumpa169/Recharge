import "./UpdateProfile.css";
import { useNavigate } from "react-router-dom";
function UpdateProfile() {
const navigate = useNavigate ();    
return(
<div className="profile_container">
 <img
src="/image/profile-arrow.png"
alt="arrow"
className="profile-arrow" 
   onClick={() => navigate("/profile")}
        style={{ cursor: "pointer" }}
/> 
<span className="jhone">Update Profile</span>

<div className="profile_jhone">
<img    
src="/image/jhone.png"
alt="jhone"
className="jhone-profile"
/>
</div>

<label className="customer">Name</label>
<div className="customer_input">
<img
src="/image/user.png"
alt="user"
className="user"
/>    
<input
type="name"
className="customer_name1"
placeholder="Enter your name"
/>
</div>


<label className="customer_email">Email</label>
<div className="customer_email_input">
<img
src="/image/user_email.png"
alt="user_email"
className="customer-email"
/>
<input
type="email"
className="enter-email1"
placeholder="Enter your email"
/>
</div>


<label className="customer_phone">Phone Number</label>
<div className="customer_phone_input">
<img
src="/image/phone1.png"
alt="user_phone"
className="customer-phone"
/>
<input
type="phone"
className="enter-phone-number"
placeholder="Enter your phone number"
/>
</div>
<button className="continue_btn">Continue</button>




</div>








)    
}












export default UpdateProfile;









