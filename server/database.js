require("dotenv").config();
const { PORT, DATABASE_URL } = process.env;
const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");

const app = express();

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

// endpoints;
//register
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  return sequelize
    .query(
      `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`
    )
    .then((result) => res.send(result[0]).status(200));
});

//getnames
app.get("/api/getnames", async (req, res) => {
  return sequelize
    .query(`SELECT * FROM users`)
    .then((result) => res.send(result[0]).status(200));
});

//getpasswords
app.get("/api/getpasswords", async (req, res) => {
  return sequelize
    .query(`SELECT * FROM users`)
    .then((result) => res.send(result[0]).status(200));
});

//post searchbar
app.post("/api/searchbar", async (req, res) => {
  const { find } = req.body;
  return await sequelize
    .query(`SELECT * FROM users WHERE username LIKE '%${find}%'`)
    .then((result) => res.send(result[0]).status(200));
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

//npm i sequelize pg pg-hstore axios dotenv express cors
