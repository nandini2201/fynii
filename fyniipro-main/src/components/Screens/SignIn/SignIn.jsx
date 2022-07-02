import { useState } from "react";
import FormInput from "../Register/FormInput";
import { useNavigate } from "react-router-dom";
import Radium, { StyleRoot } from "radium";

import "./SignIn.css";

const SignIn = () => {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: " Wrong Password",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://fynii.herokuapp.com/checklogin", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response[0] === "1") {
          localStorage.setItem("login", true);
          localStorage.setItem("username", response[1]);
          navigate("/");
        } else {
          alert("Incorrect Email or password");
        }
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit} style={{ height: "60%" }}>
        <h2
          style={{
            fontSize: "32px",
            margin: "20px 35px",
            color: "green",
            "@media (min-width: 500px)": { display: "none" },
          }}
        >
          Already Member?
        </h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="Style1_button">Sign In</button>
        <a href="/Register">
          New Account?<span>xRegister Here</span>
        </a>
      </form>
    </div>
  );
};
export default SignIn;
