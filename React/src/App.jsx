import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Splash from "./Splash";
import Signup from "./Signup";
import Signin from "./Signin";
import Home from "./Home";
import History from "./History";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import ChangePassword from "./ChangePassword";
function App() {
  return(
<BrowserRouter>
<Routes>
  <Route path="/" element={<Splash/>}/>
<Route path="/signup"  element={<Signup/>}/>
<Route path="/signin"  element={<Signin/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/history" element={<History/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/updateprofile" element={<UpdateProfile/>}/>
<Route path="/changepassword" element={<ChangePassword/>}/>
</Routes>
</BrowserRouter>
  ) 
  
}
export default App;