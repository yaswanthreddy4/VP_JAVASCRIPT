// var colourJson = {
//   'red':'#FF0000',
//   'green':'#00FF00',
//   'blue': '#0000FF',
//   'yellow':'#00DDGG',
//   'number': 50
// }
// var jsonString =JSON.stringify(colourJson);
// console.log(jsonString);
// var jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);
 var carJson={
   'audi':'A8',
   'Benz':'B9',
   'ferrari':'f10'
 }
 console.log(carJson);
 let carString = JSON.stringify(carJson);
 console.log(typeof carString);
 console.log(carString.length);
 console.log(carString);
 let carObject = JSON.parse(carString);
 console.log(carObject);
