const express = require("express");
const cors = require("cors");
var mysql = require("mysql2");

const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Lville2019",
  database: "passfit_db"
});

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to maxsauers application." });
// });

// POST
app.post('/passfits', function(req, res) {
  var data = req.body;
  data = '("' + data.title + '", "' + data.description + '", ' + data.published + ', "' + data.createdAt + '", "' + data.updatedAt + '")';
  console.log(data);
  var sql = 'INSERT INTO passfits (title, description, published, createdAt, updatedAt) VALUES ' + data;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  res.end('Success');
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});