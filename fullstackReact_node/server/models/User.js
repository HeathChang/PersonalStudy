const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { Schema } =mongoose; take Schema property assign it to Schema (using {})

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema); //loading