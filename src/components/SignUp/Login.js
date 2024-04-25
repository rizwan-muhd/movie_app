import React from "react";
import "./SignUp.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

function Login() {
  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    console.log(data);
    // Handle form submission
    try {
      await axios
        .post("http://localhost:8001/api/user/login", data)
        .then((response) => {
          localStorage.setItem("accessToken", response.data.token);
          window.location = "/home";

          console.log(response.data);
          //   setMovie(response.data.results);
        })
        .catch((err) => {
          console.log("error", err);
        });
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div className="overLay">
      {/* <div className="backdrop"></div> */}
      <div className="overLayContent">
        <h1>Login In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  placeholder="Email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                />
              )}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  type="password"
                  {...field}
                  placeholder="Password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
              )}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <div className="checkbox-part">
          <p>Credentials</p>
          <p>email: rizwankk448@gmail.com</p>
          <p>Password:123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
