import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

//get all Users
export async function getUsers() {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
}

//Get one User
export async function getUser(id) {
  const [rows] = await pool.query("SELECT * FROM users WHERE id = ?  ", [id]);
  return rows;
}

//Create a User
export async function createUser(name, password) {
  const [result] = await pool.query(
    "INSERT INTO users (name, password) VALUES (?,?)",
    [name, password]
  );
  const id = result.insertId;
  return getUser(id); //return from getnote
}
