/**
let section = document.createElement('section')
let p = document.createElement('p')
let bakery = function(){
BakeryItems = [{item:'MultiGrainBread',price:40,stock:15},
{item:'EggPuff',price:15,stock:45},
{item:'CoolCakes',price:450,stock:5},
{item:'CoolDrinks',price:45,stock:150},
{item:'BadamMilk',price:30,stock:100}];
p.innerText = JSON.stringify(BakeryItems)
section.appendChild(p)
document.body.appendChild(section)
}
**/
let multiGrainBread = {item:'MultiGrainBread',price:40,stock:15}
let eggPuff = {item:'EggPuff',price:15,stock:45}
let coolCakes = {item:'CoolCakes',price:450,stock:5}
let coolDrinks = {item:'CoolDrinks',price:45,stock:150}
let badamMilk = {item:'BadamMilk',price:30,stock:100}
var bakery = [multiGrainBread,eggPuff,coolCakes,coolDrinks,badamMilk];
let section = document.createElement('section')
let ol = document.createElement('ol')
  for (Index= 0; Index <bakery.length; Index++) {
    let li = document.createElement('li')
    li.innerText = JSON.stringify(bakery[Index])
    ol.appendChild(li)
    section.appendChild(ol)
  }
let display= function display(){
  let button1 = document.createElement('button')
  let button2 = document.createElement('button')
  let button3 = document.createElement('button')
  let button4 = document.createElement('button')
  button1.innerText = 'itemadd'
  button1.addEventListener('click', itemadd)
  button2.innerText = 'itemsub'
  button2.addEventListener('click', itemsub)
  button3.innerText = 'itemupdate'
  button3.addEventListener('click', itemUpdate )
  button4.innerText = 'itemdelete'
  section.appendChild(button1)
  section.appendChild(button2)
  section.appendChild(button3)
  section.appendChild(button4)
  document.body.appendChild(section)
}
let itemadd = function (){
  let samosa = {};
  samosa.name = prompt('Enter The Name')
  samosa.price= +prompt('Enter The promrice')
  samosa.stock= +prompt('Enter The Stock')
  bakery.push(samosa)
  console.log(bakery);
}
let itemsub = function (){
  let finalList = [];
  let removeList = prompt('Enter Name')
 for (index=0; index<bakery.length; index++){
   if (removeList==bakery[index].name){
     index++;
   }
   finalList.push(bakery[index])

 }
 console.log(finalList);

}
let itemUpdate = function (){
  let updateList = prompt('Enter Name')
 for (let index=0; index<bakery.length; index++){
   if (updateList==bakery[index].name){
     console.log("hjgfdsasdfghjk");
     bakery[index].price = +prompt("Enter New Price")
     console.log(bakery);
     break;
   }
 }
 }
