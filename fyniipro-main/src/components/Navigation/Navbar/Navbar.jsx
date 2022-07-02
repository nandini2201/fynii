import React, { useState } from "react";
import "../../styles/navbar.css";
import "../../styles/app.css"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const onNavButtonPress = () => {
    setDropdown(!dropdown);
    document.getElementById("myDropdown").classList.toggle("show");
  };

  const onLogoutPress = () => {
    localStorage.setItem("login", false);
    navigate("/");
  };

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav2" id="navbar">
      <a href="/Home" className="nav__brand">
        <img
          style={{
            width: "100px",
            // height: "38px",
            // overflow: "hidden",
            "margin-top": "15px",
          }}
          alt="img"
          src={require("./logo.png")}
        />
      </a>
      <input
        className="top-input1"
        style={{
          backgroundColor: "#fff",
          width: "20%",
          height: "58%",
          marginTop : "0px",
          marginLeft: "20rem",
          borderRadius: "10px",
          borderStyle: "Solid",
          borderWidth: "2px",
          borderColor: "black",
          outline: "none",
        }}
        type="text"
        placeholder="Search"
        name="search"
        
      />
      {/* <button type="submit"><i class="fa fa-search"></i></button> */}
      <ul className={active}>
        <li className="nav__item"
        style={{ 
            
          backgroundColor: localStorage.getItem("activeNav") === "Home" ? "rgb(71, 153, 51)" : "",
          padding: localStorage.getItem("activeNav") === "Home" ? "10px": "",
          borderRadius: localStorage.getItem("activeNav") === "Home" ?  "5px" : "",
          fontWeight: localStorage.getItem("activeNav") === "Home" ? "bold" : "",
        }}
          
        >
          <a href="/Home" className="nav__link" onClick={()=> {localStorage.setItem("activeNav","Home")}} style={{ color: localStorage.getItem("activeNav") === "Home" ? "white" :"black"}}>
            Home
          </a>
        </li>
        <li className="nav__item"
                    style={{ 
            
                      backgroundColor: localStorage.getItem("activeNav") === "Job" ? "rgb(71, 153, 51)" : "",
                      padding: localStorage.getItem("activeNav") === "Job" ? "10px": "",
                      borderRadius: localStorage.getItem("activeNav") === "Job" ?  "5px" : "",
                      fontWeight: localStorage.getItem("activeNav") === "Job" ? "bold" : "",
                    }}
        >
          <a href="/job" className="nav__link" onClick={()=> {localStorage.setItem("activeNav","Job")}} style={{ color: localStorage.getItem("activeNav") === "Job" ? "white" :"black"}}>
            Job
          </a>
        </li>
        <li className="nav__item"
          style={{ 
            
            backgroundColor: localStorage.getItem("activeNav") === "Internship" ? "rgb(71, 153, 51)" : "",
            padding: localStorage.getItem("activeNav") === "Internship" ? "10px": "",
            borderRadius: localStorage.getItem("activeNav") === "Internship" ?  "5px" : "",
            fontWeight: localStorage.getItem("activeNav") === "Internship" ? "bold" : "",
          }}
        >
          <a href="/Internship" className="nav__link" onClick={()=> {localStorage.setItem("activeNav","Internship")}} style={{ color: localStorage.getItem("activeNav") === "Internship" ? "white" :"black"}}>
            Internship
          </a>
        </li>
        <li
          className="nav__item" 
          style={{ 
            
            backgroundColor: localStorage.getItem("activeNav") === "Course" ? "rgb(71, 153, 51)" : "",
            padding: localStorage.getItem("activeNav") === "Course" ? "10px": "",
            borderRadius: localStorage.getItem("activeNav") === "Course" ?  "5px" : "",
            fontWeight: localStorage.getItem("activeNav") === "Course" ? "bold" : "",
          }}

        
        >
          <a href="/course" className="nav__link" onClick={()=> {localStorage.setItem("activeNav","Course")}} style={{ color: localStorage.getItem("activeNav") === "Course" ? "white" :"black"}}>
            Course
          </a>
        </li>
        {localStorage.getItem("login") === "true" ?
        <li className="nav__item">
          <div>
          <button style={{"margin":"0"}} onClick={onNavButtonPress} class="dropbtn">
            {localStorage.getItem("username")}
          </button>
          </div>
          <div id="myDropdown" class="dropdown-content">
            <a href="/Profile">Profile</a>
            <button class="Logout-button" onClick={onLogoutPress}>
              Logout
            </button>
          </div>
        </li>
        :
        <li className="nav_item">
          <button style={{"margin":"0"}} onClick={()=> {navigate("/SignIn")}} class="dropbtn">
            Sign In
          </button>
        </li>
}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as Icons from "react-icons/fa";
// import "../styles/navbar.css"
// import { navItems } from "./NavItems";
// import Button from "../JSfile/Button";
// import Dropdown from "../JSfile/Dropdown";

// function Navbar() {
//   const [dropdown, setDropdown] = useState(false);

//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/" className="navbar-logo">
//           NATURE
//           <Icons.FaTree />
//         </Link>
//         <ul className="nav-items">
//           {navItems.map((item) => {
//             if (item.title === "Services") {
//               return (
//                 <li
//                   key={item.id}
//                   className={item.cName}
//                   onMouseEnter={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link to={item.path}>{item.title}</Link>
//                   {dropdown && <Dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link to={item.path}>{item.title}</Link>
//               </li>
//             );
//           })}
//         </ul>
//         <Button />
//       </nav>
//     </>
//   );
// }

// export default Navbar;
