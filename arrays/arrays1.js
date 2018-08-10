let num = [6545 , 5252 , 5454];
let names = ["yaswanth", "reddy", "chintha"];
let ages = [23 , 24, 25];
let months = ["nov", "dec", "jan"];
let combo = [num, names,ages,months];
// num[8] = 10;
// console.log(num[6]);
// console.log(num);
// console.log(names);
// console.log(combo);
for (index=0; index<combo.length; index++){
  console.log("index :", index);
  console.log(combo[index]);
  for(let innIndex = 0; innIndex<combo.length ; innIndex++){
    console.log(`combo[${index}][${innIndex}]`);
    console.log("Data :" , combo[index][innIndex]);
  }
}
