// for (var evenvalue=0; evenvalue <10; evenvalue++ )
// {
//   re=(evenvalue/2==0);
// console.log(re);
// }

// let no = 0;
// for (no <101){
//   console.log(no);
// }
// even++

// function isPrime(num) {
//     if(num < 2) return false;
//     for (var i = 2; i < num; i++) {
//         if(num%i==0)
//             return false;
//     }
//     return true;
// }
// for(var i = 0; i < 100; i++){
//     if(isPrime(i)) console.log(i);
// }

// rc = +prompt("enter ur number");
// var num = (rc/2==3)?alert("it even" +rc+ "num" ):alert("it is odd " +rc+ "num");



// for (let num=1; num<=100; num+=2){    //odd numbers
// console.log(num);}

// for (let num=0; num<=100; num+=2){   //even numbers
// console.log(num);}

//
// for (let num=1; num<100; num==0){
//   console.log(num);
// }
// let prime=1;
// for (;prime<10;){
// console.log(prime);
// if(prime%1==0){
//
// }
// }
var number = prompt('enter a number to check prime or not');
for(var i = 2; i < number; i++){
  if(number % i == 0){
    alert("This is Not prime Number");
    break;
  }else{
    alert("This is prime Number");
    break;
  }
}
