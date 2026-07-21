import "./Profile.css";

import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/updateprofile");
  };

  const goToChangePassword = () => {
    navigate("/changepassword");
  };


   



return( 
<div className="profile-container">
<h2 className="profile">Profile</h2>
<img src="/image/customer.png"
alt="customer"
className="Customer_image"
/>
<span className="Name">Jhone Sen</span>
<p className="customer_number">
<span className="number-label">Phone Number:- </span>
<span className="jhone_value1">7797059733</span>
</p>
<p className="Email_id">
<span className="jhone_email">Email:- </span>
<span className="jhone_value">jh@gmail.com</span>
</p>
{/*Outer-Profile-box*/}
<div className="Outer-Profile">
{/*outer-update-profile*/}
<div className="outer-upadte-profile">
<img
src="/image/profile1.png"
alt="profile1"
className="profile1-icon"
/>   
<span className="update_profile">Update Profile</span>
<img
src="/image/arrow.png"
alt="arrow"
className="arrow-icon" onClick={goToProfile}
style={{cursor: "pointer"}}
/>
</div>

{/*outer-change-password*/}

<div className="outer-change-password">
<img
src="/image/password1.png"
alt="password"
className="password1-icon"
/>
<span className="Change-Password"> Change Password</span>
<img
src="/image/arrow1.png"
alt="arrow1"
className="arrow1-icon" onClick={goToChangePassword}
style={{cursor: "pointer"}}
/>
</div>
{/*outer-terms-condition*/}
<div className="outer-terms-condition">
<img
src="/image/terms & condition1.png"
alt="terms & condition"
className="terms-conditions"
/>
<span className="terms_condition">Terms & Condition</span>
<img
src="/image/arrow2.png"
alt="arrow2"
className="arrow2-icon"
/>
</div>

<button className="logout-button">
<img src="/image/logout.png"  
alt="logout" 
className="logout-icon"/>

Logout
</button>



{/*Card*/}
<div className="outer-menu1">

  <div className="menu-bar" onClick={() => navigate("/home")}>
    <img
      src="/image/home.png"
      alt="home"
      className="menu-icons41"
    />
    <p className="menu-bar-text1">Home</p>
  </div>

  <div className="menu-bar1" onClick={() => navigate("/history")}>
    <img
      src="/image/history.png"
      alt="history"
      className="menu-icons51"
    />
    <p className="menu-bar-text ">History</p>
  </div>

  <div className="menu-bar1" onClick={() => navigate("/profile")}>
    <img
      src="/image/profile.png"
      alt="profile"
      className="menu-icons61"
    />
    <p className="menu-bar-text1 active-text1">Profile</p>
  </div>




</div>
</div>


</div>


 );
   
}
export default Profile;