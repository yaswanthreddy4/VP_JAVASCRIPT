
let places =["hyd", "bang", "pune","mumbai", "xyz"]
console.log(places);
for (index=0; index<places.length; index++){
if(places[index] == "xyz"){
  let newplace = prompt("Enter New Name");
  places[index] = newplace;
  console.log(places);
  // break;
}
console.log("index :", index);
console.log(places[index]);
}

// let ipadress = ["192.168.106.50", "192.168.106.51", "192.168.106.52", "192.168.106.53", "192.168.106.54"];
// for (let index = 0; index<ipadress.length; index++){
//   if(ipadress == ("192.168.106.51")){
//     let newone = prompt("Enter New IP Adress");
//     ipadress[index] = newone;
//     console.log(ipadress);
//     break;
//   }
//   console.log("index :" +index);
//   console.log(ipadress[index]);
// }
