//Helper modules and business logic:

const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' //route user will be sent to
},(accessToken,refreshToken,profile,done)=>{
  console.log("accessToken: ",accessToken);
  //accessToken:
  console.log("refreshToken: ",refreshToken);
  //refreshToken:
  console.log(",profile: ",profile);
  //profile:
  console.log("done: ",done);
  //done:
})); //create new instance