import mysql from 'mysql2';
import ENVIROMENT from './enviroment.config.js';

const pool = mysql.createConnection({
    host: ENVIROMENT.MYSQL_HOST, 
    user: ENVIROMENT.MYSQL_USER,
    password: ENVIROMENT.MYSQL_PASSWORD,
    database: ENVIROMENT.MYSQL_DB_NAME,
    //connectionLimit: 5
})

const promisePool = pool.promise();

export default promisePool