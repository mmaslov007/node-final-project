const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '0508',
    database: 'todolist'
});

module.exports = pool.promise();
