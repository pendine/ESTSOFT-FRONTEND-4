const express = require('express');
const path = require('path');
const http = require('http');

let app = express();
let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true})); 
app.get('/' , (req,res) => { res.send("Welcome to the Home Page")});
app.get('/about' , (req,res) => {  res.send("About Us")});
app.post('/contact' , (req,res) => { res.send("Contact Form Submitted")});


app.use((req, res, next) => {
  res.status(404).send("404 error");
})

// 서버 시작
const server = app.listen(port, ()=>{
  console.log('서버 실행');
})

server.timeout = 5000;