'use strict'
function readData(){
  let employee = {
  name: 'Yaswanth',
  age: 24,
  salary:'20000',
  dept:'dev'
}
try{
function employeeData(){
  try{
    console.log(employee);
    setEmployee();
    console.log(employee.name);
  }catch(err){
    console.log("Error from 2nd try block :" , err);
  }
}
employeeData();
function updateEmpolyee(name){
  try{
    employee.name=name;
    console.log(JSON.stringify(employee));
  }catch(err){
      console.log("Error from 3rd try block :" , err);
  }
}
updateEmpolyee("YASWANTHREDDY");
}
}
