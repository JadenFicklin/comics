import axios from "axios";
import React, { useEffect, useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [button, setButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/api/register",
      data: {
        username: username,
        password: password,
      },
    }).then((res) => console.log(res.data));
    setButton(true);
  };

  if (button) {
    console.log("true!");
  } else {
    console.log("false!");
  }
  return (
    <>
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
        <button type="submit">Submit</button>
        {button ? (
          <div className="account-created">account created!</div>
        ) : null}
      </form>
    </>
  );
}

export default Register;
