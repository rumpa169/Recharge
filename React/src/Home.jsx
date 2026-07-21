import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
const navigate = useNavigate();  
return(
<div className="customer-container">
<img src="/image/customer.png"
alt="customer"
className="customer-image"

/>
<h2>Welcome back,</h2>
<p>Jhone</p>
<h3>Mobile Recharge</h3>
 <p className="Subtitle">
Instant top-up for your prepaid connection
</p>

<div className="outer-box">

<h4>Mobile Number</h4>
<input
type="number"
className="home-input"
placeholder="Enter your mobile number"
/>

<button className="recharge-btn">
Recharge Now
</button>
</div>
<div className="title-bar">
  <h5>Recent Recharge</h5>
  <h6>View All</h6>
</div>

{/* Card1 */}
<div className="cards">
<div className="outer-box1">
    <img
      src="/image/Elena Sen.png"
      alt="Elena Sen"
      className="image"
    />

    <div className="customer-info">
      <div className="customer-details">
        <span className="customer-name">Elena Sen</span>
        <span className="phone-number">9775637390</span>
      </div>
      </div>
      <span className="price">$30</span>
    </div>
  </div>

  {/* Card 2 */}
  <div className="outer-box2">
    <img
      src="/image/Rajesh Roy.png"
      alt="Rajesh Roy"
      className="image1"
    />

  <div className="customer-info1">
      <div className="customer-details1">
        <span className="customer-name">Rajesh Roy</span>
        <span className="phone-number">9975637899</span>
      </div>
      </div>
      <span className="price">$40</span>
  </div>



<div className="title-bar">
<p className="plan-name1">Popular Plans</p>
</div>
<div className="button-container">
<button className="custom-btn">Unlimited</button>
<button className="custom-btn1">Data Only</button>
<button className="custom-btn2">Validity</button>
<button className="custom-btn3">Top Up</button>


</div>
{/*Card 3*/}
<div className="select plan">
<div className="outer-box3">
  <p className="price2">$36</p>
  <p className="duration">28 Day Validity</p>

  <div className="plan-row1">
    <img
      src="/image/mobiledata.png"
      alt="mobile data"
      className="icon1"
    />
    <p className="plan-name">2.5GB/Day + Unlimited Voice</p>
  </div>

  <div className="plan-row2">
    <img
      src="/image/message.png"
      alt="message"
      className="icon2"
    />
    <p className="sms">100 SMS/Day</p>
  </div>

  <div className="plan-row3">
    <img
      src="/image/phone.png"
      alt="call"
      className="icon3"
    />
    <p className="plan">Unlimited Call</p>
  
  <button className="bestplan"> Best Seller</button>
</div>
</div>
</div>

{/*Card 4*/}
<div className="select-plan">
<div className="outer-box4">
  <p className="price3">$72</p>
  <p className="plan-duration">84 Day Validity</p>

  <div className="plan-row4">
    <img
      src="/image/mobiledata.png"
      alt="mobile data"
      className="icon4"
    />
    <p className="plan-name1">5GB/Day</p>
  </div>

  <div className="plan-row5">
    <img
      src="/image/message.png"
      alt="message"
      className="icon5"
    />
    <p className="sms">200 SMS/Day</p>
  </div>

  <div className="plan-row6">
    <img
      src="/image/phone.png"
      alt="call"
      className="icon6"
    />
    <p className="unlimited-plan">Unlimited Call</p>
  
  <button className="bestplan1"> Best Seller</button>
</div>

</div>
</div>

{/*Card 5*/}
<div className="outer-box5">

  <div className="menu-bar" onClick={() => navigate("/home")}>
    <img
      src="/image/home.png"
      alt="home"
      className="menu-icon"
    />
    <p className="menu-bar-text active-text">Home</p>
  </div>

  <div className="menu-bar" onClick={() => navigate("/history")}>
    <img
      src="/image/history.png"
      alt="history"
      className="menu-icon1"
    />
    <p className="menu-bar-text ">History</p>
  </div>

  <div className="menu-bar" onClick={() => navigate("/profile")}>
    <img
      src="/image/profile.png"
      alt="profile"
      className="menu-icon2"
    />
    <p className="menu-bar-text">Profile</p>
  </div>

</div>
</div>








)
    
}

export default Home;