const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root321',
    database: 'employees_db',
})

module.exports = connection