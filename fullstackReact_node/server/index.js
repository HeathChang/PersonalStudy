const express = require('express'); //common 
//import express from 'express'; //react side
const app = express();
app.get('/',(req,res)=>{
  res.send({hi:"there"});
})

app.listen(5000);