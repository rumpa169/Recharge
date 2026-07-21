import "./Splash.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Signup");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="Splash-container">
      <img
        src="/image/Splash.png"
        alt="Splash"
        className="Splash-image"
      />
      <div className="text">
        Sequrity.Fast.Easy
      </div>
    </div>
  );
}

export default Splash;