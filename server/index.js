// CONNECTING DATABASE AND SETTING UP BACKEND SERVER
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "mudrika",
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connection created");
  }
});

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

app.get("/", (req,res) => {

    const sqlInsert =
    "INSERT INTO kyc_table (BORROW_id, KYC_IMAGE, CUST_AADHAAR, CUST_PAN, KYC_SIGN,PAN_IMAGE, AADHAAR_FRONT, AADHAAR_BACK) VALUES (113, 'sfgds.jpeg', '223v425545', '874v444515', 'sfg.jpeg', 'hggh.jpeg', 'vfgsdv.jpeg', 'dsbgffd.jpeg');";
    db.query(sqlInsert, (err,result) => {
         res.send("Hey Stranger!");
    });
});

app.post('/api/insert', (req,res)=>{

})

db.query("select * from mudrika.kyc_table", (err, result) => {
  console.warn("result", result);
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
