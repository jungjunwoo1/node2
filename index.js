// mysql 모듈 사용
const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const connection = require('./lib/db');

const app = express();

// 연결할 DB 정보입력


app.use(bodyParser.urlencoded({
    extended:false,
}));

app.use(express.static(`${__dirname}/public`));

app.get('/',(request,response) => {
    fs.readFile('public/list.html','utf-8',(error,data) =>{
        connection.query('SELECT * from memo ORDER BY date DESC', (error, results, fields) => {
            if (error) throw error;
            response.send(ejs.render(data,{
                data:results,
            }));
        });
    });
});

app.get('/create',(request, response) => {
    fs.readFile('public/listcreate.html','utf-8',(error,data) => {
        if(error) throw error;
        response.send(data);
    });
});


// 데이터 추가,post요청이 발생하면
app.post('/create', (request, response) => {
    const body = request.body;
    console.log(body);
    connection.query('INSERT INTO memo (title, content, date) VALUES (?, ?, now())',
    [body.title, body.content], () => {
        response.redirect('/');
    });
});

// 데이터 수정
app.get('/modify/:id', (request, response) => {
    // 파일을 읽어옵니다.
    fs.readFile('public/modify.html', 'utf-8', (error, data) => {
      connection.query('SELECT * from memo WHERE number =?', [request.params.id], (error, results) => {
        if (error) throw error;
        console.log(request.params.id);
        response.send(ejs.render(data, {
          data: results[0],
        }));
      });
    });
  });

  // 데이터 업데이트
app.post('/modify/:id', (request, response) => {
    const body = request.body;
    console.log(body);
    connection.query('UPDATE memo SET title = ?, content = ?, date = ? WHERE number = ?',
    [body.title, body.content, body.date,request.params.id], (error,results) => {
        if (error) throw error;
        // 조회페이지로 이동
        response.redirect('/');
    });
});

app.get('/delete/:id', (request, response) => {
    connection.query('delete from memo where number=?', [request.params.id], () => {
        response.redirect('/');
    });
});

// connection.query('create table memo (number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, title VARCHAR(10) NOT NULL,content  VARCHAR(100),date datetime);', (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
// });

// connection.query('describe memo', (error, results, fields) => {
//     if (error) throw error;
//     console.log(results);
// });
//..

app.listen(3000, () => {
    console.log('Server is running port 3000!');
    // connection.connect();
});

// connection.end();