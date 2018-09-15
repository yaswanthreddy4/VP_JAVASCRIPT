var promise = new Promise (function (reslove,reject){
  reslove(2)
});
promise.then(firstFun).then(secondFun).then(thirdFun).catch(function (err){
  console.log(err);
});
function firstFun (value){
  console.log(value);
  return(value*2);
}
function secondFun (value){
  console.log(value);
  return(value*2);
}
function thirdFun (value){
  console.log(value);
  return(value*2);
}
