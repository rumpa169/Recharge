import "./History.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function History(){
const navigate = useNavigate ();

return(
<div className="History-container">
<h2 className="history-title">History</h2>   

{/*search*/}
<div className="search-box">   
<img
src="/image/Search.png"
alt="search"
className="search-icon"/>

<input
type="search"
placeholder="Search customer name"
className="search"/>
</div>


{/* Card1 */}
<div className="History-info">
<div className="outer-elena">
  <img
    src="/image/Elena Sen.png"
    alt="Elena Sen"
    className="elena-image"
  />

  <div className="customer-detail">
    <span className="name">Elena Sen</span>
    <span className="number">9775637390</span>
    <span className="elena-price">$30</span>
  </div>
</div>
  <div className="outer-rajesh">
    <img
      src="/image/Rajesh Roy.png"
      alt="Rajesh Roy"
      className="rajesh-image"
    />

 
      <div className="rajesh-detail">
        <span className="customer-name-rajesh">Rajesh Roy</span>
        <span className="customer-number">9975637899</span>
     <span className="Price">$40</span>
      </div>
  </div>
</div>
<div className="History-info1">
<div className="outer-Avijit">
<img
src="/image/Avijit.png"
alt="Avijit"
className="avijit-image"
/>
<div className="avijit-details">
<span className="Customer_name">Avijit Sen</span>
<span className="Customer-number">7897508679</span>
<span className="Customer-price">$60</span>
</div>
</div>
<div className="outer-rahul">
<img
src="/image/Rahul.png"
alt="Rahul"
className="rahul-image"
/>
<div className="rahul-details">
<span className="Customer_Name">Rahul Roy</span>
<span className="Customer_Number">7998508670</span>

<span className="Customer-price">$65</span>
</div>
</div>
</div>
<div className="History-info2">
<div className="outer-kaberi">
<img
src="/image/Kaberi.png"
alt="Kaberi"
className="kaberi-image"
/>
<div className="kaberi-details">
<span className="Customer-Name">Kaberi Jana</span>
<span className="Customer-Number">8099508570</span>
<span className="Customer-Price">$55</span>
</div>
</div>
<div className="outer-susmita">
<img
src="/image/Susmita.png"
alt="Susmita"
className="susmita-image"
/>
<div className="susmita-details">
<span className="customer_susmita">Susmita Samanta</span>
<span className="customer-Number">9778568690</span>

<span className="customer-Price">$60</span>
</div>
</div>
</div>






{/*Card*/}
<div className="outer-menu">

  <div className="menu-bar" onClick={() => navigate("/home")}>
    <img
      src="/image/home.png"
      alt="home"
      className="menu-icons4"
    />
    <p className="menu-bar-text">Home</p>
  </div>

  <div className="menu-bar" onClick={() => navigate("/history")}>
    <img
      src="/image/history.png"
      alt="history"
      className="menu-icons5"
    />
    <p className="menu-bar-text active-text">History</p>
  </div>

  <div className="menu-bar" onClick={() => navigate("/profile")}>
    <img
      src="/image/profile.png"
      alt="profile"
      className="menu-icons6"
    />
    <p className="menu-bar-text">Profile</p>
  </div>

</div>
</div>


);
    
}
export default History;