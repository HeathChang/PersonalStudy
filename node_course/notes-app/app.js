 /////fileSystem
const fs=require('fs')
fs.writeFileSync('notes.txt','My name is Heath');
fs.appendFileSync('notes.txt','\nI live in Seoul');
/////import
const utilJs= require('./util.js');
console.log(utilJs);
const sum = utilJs(4,-2);
console.log("add:",sum);
/////validator: npm i validator
const validator = require('validator')
console.log(validator.isEmail('gmail.com')); //false
/////chalk: npm i chalk
const chalk = require('chalk')
const greenMsg=chalk.green('SUCCESS');
console.log(greenMsg);
