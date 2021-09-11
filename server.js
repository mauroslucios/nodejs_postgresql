//user strict
const express = require('express');
const app = express();
    
const PORT = 3000;
const HOST = '0.0.0.0';

//app
app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.listen(HOST,PORT);
console.log('Running in http://' + HOST+':'+PORT);

//db
const db = require("./db");