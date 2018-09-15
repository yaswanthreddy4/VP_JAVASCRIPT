'use strict'
let employee = {
  name: 'Yaswanth',
  age: 24,
  salary:'20000',
  dept:'dev'
}
function employeeData(){
  try{
    console.log(employee);
    setEmployee();
    updateEmpolyee("YASWANTHREDDY");
    console.log(employee.name);
  }catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
  }
}
employeeData();
function updateEmpolyee(name){
  try{
    employee.name=name;
    console.log(JSON.stringify(employee));
  }catch(err){
      console.log("Error from second try block :" , err);
  }
}
// updateEmpolyee("YASWANTHREDDY");
