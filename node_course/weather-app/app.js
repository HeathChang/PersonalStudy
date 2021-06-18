console.log("Starting");

setTimeout(()=>{
  console.log("1000ms = 1sec timer");
},1000);

setTimeout(()=>{
  console.log("0ms = 0sec timer");
},0);
//0초후 , 2초가 나옴. 순서가 중요한게 아님.

console.log("Stopping");
////
const listLocations=(locations)=>{
  locations.forEach((location)=>{
    console.log(location)
  })
}
const myLocations =["phil","ny"]
listLocations(myLocations);

/////request: npm i request
const request=require('request')
const url = '';
