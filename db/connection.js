const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'rootroot',
  database: 'employees',
})
if (connection) { console.log(`Connected`); } else { console.log(`didn't work`); }


connection.connect(function (err) { if (err) throw err; });
module.exports = { connection };

connection.end();