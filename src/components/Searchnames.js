import axios from "axios";
import React, { useState } from "react";

function Searchnames() {
  const [find, setFind] = useState("");
  const [names, setNames] = useState([]);

  const handleChange = async (e) => {
    e.preventDefault();
    const search = e.target.value;
    setFind(search);

    const res = await axios({
      method: "POST",
      url: "http://comics-marketplace.herokuapp.com/api/searchbar",
      data: {
        find: search,
      },
    });

    const filteredNames = search ? res.data : [];
    setNames(filteredNames);
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
      <div className="searchbar"></div>
    </>
  );
}

export default Searchnames;
