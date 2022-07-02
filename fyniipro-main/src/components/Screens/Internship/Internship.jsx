import React from "react";
import "../Courses/course.css"
import "../../styles/style.css"
import Internship1 from "./Internship1.jpg"
import Internship2 from "./Internship2.jpg"
import Internship3 from "./Internship3.jpeg"
import Internship4 from "./Internship4.png"
import Internship5 from "./Internship5.jpg"
import { useEffect, useState } from "react";
export default function Internship() {
  const [item1, setitem1] = useState("btn-1");
  const [item2, setitem2] = useState("btn-2");
  const [item3, setitem3] = useState("btn-3");
  const [item4, setitem4] = useState("btn-4");
  const [item5, setitem5] = useState("btn-5");
  // const [item6, setitem6] = useState("btn-6");
  useEffect(() => {
    const interval = setInterval(() => {
      const temp1 = item1;
      const temp2 = item2;
      const temp3 = item3;
      const temp4 = item4;
      const temp5 = item5;
      // const temp6 = item6;
      setitem1(temp2);
      setitem2(temp3);
      setitem3(temp4);
      setitem4(temp5);
      setitem5(temp1);
      // setitem6(temp1);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <div>
      <section >
        <div className="slider2" style={{ marginTop: "5%" }}>
          <input type="radio" name="toggle" id={item1} defaultChecked />
          <input type="radio" name="toggle" id={item2} />
          <input type="radio" name="toggle" id={item3} />
          <input type="radio" name="toggle" id={item4} />
          <input type="radio" name="toggle" id={item5} />
          {/* <input type="radio" name="toggle" id={item6} /> */}
          <div className="slider-controls">
            <label htmlFor="btn-1" />
            <label htmlFor="btn-2" />
            <label htmlFor="btn-3" />
            <label htmlFor="btn-4" />
            <label htmlFor="btn-5" />
            {/* <label htmlFor="btn-6" /> */}
          </div>
          <ul className="slides">
            <li className="slide" style={{ backgroundColor: "#3CB371" }}>
              <div className="slide-content">
                <h2 className="jnui">In Internship, always choose learning over everything</h2>
              </div>
              <p className="slide-image">
                <img
                  src={Internship1}
                  alt="stuff"
                  style={{width : "100%"}}
                  height={260}
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#FFD700" }}>
              <div className="slide-content">
                <h2 className="jnui">
                Try to Intern at startup or relatively newer companies like Google, Fynii etc.
                 </h2>
              </div>
              <p className="slide-image">
                <img
                  src={Internship2}
                  alt="stuff"
                  width={320}
                  style={{width : "80%", marginLeft:"20%"}}
                  
                  height={260}
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#FFC0CB" }}>
              <div className="slide-content">
                <h2 className="jnui">Internship will have great Impact on your career!</h2>
              </div>
              <p className="slide-image">
                <img
                  src={Internship3}
                  alt="stuff"
                  width={320}
                  height={260}
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#A0BCC2" }}>
              <div className="slide-content">
                <h2 className="jnui">Don't Intern with just any company! Be selective in choosing!!</h2>
              </div>
              <p className="slide-image">
                <img
                  src={Internship4}
                  alt="stuff"
                  width={320}
                  style={{width : "70%", marginLeft:"30%"}}
                  height={260}
                />
              </p>
            </li>
            <li className="slide" style={{ backgroundColor: "#F9EBC8" }}>
              <div className="slide-content">
                <h2 className="jnui">
                Pursue Internship to get ahead of your peers!
                </h2>
              </div>
              <p className="slide-image">
                <img
                  src={Internship5}
                  alt="stuff"
                  width={320}
                  height={260}
                />
              </p>
            </li>
            
          </ul>
        </div>
      </section>
    </div>
  );
}