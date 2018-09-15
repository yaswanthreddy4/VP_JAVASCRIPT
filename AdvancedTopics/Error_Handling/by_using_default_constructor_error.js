// "UseStrict"
let employee = {
  name: 'Yaswanth',
  age: 24,
  salary:'20000',
  dept:'dev'
};
/** --------------- Syntax Error --------------------**/
// try{
//   if(!employee.adress){
//     console.log(employee.adress);
//     throw new SyntaxError('This is incomplete data in Employee');
// console.log(employee);
//   }
// }catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
//   }

/** --------------- Reference Error --------------------**/
try{
  if(!employee.adress){
    console.log(employee.adress);
    throw new ReferenceError('This is incomplete data in Employee');
    console.log(employee);
  }
}catch(err){
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
  }

/** ---------------  Error --------------------**/
// try{
//   if(!employee.adress){
//     console.log(employee.adress);
//     throw new Error('This is incomplete data in Employee');
// console.log(employee);
//   }
// }catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
//   }
