const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "dbuser",
  password: "qwerty",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  const sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});