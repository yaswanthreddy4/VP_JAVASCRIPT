let array = []
let tenth = function(){
  return new Promise (function(reslove,reject){
    let passed = true;
    if (passed){
      let biscycle = {
        company: "Hero",
        model: "3F4GG6",
        cost: 25000,
        shop: "Hyderabad"
      }
      array.push(biscycle)
      reslove("You Passed The SSC Examination. You Will Get Biscycle As A Gift")
    }else{
      reject("You Failed The Examination")
    }
  })
}
let diploma = function(inputFromTenthFunction) {
  return new Promise(function(reslove, reject) {
    let passed = true;
    if (passed) {
      let bike = {
        company: "Yamaha",
        model: "RX100",
        cost: 50000,
        shop: "Mumbai"
      }
      array.push(bike);
      reslove("You Passed The Diploma Examination. You Will Get Bike As A Gift")
    } else {
      reject("You Failed The Examination")
    }
  })
}
let btech = function(){
  return new Promise (function(reslove,reject){
    let passed = true;
    if (passed){
      let car = {
        company: "Audi",
        model: "A8",
        cost: 5000000,
        shop: "Delhi"
      }
      array.push(car)
      reslove("You Passed The Btech Examination. You Will Get Job As A Gift")
    }else{
      reject("You Failed The Examination")
    }
  })
}
let job = function(){
  return new Promise(function(resolve, reject) {
    let passed = true;
    if (passed){
      let wife = {
        name: "Sita",
        age: 25,
        occupation: "job",
        location: "Andhra Pradesh"
      }
      array.push(wife)
      resolve("You Got A Job. so, Will Give Wife As A Gift")
    }else{
      reject("You Failed To Get The Job")
    }
  });
}
tenth().then(function(resultFromTenthFunction){
  console.log(array);
  return diploma (resultFromTenthFunction)
})
.then(function(resultFromDiplomaFunction){
  console.log(array);
  return btech (resultFromDiplomaFunction)
})
.then (function(resultFromBtechFunction){
  console.log(array);
  return job (resultFromBtechFunction)
})
.then(function(resultFromJobFunction){
  console.log(array);
})
.catch(function(rejectFromTenthFunction){
  console.log(rejectFromTenthFunction);
})
.catch(function(rejectFromDiplomaFunction){
  console.log(rejectFromDiplomaFunction);
})
.catch(function(rejectFromBtechFunction){
  console.log(rejectFromBtechFunction);
})
.catch(function(rejectFromJobFunction){
  console.log(rejectFromJobFunction);
})
