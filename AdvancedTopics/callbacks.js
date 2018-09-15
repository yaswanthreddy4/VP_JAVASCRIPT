let add = function (a,b) {
  return a+b
}
let sub = function (a,b){
  return a-b
}
let mul = function (a,b){
  return a*b
}
let div = function (a,b){
  return a/b
}
let calc = function(num1,num2,callback){
  return callback(num1,num2);
}
console.log(calc(2,3,add));

// let fruit =[{name:'apple',stock:12}, {name:'pineapple', stock:16}, {name:'orange', stock:9},{name:'grapes', stock:18}];
// fruit.sort(val1,val2)=>{
//   if (val1.name>val2.name){
//     return -1;
//   }else{
//     return 1;
//   }
// };
