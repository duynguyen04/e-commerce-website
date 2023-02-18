import { useEffect, useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import classes from "./RegisterPage.module.css";
const LoginPage = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [data, setdata] = useState([]);
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneInputRef = useRef();

  //luu data xuong local
  let userArr = JSON.parse(localStorage.getItem("users")) || [];
  const currentUser = JSON.parse(localStorage.getItem("current")) || {};

  const savedataLocal = (data) => {
    localStorage.setItem("current", JSON.stringify(data));
  }; //lay data tu local
  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const Submit = () => {
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;

    const validateForm = () => {
      let checked = false;
// check input
      if (emailInput === "" || passwordInput == "") {
        alert("Nhap Input");
        checked = false;
        return;
      }
      for (let i = 0; i < userArr.length; i++) {
        if (
          emailInput == userArr[i].emailInput &&
          passwordInput == userArr[i].passwordInput
        ) {
          currentUser.name = userArr[i].nameInput;
          checked = true;
          return checked;
        }
      }
      alert("Incorrect username or password");
      return checked;
    };
    let validate = validateForm();

    if (validate) {
      currentUser.email = emailInput;
      currentUser.password = passwordInput;
      setdata(currentUser);
      savedataLocal(currentUser);
      passwordInputRef.current.value = "";
      emailInputRef.current.value = "";
      navigate("/");
    } else {
      passwordInputRef.current.value = "";
    }
    console.log(validate);
  };
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: "url(/image/banner1.jpg)" }}
    >
      <div className={classes.item}>
        <h4>Sign In</h4>
        <input
          ref={emailInputRef}
          id="email"
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordInputRef}
          id="password"
          type="password"
          placeholder="Password"
        />
        <button onClick={Submit}>Sign In</button>
        <p>
          Create an account?<a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
