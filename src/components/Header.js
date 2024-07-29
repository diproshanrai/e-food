import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header Rend")

  useEffect(()=>{
    console.log("useEffect Rendered")}, [btnName]
);


  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
        <h3>e-Food</h3>
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="/">Blog</a>
        <a href="/">Contact Us</a>
        <a href="/">Cart</a>
        <button
          className="login"
          onClick={() => {
            btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
          }}
        >{btnName}</button>
      </div>
    </div>
  );
};

export default Header;
