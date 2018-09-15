let a=1;
console.log(a);
console.log(typeof a);
let b=0.00003;
console.log(b);
console.log(typeof b);
let a1='1';
console.log(a1);
console.log(typeof a1);
/**let a2=1a;
console.log(a2);
console.log(typeof a2);**/    //Uncaught SyntaxError: Invalid or unexpected token         (1a)
/**let 123=abc
console.log(123);**/         //Uncaught SyntaxError: Unexpected number                    (123)
let a3=a1
console.log(a3);
console.log(typeof a3);
let a4 ='a1'
console.log(a4);
console.log(typeof a4);
/**let #a5=true
console.log(#a5);**/         //Uncaught SyntaxError: Invalid or unexpected token           (#a5)
let a6=true
console.log(a6);
console.log(typeof a6);
let a7='flase'
console.log(a7);
console.log(typeof a7);
let a8
console.log(a8);
console.log(typeof a8);
// console.log(a9);           //allinone.js:29 Uncaught ReferenceError: a9 is not defined
let a10=null
console.log(a10);
console.log(typeof a10);
/**let $=yaswanth
console.log($);
console.log(typeof $);**/    //allinone.js:36 Uncaught ReferenceError: yaswanth is not defined
/**let $='yaswanth'
console.log($);
console.log(typeof $);
var $='reddy'
console.log($);**/           //Uncaught SyntaxError: Identifier '$' has already been declared
let $='yaswanth'
console.log($);
console.log(typeof $);
console.log($ + $);
$='reddy'
console.log($);
console.log($ + $);
let _='chintha'
console.log(_);
console.log(typeof _);
let a11=''
console.log(a11);
console.log(typeof a11);
let a12=" "
console.log(a12);
console.log(typeof a12);
let a13=`Hi
This Is Yaswanth Reddy ${'1'+'1'+'6'}
FullStack Developer`
console.log(a13);
console.log(typeof a13);
let a14=100
console.log(a14);
console.log(typeof a14);
console.log(String(a14));
console.log(typeof (String(a14)));
console.log(Boolean (a14) );
console.log(typeof (Boolean (a14) ));
// console.log(null (a14));                              // null is not a function
// console.log(undefined (a14));                         // undefined is not a function
let a15=0.00006
console.log(a15);
console.log(typeof a15);
console.log(String (a15));
console.log(typeof (String (a15)));
console.log(Boolean (a15));
console.log(typeof (Boolean (a15)));
// console.log(null (a15));                             // null is not a function
// console.log(undefined (a15));                        // undefined is not a function
let a16=0.0
console.log(a16);
console.log(typeof a16);
console.log(String (a16));
console.log(typeof (String (a16)));
console.log(Boolean (a16));
console.log(typeof (Boolean (a16)));
let a17="cyr"
console.log(a17);
console.log( typeof a17);
console.log(Number (a17));
console.log(typeof (Number (a17)));
console.log( Boolean (a17));
console.log(typeof ( Boolean (a17)) );
let a18=""
console.log(a18);
console.log(typeof a18);
console.log(Number (a18));
console.log(typeof(Number (a18)));
console.log( Boolean (a18));
console.log(typeof ( Boolean (a18)));
let a19=" "
console.log(a19);
console.log(typeof a19);
console.log(Number (a19));
console.log(typeof(Number (a19)));
console.log( Boolean (a19));
console.log(typeof ( Boolean (a19)));
let a20="22"
console.log(a20);
console.log(typeof a20);
console.log(Number (a20));
console.log(typeof(Number (a20)));
console.log( Boolean (a20));
console.log(typeof ( Boolean (a20)));
let a21="22ab"
console.log(a21);
console.log(typeof a21);
console.log(Number (a21));
console.log(typeof(Number (a21)));
console.log( Boolean (a21));
console.log(typeof ( Boolean (a21)));
let a22=true
console.log(a22);
console.log( typeof a22);
console.log(Number(a22));
console.log( typeof (Number(a22)) );
console.log(String (a22));
console.log( typeof (String(a22)));
let a23=false
console.log(a23);
console.log( typeof a23);
console.log(Number(a23));
console.log( typeof (Number(a23)) );
console.log(String (a23));
console.log( typeof (String(a23)));
// let a24=null
// console.log(Number(a24));
// let a25=undefined
// console.log(Number (a25));
/**z=001;
console.log(z);                                         // if loose type declared first & strict type declared second - ERROR
z=002;                                                  // Uncaught ReferenceError: z is not defined
console.log(z);**/
// let z = 12;
// console.log(z);
/**z = 002;                                             // if strict type declared first & loose type declared second - NOERRORS
console.log(z);
z = 003;
console.log(z);                                        // decleration of loose type for multiple times is possible & strict type is not possible
z=004;                                                                      (z)                                         (letz)
console.log(z);
z=0.005
console.log(z);**/
alert("login to fb");
prompt("enter the login credintals")
confirm ("do u enter credintails correct?")
