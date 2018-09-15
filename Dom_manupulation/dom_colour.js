// let div1 = document.createElement('div')
// let div2 = document.createElement('div')
// let div3 = document.createElement('div')
// let button1 = document.createElement('button');
// let button2 = document.createElement('button');
// let button3 = document.createElement('button');
//
// div1.setAttribute('id','div1')
// div2.setAttribute('id','div2')
// div3.setAttribute('id','div3')
// button1.setAttribute('id','button1')
// button2.setAttribute('id','button2')
// button3.setAttribute('id','button3')
//
//
// button1.innerText = 'ClickHere'
// button2.innerText = 'ClickHere'
// button3.innerText = 'ClickHere'
//
// button1.setAttribute('onclick','press1()');
// button2.setAttribute('onclick', 'press2()')
// button3.setAttribute('onclick', 'press3()')
//
// div1.appendChild(button1);
// div2.appendChild(button2);
// div3.appendChild(button3);
// document.body.appendChild(div1);
// document.body.appendChild(div2);
// document.body.appendChild(div3);
// let press1 = function(){
//   document.getElementById('div2').style.backgroundColor = 'red';
//   // document.getElementById('div3').style.backgroundColor = 'black';
// }
// let press2 = function(){
//   document.getElementById('div3').style.backgroundColor = 'blue'
// }
// let press3 = function (){
//   document.getElementById('div1').style.backgroundColor = 'yellow'
// }
//
// /**document.querySelector('button').addEventListener('click',function() {
//     document.getElementById('div2').style.backgroundColor = 'red';
// })**/



let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let button1 = document.createElement('button');
let button2 = document.createElement('button');
let button3 = document.createElement('button');

div1.setAttribute('id','div1')
div2.setAttribute('id','div2')
div3.setAttribute('id','div3')
button1.setAttribute('id','button1')
button2.setAttribute('id','button2')
button3.setAttribute('id','button3')


button1.innerText = 'ClickHere'
button2.innerText = 'ClickHere'
button3.innerText = 'ClickHere'

// button1.setAttribute('onclick','press1()');
// button2.setAttribute('onclick', 'press2()')
// button3.setAttribute('onclick', 'press3()')

div1.appendChild(button1);
div2.appendChild(button2);
div3.appendChild(button3);
document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(div3);
// let press1 = function(){
//   document.getElementById('div2').style.backgroundColor = 'red';
//   // document.getElementById('div3').style.backgroundColor = 'black';
// }
// let press2 = function(){
//   document.getElementById('div3').style.backgroundColor = 'blue'
// }
// let press3 = function (){
//   document.getElementById('div1').style.backgroundColor = 'yellow'
// }
let x = document.getElementById('button1');
x.addEventListener('click',click1);
x.addEventListener('click', click2);

function click1(){
  document.getElementById('div2').style.backgroundColor = 'red';
};
function click2(){
  document.getElementById('div3').style.backgroundColor = 'green';
};
