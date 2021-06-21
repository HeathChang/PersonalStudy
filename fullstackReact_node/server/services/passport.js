//Helper modules and business logic:

const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users'); //fetching

//profiling(Encoding User): mangooseModel → id
passport.serializeUser((user,done)=>{ //pulled out from DB(findOne)
  done(null,user.id); //callback (error Obj), identifying User (not profile.Id) → id assigned by mangoose
});

//deserialize: user id → mangoose  
passport.deserializeUser((id, done)=>{
  User.findById(id).then(user=>{
    done(null,user);
  })
})


passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' //route user will be sent to
},(accessToken,refreshToken,profile,done)=>{
  User.findOne({googleId:profile.id}) //returns promise
  .then((existingUser)=> {
    if(existingUser){//already have a recode with the give profile ID
      done(null,existingUser);
    }else{ // don't have a user record with the given profileID

      new User({googleId: profile.id})
        .save()
        .then(user=> done(null,user))
    }
  })
  
  
})); //create new instance