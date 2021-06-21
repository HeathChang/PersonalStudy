//Helper modules and business logic:

const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users'); //fetching

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' //route user will be sent to
},(accessToken,refreshToken,profile,done)=>{
  new User({googleId: profile.id}).save()
  
})); //create new instance