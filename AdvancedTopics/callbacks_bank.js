var user = {
  name: "John",
  accNo: "123456789",
  balance: 5000,
  minBalance: 1000
};

let balance = function() {
  console.log(`User ${user.name} have balance of :${user.balance}`);
}

var withdraw = function(amt, callback) {
  var min = user.balance - amt;
  if (amt < user.balance && min > user.minBalance) {
    user.balance -= amt;
callback();
  } else {
    console.log("Not a Valid Amount");
  }
};
var deposite=function(amt, callback){
  if(amt<25000){
    user.balance+=amt;
callback();
  }else {
    console.log("Entered amount is more than DAILY LIMIT");
  }
}
var operation = function(amt, callback) {
  if (amt > 0 && typeof callback === 'function') {
    return callback(amt,balance);
  } else {
    console.log("Please Enter A Valid Input");
  }
};
var flag=+prompt(`Enter
  1.withdraw
  2.deposite
  3.balance check`)
  switch(flag){
    case 1: var amount=+prompt("Enter Amount To Withdraw");
    operation(amount,withdraw);
    break;
    case 2:var amount=+prompt("Enter Amount To Deposite");
    operation(amount,deposite);
    break;
    case 3:balance();
    break;

    default :
    console.log("Please Provide Valid Input");
  }
