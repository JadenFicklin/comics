import axios from "axios";
import React, { useState } from "react";

function Getpasswords() {
  const [passwords, setPasswords] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    axios({
      method: "GET",
      url: "http://localhost:5000/api/getpasswords",
    }).then((res) => setPasswords(res.data));
  };

  const holdPasswords = [];
  for (let i = 0; i < passwords.length; i++) {
    holdPasswords.push(passwords[i].password);
  }

  return (
    <>
      <button onClick={handleClick}>get passwords</button>
      {holdPasswords.map((e) => (
        <h1>{e}</h1>
      ))}
    </>
  );
}

export default Getpasswords;
