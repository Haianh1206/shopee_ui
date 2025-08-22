import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // đổi nếu có
  database: "shopee_clone",
});

export default pool;
