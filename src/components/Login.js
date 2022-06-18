import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [holdArray, setHoldArray] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [loggedInName, setLoggedInName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://comics-marketplace.herokuapp.com/api/login",
      data: {
        username: username,
        password: password,
      },
    }).then((res) => setHoldArray(res.data));

    setIsLoggedIn(holdArray[0]);
    setLoggedInName(holdArray[1]);
    console.log(isLoggedIn);
  };

  return (
    <>
      <div>login</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      {isLoggedIn ? (
        <div className="login">Logged in as {loggedInName}!</div>
      ) : (
        <div>Incorrect username or password!</div>
      )}
    </>
  );
}

export default Login;
