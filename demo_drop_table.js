var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "qwerty",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  const sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});