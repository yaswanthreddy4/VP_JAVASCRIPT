'use strict'
let user = {
  name: "Yaswanth",
  accNo: 3115489658,
  bank: "HDFC",
  branch: "Mumbai",
  balance:50000,
  minBalance:5000
}
let balance = () => {
  alert(`user ${user.name} has a balance of ${user.balance}`);
}
let withdraw = (amt, callback) => {
  let check = user.balance - amt;
  if (amt < user.balance && check >user.minBalance){
    user.balance -= amt;
    callback();
  }
  else{
    alert ("Not a Valid Amount");
  }
}
let deposite = (amt, callback) => {
  if(amt<50000){
    user.balance +=amt;
    callback();
  }else{
    alert("You Exceeded Max Daily Limits")
  }
}
var operation = (amt, callback)=>{
  if (amt>0 && typeof callback == 'function'){
  return callback(amt, balance)
}else{
  alert("Please Enter A Valid Input");
}
}

let input = +prompt(`Select Any One Option
1. Balance
2. Withdraw
3. Deposite`);

switch (input) {
  case 1:
  balance();
  break;
  case 2:
  var amount=+prompt("Enter Amount To Withdraw");
  operation(amount,withdraw);
  break;
  case 3:
  var amount=+prompt("Enter Amount To Deopsite");
  operation(amount,deposite);
    break;
  default:
  alert ("Please Provide Valid Input");
}
