let cart = [];
let apple = {
  name: 'PineApple',
  price: 45,
  number: 0,
  totalAmt: 0
};
let mango = {
  name: 'Mango',
  price: 60,
  number: 0,
  totalAmt: 0
};
let bananna = {
  name: 'Apple',
  price: 40,
  number: 0,
  totalAmt: 0
};
let pinapple = {
  name: 'Bananna',
  price: 30,
  number: 0,
  totalAmt: 0
};
var addCart = function(name) {
  cart.push(name);
  return cart;
}
var quant = function() {
  var quantity = +prompt(`Enter Fruit Quantity`);
  return quantity;
}
var sms = function(callback) {
  var flag = callback();
  fruit.number = fruit.number + flag;
  flag = 0;
  cart.push(fruit.number);
  fruit.totalAmt = fruit.number * fruit.price;
  addCart(fruit);
};

for (let loop = 0; loop <= 99; loop++) {
  let option = +prompt(`Select
  1.apples
  2.mangos
  3.Bananna
  4.pinapple
  other option for exit`)

  if (option == 1) {
    var fruit = apple;
    sms(quant);
  } else if (option == 2) {
    var fruit = mango;
    sms(quant);
  } else if (option == 3) {
    var fruit = bananna;
    sms(quant);
  } else if (option == 4) {
    var fruit = pinapple;
    sms(quant);
  } else {
    alert("Thanks visit Again");
    break;
  }
}
console.log(cart);

let TotalAmount = Number;
TotalAmount = apple.totalAmt + mango.totalAmt + bananna.totalAmt + pinapple.totalAmt;

console.log(`Total Amount :${TotalAmount}`);
