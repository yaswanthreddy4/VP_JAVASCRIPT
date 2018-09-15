// //using sign coverting type, prefix && postfix examples,
//
// let num = prompt("enetr a no");
// let num2= prompt("enetr a no");
// // console.log(num);
// // console.log(typeof num);
// // console.log(+num);
// // console.log(typeof +num);
// let num3 = (-num+(+num2));
// console.log(num3);
//
// let count = 12;
// let result = count**3;
// let z = result;
// result /= result
// console.log("postresult:" +result);
// console.log("postcount:" ,count);
// console.log(result);
//
// count = 12;
// result = count++;
// // result = ++count;
// console.log("preresult:", result);
// console.log("precount:" ,count);



// // count = 6;
// // count = count**3;
// // console.log(count);
// // console.log(count);

/**

let access = false;
let age = prompt('enter age');
if (age>=18){
  access=true;
}
if(access){
  console.log("welcome to fb", true);
}
else {
  console.log("not allowed", access);
}

**/
/**
let age= +prompt('enterage:');
let access = (age>=18)?  true : false;
let message = (access)?  "welcome to fb": "not allowd to fb";
console.log(message);
**/
/**let age=+prompt("enetr age:");
let msg=(age<3)? "smallbaby" : (age<10)? "gowing boy": (age<20)? "teenage": (age<=30)? "youngage":"invalidage"
console.log(msg);**/

/**
alert("door task");
var door = +prompt("1.open \n 2.open \n 3.open \n 4.open\n 5.open\n");
if (door == 1 || door ==2 || door ==3 || door ==4 || door ==5)
{
if (door == 1)
{
  alert("door one is opened ")
}
if(door == 2)
{
  alert("door two is opened")
}
if(door == 3)
{
  alert("door three is opened")
}
if(door == 4)
{
  alert("door four is opened")
}
if(door == 5)
{
  alert("door fifth is opened")
}

}
else{
  alert("BLOCKED")
}
**/

/**
alert("DOORTASK");
let door = +prompt("1.open \n 2.open \n 3.open \n 4.open\n 5.open\n");
if (door == 1 || door ==2 || door ==3 || door ==4 || door ==5)
{
if (door == 1) {alert(`door is opened
    first attempt #{1}`)}
if (door == 2){alert(`door is opened
    second attempt #{2}`)}
if (door == 3){alert(`door is opened
    third attempt #{3}`)}
if (door == 4){alert(`door is opened
    fourth attempt #{4} `)}
if (door == 5) {alert(`door is opened
    fifth attempt #{5}`)}
  }
else {alert(`Your maximum attempts is over.
      DOOR IS BLOCKED`)}
      **/



/**let door = +prompt('1.open \n 2.open \n 3.open \n 4.open\n 5.open\n');
let msg = (door ==1)? "door is opened first attempt #{1}": (door == 2)?"door is opened second attempt #{2}": (door ==3)?"door is opened third attempt #{3}" : (door ==4)?"door is opened fourth attempt #{4}":(door ==5)?"door is opened fifth attempt #{5}": "Your maximum attempts is over.DOOR IS BLOCKED"
console.  log(msg);**/


/**

alert("enter only numbers");
let input = +prompt("Enter value");
if(input<5)
{
console.log("ur enter value is "+input);
}else{
console.log("ur enter wrong vaalue "+input);
}

**/
/**
let input = prompt("Enter value")
let msg=(input<5)?"ur enter value is lessthan 5":(input==5)?"ur enter value is 5":(input>5)?"ur enter value is greaterthan 5":"not a valid number"
console.log(msg);
**/

// let input = prompt("Feed me");
// let msg=(input>5)?"Entered value is a number":
// console.log(msg);