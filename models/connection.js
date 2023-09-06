const mysql = require("mysql");

const { SERVERNAME, DBUSER, PASSWORD, DB } = process.env;

const pool = mysql.createConnection({
  host: SERVERNAME,
  user: DBUSER,
  password: PASSWORD,
  database: DB,
});

const connectToSQL = async () => {
  return pool.connect(function (err) {
    if (err) throw err;
    console.log("Database connection successful");
  });
};

module.exports = { pool, connectToSQL };
