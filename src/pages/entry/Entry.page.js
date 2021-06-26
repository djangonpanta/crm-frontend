import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import "./entry.style.css";
export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up all the form!");
    }
    //call api to submit the form
    console.log(email, password);
  };
  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("please enter the email");
    }
    console.log(email);
  };
  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };
  return (
    <div className="entry-page bg-info">
      <Jumbotron className="form-box">
        {formLoad === "login" && (
          <LoginForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            email={email}
            password={password}
            formSwitcher={formSwitcher}
          />
        )}
        {formLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            email={email}
            formSwitcher={formSwitcher}
          />
        )}
      </Jumbotron>
    </div>
  );
};
