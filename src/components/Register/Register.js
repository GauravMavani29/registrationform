import React, { useState } from "react";
import styles from "./Register.module.css";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
function Register() {
  const { register, handleSubmit, errors } = useForm();
  const [message, setMessage] = useState();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    setMessage((prev) => ({ ...prev, data }));
    localStorage.setItem("userdata", JSON.stringify(data));
    var x = localStorage.getItem("userdata");
    history.push("/login");
  };
  // console.log(message);
  return (
    <div
      className={`${styles.container} container-fluid d-flex align-iteams-center justify-content-center`}
    >
      <div className={styles.registrationFormContainer}>
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.registrationFormLegend} border rounded p-1 text`}
          >
            Registration Form
          </legend>
          <form action="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="form-group">
              <label htmlFor="inputForEmail">Email address</label>
              <span className="mandatory">*</span>
              <input
                id="inputForEmail"
                name="email"
                type="email"
                className="form-control"
                aria-describedby="Enter email address"
                placeholder="Enter email address"
                ref={register({
                  required: {
                    value: true,
                    message: "Please enter your email address",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid email address",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are allowed",
                  },
                  maxLength: {
                    value: 255,
                    message: "Maximum 255 characters are allowed",
                  },
                })}
              />
              {errors.email && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="inputForName">Your Name</label>
              <span className="mandatory">*</span>
              <input
                type="text"
                id="inputFoName"
                name="fname"
                className="form-control"
                aria-describedby="Enter your name"
                placeholder="Enter your name"
                ref={register({
                  required: {
                    value: true,
                    message: "Enter your name",
                  },
                })}
              />
              {errors.fname && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.fname.message}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="inputForPassword">Password</label>
              <span className="mandatory">*</span>
              <input
                type="password"
                name="password"
                id="inputFoPassword"
                className="form-control"
                placeholder="Enter password"
                ref={register({
                  required: {
                    value: true,
                    message: "Enter your password",
                  },
                })}
              />
              {errors.password && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="d-flex align-iteams-center justify-content-center">
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <button className="btn btn-link">
                <Link to="/login">Cancel</Link>
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default Register;
