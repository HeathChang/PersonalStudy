const express = require('express'); //common 
//import express from 'express'; //react side

const app = express();
app.get('/',(req,res)=>{
  res.send({bye: 'buddy'});
})

const PORT = process.env.PORT || 5000;

app.listen(PORT);
//http://localhost:5000/

//https://salty-savannah-38001.herokuapp.com/ | https://git.heroku.com/salty-savannah-38001.git
