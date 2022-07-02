import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Screens/Register/Register";
import Yourself from "../Screens/Register/Yourself";
import Checklogin from "../Screens/Register/Checklogin";
import Home from "../Screens/Home/Home";
import Internship from "../Screens/Internship/Internship2";
import Course from "../Screens/Courses/Course";
import Jobs from "../Screens/Job/Jobs2";
import SignIn from "../Screens/SignIn/SignIn";
import Texteditor from "../Screens/TextEditor/Texteditor";
import CoursePage from "../Screens/CoursePage/CoursePage";
import Profile from "../Screens/Profile/Profile";
import Employer from "../Screens/Employer/Employer";
import Company from "../Screens/Company/Company";
// import ButtonPage from '../Screens/Internship/Modal/ButtonPage';
// import About from "../Screens/About/About"
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Checklogin />} />
        <Route exact path="/SignIn" element={<SignIn />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Yourself" element={<Yourself />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Internship" element={<Internship />} />
        <Route exact path="/course" element={<Course />} />
        <Route exact path="/job" element={<Jobs />} />
        <Route exact path="/texteditor" element={<Texteditor />} />
        <Route exact path="/CoursePage" element={<CoursePage />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Employer" element={<Employer />} />
        <Route exact path="/Company" element={<Company />} />
        {/* <Route exact path='/Modal' element={<ButtonPage/>}/> */}
        {/* <Route exact path='/about' element={<About/>}/> */}
        {/* {localStorage.getItem("login") === "true" && <Route path = '/*' element= {<Navbar/>}/>} */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
