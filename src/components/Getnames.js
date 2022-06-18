import React, { useState } from "react";
import axios from "axios";

function Getnames() {
  const [names, setNames] = useState([]);
  const [clicked, setClicked] = useState(false);

  const holdNames = [];
  for (let i = 0; i < names.length; i++) {
    holdNames.push(names[i].username);
  }
  console.log(holdNames);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
    axios({
      method: "GET",
      url: "http://comics-marketplace.herokuapp.com/api/getnames",
    }).then((res) => setNames(res.data));
  };

  return (
    <>
      <button onClick={handleClick}>get names</button>
      {clicked ? holdNames.map((e) => <h4>{e}</h4>) : []}
    </>
  );
}

export default Getnames;
