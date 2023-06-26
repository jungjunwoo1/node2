var mysql = require("mysql"); 

// 연결할 DB 정보입력
const connection = mysql.createConnection({
    host: 'database-1.cim1pyz8hvyt.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'notepad',
    port: '3306',
    dateStrings: 'date',
  });
  

  // RDS에 접속합니다.
  connection.connect(function(err) {
    if (err) {
        throw err; // 접속에 실패하면 에러를 throw 합니다.
      } else {
        // connection.query("create database notepad", function(err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!
         
        //   });

        //    connection.query("show databases", function(err, rows, fields) {
        //     console.log(rows); // 결과를 출력합니다!
        //  });

    // connection.query("desc memo", function(err, rows, fields) {
    //         console.log(rows); // 결과를 출력합니다!
    //      });

        // create 쿼리문 사용
//     connection.query('create table memo (number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(10) NOT NULL,content  VARCHAR(100),date datetime);', (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
// });

// Insert 쿼리문 사용
// connection.query('insert into memo (genre, name, writer, releasedate) values (\'fantasy\', \'LUMINE\', \'Emma Krogell\', \'2015-05-15\'), (\'comedy\', \'Mygiant Nerd Boyfriend\', \'fishball\', \'2017-03-03\'), (\'romance\', \'I Love Yoo\', \'Quimchee\', \'2016-08-21\'), (\'action\', \'Tower of God\', \'SIU\', \'2017-10-01\'), (\'action\', \'Rise from Ashes\', \'Madeleine Rosca\', \'2016-01-13\');', (error, results, fields) => {
//   if (error) throw error;
//   console.log(results);
// });


            
        console.log("연결완료")
      }
    });