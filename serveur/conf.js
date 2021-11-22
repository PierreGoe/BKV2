const mysql = require('mysql2/promise');
const path = require('path');
// for use dotenv with pm2
require('dotenv').config({ path: path.join(__dirname, '.env') });
//
const { DB_HOST, DB_PASSWORD, DB_SCHEMA, DB_USER, BACK_PORT } = process.env;

const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
});
const backPort = parseInt(BACK_PORT, 10);

module.exports = { backPort, db };
