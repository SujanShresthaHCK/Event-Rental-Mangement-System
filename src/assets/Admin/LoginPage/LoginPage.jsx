import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = ({ handleLoginCallback }) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  useEffect(() => {
    fetchEventData();
  }, []);

  const fetchEventData = () => {
    setLoading(true);
    axios
      .get(
        "http://localhost:9000/adminroute?_sort=createdAt&_order=desc&_limit=1"
      )
      .then((response) => {
        setLoading(false);
        const adminData = response.data.data.pop();
        setUsername(adminData.username);
        setPassword(adminData.password);
        enqueueSnackbar("Event data retrieved successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error retrieving event data", { variant: "error" });
        console.log(error);
      });
  };

  const handleLogin = () => {
    if (inputUsername === username && inputPassword === password) {
      // Call the handleLoginCallback function provided by the Admin component
      handleLoginCallback();
    } else {
      setInvalidCredentials(true);
      setInputUsername("");
      setInputPassword("");
      enqueueSnackbar("Invalid username or password", { variant: "error" });
    }
  };

  return (
    <section className="login-wrapper">
      <div className="login-container">
        <img src="./images/logo.png" alt="" className="logo" />

        <div className="login-form">
          <form>
            <h1>Username</h1>
            <input
              type="text"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
            />
            <h1>Password</h1>
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </form>
        </div>
        {invalidCredentials && (
          <p
            className="invalid-credentials-text"
            style={{ color: "red", marginTop: "10px" }}
          >
            Invalid username or password
          </p>
        )}
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </section>
  );
};

export default LoginPage;
