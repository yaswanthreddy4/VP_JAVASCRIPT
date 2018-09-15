// "UseStrict"
let employee = {
  name: 'Yaswanth',
  age: 24,
  salary:'20000',
  dept:'dev'
};
// try{
//   if(!employee.adress){
//     console.log(employee.adress);
//     throw 'The Adress Field Is Not There In the Object'
//   }
//   console.log(employee.name);
// }catch(err){
//   console.log(err);
// }
try{
  if(!employee.adress){
    let error = {
      name: 'Employee Error',
      message:'These adress field is not found',
      stack: function(){
        return this.name + "  "+ this.message
      }
    }
    throw error;

  }
}catch(err){
  console.log(err.stack());
}
