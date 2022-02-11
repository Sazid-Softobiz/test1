const http = require('http');
const express= require('express')
const app=express()
const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`server is running at ${port}`);
});

app.get('/Cars',(req, res)=>{
  res.end('cars data')
  console.log("hello")
})
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

