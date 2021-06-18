const path = require('path');
const express = require('express');
console.log(__dirname);
console.log(path.join(__dirname,'../public'));

const app = express()
app.use(express.static(path.join(__dirname,'../public')))
//설정시, 아래 사용 불가.


app.get('',(request, response)=>{
  response.send("<h1>Hello from Domain!</h1>");
})
app.get('/help',(request, response)=>{
  response.send([{
    name:"Heath",
    age:27
  },{
    name:"Cliff",
    age:28
  }]);
})
app.get('/about',(request, response)=>{
  response.send("Hello from About!");
})

app.listen(3000,()=>{
  console.log('Server is up on port 3000');
})