import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password);
  const isValid = isEmailValid && isPasswordValid;

  const handleEmailBlur = () => {
    if (!isEmailValid) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
    setEmailFocus(emailFocus);
  };

  const handlePasswordBlur = () => {
    if (!isPasswordValid) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
    setPasswordFocus(passwordFocus);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="left">
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Register</p>
          <hr style={{ opacity: 0 }} />
          <form onSubmit={handleSubmit}>
            <h6 style={{ marginTop: "25px", fontWeight: "bold" }}>Email</h6>
            <input
              className="input-handle"
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onBlur={handleEmailBlur}
            />
            {emailError && <p style={{ color: "red" }}>{emailError}</p>}
            <h6 style={{ marginTop: "25px", fontWeight: "bold" }}>Password</h6>
            <input
              className="input-handle"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onBlur={handlePasswordBlur}
            />
            {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

            <hr style={{ opacity: 0 }} />

            <Button
              onClick={() => {
                navigate("/login");
              }}
              className="bt"
              variant="contained"
              type="submit"
              disabled={!isValid}
              style={{
                borderRadius: "30px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              REGISTER
            </Button>
            <hr style={{ opacity: 0 }} />
            <h6>
              Already a member?
              <span
                style={{ color: "#ad0f63", cursor: "pointer" }}
                class="highlight"
                onClick={() => {
                  navigate("/login");
                }}
              >
                -Login Here!
              </span>
            </h6>
          </form>
        </div>

        <div className="right">
          <img src={require("../pic.jpg")} alt="logo" />
        </div>
      </div>
    </>
  );
}
