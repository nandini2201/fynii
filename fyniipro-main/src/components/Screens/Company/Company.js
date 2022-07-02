import React from "react";

export default function Company() {
  return (
    <div>
      <div>
        <img
          style={{ width: "100%", height: "30rem", borderRadius: "0" }}
          className="must"
          src={require("./img/development.jpg")}
          alt=""
        />
        <img
          style={{ width: "50%", height: "25rem" }}
          src={require("./img/ibm.png")}
          alt=""
        />
        <h1>IBM</h1>
        <p>IT consulting and technology Company</p>
      </div>
      <hr />
      <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Posts</a>
        <a href="#">Job</a>
      </div>
      <div className="Home">
        <h1></h1>
      </div>
    </div>
  );
}
