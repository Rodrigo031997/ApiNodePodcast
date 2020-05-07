const express = require('express');
// const routes = require('./routes');

//crear una aplicación de express
const app = express();


// app.use('/',routes());
app.use('/', function(req, res) {
    res.send("Hello World!");
 });
//servidor y puerto
const host = '0.0.0.0';
const port = 9000;

app.listen(port, host, ()=>{
    console.log('El servidor esta corriendo');
});
