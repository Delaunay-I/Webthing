import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config()

// Collection of connections to the database
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

const [rows] = await pool.query("SELECT * FROM users");
console.log(rows);
