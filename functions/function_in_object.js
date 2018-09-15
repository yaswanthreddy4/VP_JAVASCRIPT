let yaswanth = {
  name: "yaswanthreddy",
  dateofbirth:1963,
  location: "pulivendula",
  calculateAge: function(){
    let currentyear= 2018;
    let age = currentyear-(this.dateofbirth);
    return age;},
  retireAge: function(){
      let retire = 60;
      let re= retire -this.calculateAge()
      if (this.calculateAge()<60){
      console.log(re);}
      else{
        alert("You Had Already retired")
      }
    }

};
console.log(yaswanth.retireAge());
// let calculateAge = function(){
//   let currentyear= 2018;
//   let age = currentyear-(yaswanth.dateofbirth);
//   return age;
// }
// let retireAge = function(){
//   let retire = 60;
//   let re= retire -calculateAge()
//   return re
// }
// if (yaswanth.calculateAge()<60){
// console.log(yaswanth.retireAge());}
// else{
//   alert("You Had Already retired")
// }
// console.log(calculateAge());
// console.log(retireAge());
