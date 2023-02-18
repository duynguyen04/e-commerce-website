import { useEffect, useState, useRef } from "react";
import classes from "./RegisterPage.module.css";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const navigate = useNavigate();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneInputRef = useRef();

  //luu data xuong local
  let userArr = JSON.parse(localStorage.getItem("users")) || [];
  const savedataLocal = (data) => {
    localStorage.setItem("users", JSON.stringify(data));
  }; //lay data tu local
  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  const Submit = () => {
    const nameInput = nameInputRef.current.value;
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;
    const phoneInput = phoneInputRef.current.value;
    // setemail(emailInput);

    const validateForm = () => {
      let checked = true;
      for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].emailInput === emailInput) {
          alert("Email da ton tai");
          checked = false;
          break;
        }
      }
      if (
        nameInput === "" ||
        emailInput === "" ||
        passwordInput == "" ||
        phoneInput === ""
      ) {
        alert("Nhap Input");
        checked = false;
        return;
      }
      if (passwordInput.length <= 7) {
        alert("Mat khau co it nhat 8 ky tu");
        checked = false;
        return;
      }
      return checked;
    };
    let validate = validateForm();
    // console.log(userArr);
    // validateForm(emailInput);
    if (validate) {
      userArr.push({ nameInput, emailInput, passwordInput, phoneInput });
      savedataLocal(userArr);
      passwordInputRef.current.value = "";
      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      phoneInputRef.current.value = "";
      navigate("/login");
    }
    // if (validate) {
    //   setname("");
    //   setemail("");
    //   setpassword("");
    //   setphone("");
    // }
    console.log(validate);
  };
  return (
    <div
      className={classes.container}
      style={{ backgroundImage: "url(/image/banner1.jpg)" }}
    >
      <div className={classes.item}>
        <h4>Sign Up</h4>
        <input
          ref={nameInputRef}
          id="name"
          type="text"
          placeholder="Full name"
        />
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
        <input
          ref={phoneInputRef}
          id="phone"
          type="number"
          placeholder="Phone"
        />
        <button onClick={Submit}>Sign Up</button>
        <p>
          Login?<a href="/login">Click</a>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;
