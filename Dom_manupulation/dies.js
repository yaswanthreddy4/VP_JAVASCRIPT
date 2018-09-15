// let section = document.createElement('section')
// section.innerHTML = `<p id='imr'>hi this is testing </p>`;
// document.body.appendChild(section)

let array = [];
let one = '/home/yaswanth/training7am/javascript/Dom_manupulation/1.png'
let second = '/home/yaswanth/training7am/javascript/Dom_manupulation/2.jpg'
let three = '/home/yaswanth/training7am/javascript/Dom_manupulation/3.jpg'
let four = '/home/yaswanth/training7am/javascript/Dom_manupulation/4.jpg'
let five = '/home/yaswanth/training7am/javascript/Dom_manupulation/5.jpeg'
let six = '/home/yaswanth/training7am/javascript/Dom_manupulation/6.jpeg'
function cl(){
  array.push(one);
  array.push(second);
  array.push(three);
  array.push(four);
  array.push(five);
  array.push(six);

  var rm=Math.floor(Math.random()*array.length)
//   var rmimg=document.createElement('section');
//   // rmimg.setAttribute('src',
//   // [rm]);
//   // rmimg.setAttribute('width','200px')
//   // rmimg.setAttribute('height','200px')
// rmimg.innerHTML=`<img src=array[rm] width='200px' height='200px'>`;
//   // imr.appendChild(rmimg)
//   document.body.appendChild(rmimg)

document.write(`<img src=array[rm] width='200px' height='200px'>`);
}
