import axios from "axios";
import React, { useState } from "react";

function Searchnames() {
  const [find, setFind] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setFind(e.target.value);

    axios({
      method: "POST",
      url: "http://localhost:5000/api/searchbar",
      data: {
        find: find,
      },
    }).then((res) => setNames(res.data));
  };

  const holdNames = [];
  for (let i = 0; i < names.length; i++) {
    holdNames.push(names[i].username);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search for names here"
        onChange={handleChange}
      />
      {holdNames.map((e) => (
        <h1>{e}</h1>
      ))}
    </>
  );
}

export default Searchnames;
