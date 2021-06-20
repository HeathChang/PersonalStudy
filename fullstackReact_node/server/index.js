const express = require('express'); 
const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

//client ID: 70049040011-0480ragjr50aghod7tvm9on0d64c2fih.apps.googleusercontent.com
//client secret: SJuAoBC2zU7dkpOOMZGYAiNU
passport.use(new GoogleStrategy()); //create new instance

const PORT = process.env.PORT || 5000;

app.listen(PORT);
//http://localhost:5000/
