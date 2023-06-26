const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'database-1.cim1pyz8hvyt.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'notepad',
    port: '3306',
    dateStrings: 'date',
  });

  
  connection.connect();
  module.exports = connection;