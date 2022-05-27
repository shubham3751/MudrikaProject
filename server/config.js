const myssql = require("myssql");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "mudrika",
});

db.connect((err) => {
  if (err) {
    console.warn("error connecting");
  }
});

module.exports = db;
