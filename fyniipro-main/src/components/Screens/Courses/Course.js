import React from "react";
import { useEffect, useState } from "react";
import logo from "./iit.png";
import logo1 from "./ibm.png";
import logo2 from "./google.jfif";
import "./course.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import "./course.css";
import Navbar from "../../Navigation/Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Course() {
  const [item1, setitem1] = useState("btn-1");
  const [item2, setitem2] = useState("btn-2");
  const [item3, setitem3] = useState("btn-3");
  const [item4, setitem4] = useState("btn-4");
  const [item5, setitem5] = useState("btn-5");
  useEffect(() => {
    const interval = setInterval(() => {
      const temp1 = item1;
      const temp2 = item2;
      const temp3 = item3;
      const temp4 = item4;
      const temp5 = item5;
      setitem1(temp2);
      setitem2(temp3);
      setitem3(temp4);
      setitem4(temp5);
      setitem5(temp1);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <nav style={{ marginTop: "5%" }} className="navu" id="dr"></nav>
      <div id="title" >
        <h1
          className="big-heading"
          id="blink"
          style={{
            width: "100%",
            fontSize: "4rem",
            backgroundColor: "#96DEB2",
            color: "black",
            
          }}
        >
          Short term skill courses for your career growth!
        </h1>
      </div>
      <div style={{"padding":"10px 0"}}>
        <div className="slider2">
          <input type="radio" name="toggle" id={item1} defaultChecked />
          <input type="radio" name="toggle" id={item2} />
          <input type="radio" name="toggle" id={item3} />
          <input type="radio" name="toggle" id={item4} />
          <input type="radio" name="toggle" id={item5} />
          <div className="slider-controls">
            <label htmlFor="btn-1" />
            <label htmlFor="btn-2" />
            <label htmlFor="btn-3" />
            <label htmlFor="btn-4" />
            <label htmlFor="btn-5" />
          </div>
          <ul className="slides">
            <li className="slide" style={{ backgroundColor: "#DAEE01" }}>
              <div className="slide-content">
                <h2 className="jnui">In real world, Only skill matters!</h2>
              </div>
              <p className="slide-image">
                <img
                  src="https://images.unsplash.com/photo-1616337865743-bd29011bc36d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fHNraWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                  alt="stuff"
                  width={320}
                  height={240}
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#77DD77" }}>
              <div className="slide-content">
                <h2 className="jnui">
                  Build your career by building skillsets.
                </h2>
              </div>
              <p className="slide-image">
                <img
                  src="https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraWxsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                  alt="stuff"
                  width={320}
                  height={240}
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#DAE5D0" }}>
              <div className="slide-content">
                <h2 className="jnui">Every course is carefully selected.</h2>
              </div>
              <p className="slide-image">
                <img
                  src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400"
                  alt="stuff"
                  // width={320}
                  // height={240}
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#A0BCC2" }}>
              <div className="slide-content">
                <h2 className="jnui">Pay in EMIs.</h2>
              </div>
              <p className="slide-image">
                <img
                  src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29pbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                  alt="stuff"
                  // width={320}
                  // height={240}
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#F9EBC8" }}>
              <div className="slide-content">
                <h2 className="jnui">
                  Hassle free, Easy to find &amp; Navigate Courses.
                </h2>
              </div>
              <p className="slide-image">
                <img
                  src="https://images.unsplash.com/photo-1615752865424-62638daceeae?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWFzeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400"
                  alt="stuff"
                  // width={320}
                  // height={240}
                />
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Course section */}

      <section className="course-container" style={{"padding":" 10px 0px","backgroundColor":"#333"}}>
        <MDBCard
          style={{
            maxWidth: "33%",
            borderStyle: "groove",
            borderRadius: "12px",
          }}
        >
          <MDBCardImage
            style={{ height: "250px", width: "400px" }}
            src="https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            position="top"
            alt="..."
          />
          <img
            src={logo}
            alt=""
            className="logo1"
            style={{ position: "absolute" }}
          />
          <MDBCardBody>
            <MDBCardTitle
              style={{ margin: "20px", fontSize: "20px", color: "#2a6496" }}
            >
              Learn Quantum Computing from IBM
            </MDBCardTitle>
            <MDBCardText className="So" style={{ lineHeight: "2" }}>
              <i
                style={{ margin: "10px", marginLeft: "30px", color: "#2a6496" }}
                className="fa-solid fa-user-graduate"
              >
                {" "}
                Begineer
              </i>
              <div
                style={{ margin: "10px", marginLeft: "30px", color: "#2a6496" }}
                className="fa-solid fa-clock"
              >
                {" "}
                3 months{" "}
              </div>
              <div
                style={{ margin: "10px", marginLeft: "30px", color: "#2a6496" }}
                className="fa-solid fa-indian-rupee-sign"
              >
                {" "}
                500
              </div>
              <MDBBtn
              href="/CoursePage"
              style={{
                margin: " 0 38%",
                backgroundColor: "yellow",
                width: "75px", height: "50px", padding: "10px",border: "none","background-color": "rgb(71, 153, 51)",  color: "white","border-radius": "5px",
  "font-weight": "bold",
  "font-size": "18px",
  "cursor": "pointer",
  "margin-top": "15px",
  "margin-bottom": "30px"
              }}
            >
              Enroll
            </MDBBtn>
            </MDBCardText>
           
          </MDBCardBody>
        </MDBCard>
        <MDBCard
          style={{
            maxWidth: "33%",
            borderStyle: "groove",
            borderRadius: "12px",
          }}
        >
          <MDBCardImage
            style={{ height: "250px", width: "400px" }}
            src="https://images.unsplash.com/20/cambridge.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            position="top"
            alt="..."
          />
          <img
            src={logo2}
            alt=""
            className="logo1"
            style={{ position: "absolute" }}
          />
          <MDBCardBody>
            <MDBCardTitle
              style={{ margin: "20px", fontSize: "20px", color: "#2a6496" }}
            >
              Learn Data Science from Google
            </MDBCardTitle>
            <MDBCardText className="So" style={{ lineHeight: "2" }}>
              <i
                style={{ margin: "10px", marginLeft: "30px", color: "#2a6496" }}
                className="fa-solid fa-user-graduate"
              >
                {" "}
                Begineer
              </i>
              <div
                style={{ margin: "10px", marginLeft: "30px", color: "#2a6496" }}
                className="fa-solid fa-clock"
              >
                {" "}
                3 months{" "}
              </div>
              <div
                style={{ margin: "10px", marginLeft: "30px", color: "#2a6496" }}
                className="fa-solid fa-indian-rupee-sign"
              >
                {" "}
                500
              </div>
              <MDBBtn
              href="/"
              style={{
                margin: " 0 38%",
                backgroundColor: "yellow",
                width: "75px", height: "50px", padding: "10px",border: "none","background-color": "rgb(71, 153, 51)",  color: "white","border-radius": "5px",
  "font-weight": "bold",
  "font-size": "18px",
  "cursor": "pointer",
  "margin-top": "15px",
  "margin-bottom": "30px"
              }}
            >
              Enroll
            </MDBBtn>
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
        <MDBCard
          style={{
            maxWidth: "33%",
            borderStyle: "groove",
            borderRadius: "12px",
          }}
        >
          <MDBCardImage
            style={{ height: "250px", width: "400px" }}
            src="https://images.unsplash.com/photo-1547653872-052e3539decc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHVuaXZlcnNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            position="top"
            alt="..."
          />
          <img
            src={logo1}
            alt=""
            className="logo1"
            style={{ position: "absolute" }}
          />
          <MDBCardBody>
            <MDBCardTitle
              style={{ margin: "20px", fontSize: "20px", color: "#2a6496" }}
            >
              Learn Quantum Computing from IBM
            </MDBCardTitle>
            <MDBCardText className="So" style={{ lineHeight: "2" }}>
              <i
                style={{ margin: "10px", marginLeft: "30px", color: "#2a6496" }}
                className="fa-solid fa-user-graduate"
              >
                {" "}
                Begineer
              </i>
              <div
                style={{ margin: "10px", marginLeft: "30px", color: "#2a6496" }}
                className="fa-solid fa-clock"
              >
                {" "}
                3 months{" "}
              </div>
              <div
                style={{ margin: "10px", marginLeft: "30px", color: "#2a6496" }}
                className="fa-solid fa-indian-rupee-sign"
              >
                {" "}
                500
              </div>
              <MDBBtn
              href="/"
              style={{
                margin: " 0 38%",
                backgroundColor: "yellow",
                width: "70px", height: "50px", padding: "10px",border: "none","background-color": "rgb(71, 153, 51)",  color: "white","border-radius": "5px",
  "font-weight": "bold",
  "font-size": "18px",
  "cursor": "pointer",
  "margin-top": "15px",
  "margin-bottom": "30px",
              }}
            >
              Enroll
            </MDBBtn>
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </section>
      <Navbar />
      <Footer />
    </div>
  );
}
