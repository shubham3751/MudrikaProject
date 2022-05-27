// CONNECTING DATABASE AND SETTING UP BACKEND SERVER
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "mudrika",
});

const randomOTP = Math.floor(Math.floor(100000 + Math.random() * 900000));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connection created");
  }
});

app.post("/", async (req, res) => {
  //console.log(req.body);
  const api_url = `https://2factor.in/API/V1/35284789-67b1-11ec-b710-0200cd936042/SMS/7980328603/${randomOTP}`;
  console.log(randomOTP);
  const response = await fetch(api_url);
  if (response.ok) {
    res.send(response.json());
  } else {
    res.send("Failure");
  }
});

// console.log(process.env.API_KEY);

//-------------------POSTMAN TESTING----------------------------------------//
// app.post("/api/insert", (req, res) => {
//     const aadharNum = req.body.aadharNum;
//     const phoneNum = req.body.phoneNum;
//     const panNum = req.body.panNum;

//     const sqlInsert =
//     "INSERT INTO userdata (aadharNumber, phoneNumber, panNumber) VALUES (?, ?, ?);"

//     db.query(sqlInsert, [aadharNum, phoneNum, panNum], (err,result) => {
//         console.log(result);
//     });
// });

app.get("/", (req, res) => {
  const sqlInsert = "select * from mudrika.kyc_table";
  db.query(sqlInsert, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log("result", result);
    }
  });
});

// app.delete('/:id', (req,res)=>{
//      db.query("DELETE FROM kyc_table WHERE id =" + req.params.id,(err,results) => {
//        if(err){
//          console.log(err);
//        }else{
//          console.log(results);
//        }
//      });
//       res.send(req.params.id);
// });

// db.query("select * from mudrika.kyc_table", (err, result) => {
//   console.warn("result", result);
// });

app.listen(3001, () => {
  console.log("running on port 3001");
});
