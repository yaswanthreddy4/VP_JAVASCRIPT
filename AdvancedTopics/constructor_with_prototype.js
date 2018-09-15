// function Motor(name,model,speed,modelyear,cost){
//   this.name = name;
//   this.model = model

// console.log(bike);
// let car = new Motor("Audi", "A8",600, 2016, 500000)
// console.log(car);



function Employee(name,age,employid,salary){
  this.name = name;
  this.age = age;
  this.employid = employid;
  this.salary = salary
}
Employee.prototype.hikeAmt = function(){
  if (this.salary<50000){
    let hike = this.salary*0.13
    let final = hike+this.salary
    return final;
  }else{
    console.log("Your not eligible for hike");
  }
}


let yaswanth = new Employee("Yaswanth", 24, 989000, 40000)
console.log(yaswanth.hikeAmt());
console.log(yaswanth);
