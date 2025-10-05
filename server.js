 const express = require('express');
 const app = express();

 app.listen(8080, function(){
    console.log('listening on 8080')
 });

 app.get('/main', function(요청, 응답){
    응답.send('T&G입니다! 반갑습니다.');
 });


 app.get('/m', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
 });
