import React, { useState } from "react";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [value, setValue] = useState({
    email: null,
    password: null,
  });
  const history = useHistory();
  const onSubmit = (data) => {
    var x = localStorage.getItem("userdata");
    var temp = JSON.parse(x);
    if (data.email === temp.email && data.password === temp.password) {
      console.log("done");
      history.push("/dashboard");
    } else if (data.email !== temp.email && data.password !== temp.password) {
      setValue({
        email: "Enter valid email",
        password: "Enter valid password",
      });
    } else if (data.email !== temp.email) {
      setValue({
        email: "Enter valid email",
        password: "",
      });
    } else if (data.password !== temp.password) {
      setValue({
        email: "",
        password: "Enter valid password",
      });
    }
  };
  return (
    <div
      className={`${styles.container} container-fluid d-flex align-iteams-center justify-content-center`}
    >
      <div className={styles.registrationFormContainer}>
        <fieldset className="border p-3 rounded">
          <legend
            className={`${styles.registrationFormLegend} border rounded p-1 text`}
          >
            Login Form
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
                    message: "Enter email address",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter valid email address",
                  },
                })}
              />
              {errors.email && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.email.message}
                </span>
              )}
              <span className={`${styles.errorMessage} mandatory`}>
                {value.email}
              </span>
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
                    message: "Enter password",
                  },
                })}
              />
              {errors.password && (
                <span className={`${styles.errorMessage} mandatory`}>
                  {errors.password.message}
                </span>
              )}
              <span className={`${styles.errorMessage} mandatory`}>
                {value.password}
              </span>
            </div>
            <div className="d-flex align-iteams-center justify-content-center">
              <button type="submit" className="btn btn-outline-primary">
                Login
              </button>
              <button className="btn btn-link">
                <Link to="/register">Registration</Link>
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default Login;
