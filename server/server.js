const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "passWord",
  database: "tranquility_db",
});

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const eventName = req.body.eventName;
  const eventBody = req.body.eventBody;
  const eventDate = req.body.eventDate;
  const eventTime = req.body.eventTime;

  const sqlInsert =
    "INSERT INTO events (eventName, eventBody, eventDate, eventTime) VALUES (?,?,?,?);";
  db.query(
    sqlInsert,
    [eventName, eventBody, eventDate, eventTime],
    (err, result) => {
      console.log(result);
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
