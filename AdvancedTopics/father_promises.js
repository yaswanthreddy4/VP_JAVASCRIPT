// let passed = false;
let tenth = function() {
  return new Promise(function(reslove, reject) {
    let passed = true;
    if (passed) {
      reslove("You Passed The SSC Examination. You Will Get Biscycle As A Gift")
    } else {
      reject("You Failed The Examination")
    }
  })
}
let diploma = function(inputFromTenthFunction) {
  return new Promise(function(reslove, reject) {
    let passed = false;
    if (passed) {
      reslove("You Passed The Diploma Examination. You Will Get Bike As A Gift")
    } else {
      reject("You Failed The Examination")
    }
  })
}
let btech = function(inputFromDiplomaFunction) {
  return new Promise(function(reslove, reject) {
    let passed = true;
    if (passed) {
      reslove("You Passed The Btech Examination. You Will Get Job As A Gift")
    } else {
      reject("You Failed The Examination")
    }
  })
}
let job = function(inputFromBtechFunction) {
  return new Promise(function(reslove, reject) {
    let passed = true;
    if (passed) {
      reslove("You Got A Job. so, Will Give Wife As A Gift")
    } else {
      reject("You Failed To Get The Job")
    }
  })
}

tenth().then(function(resultFromTenthFunction) {
    console.log(resultFromTenthFunction);
    return diploma(resultFromTenthFunction)
  })
  .then(function(resultFromDiplomaFunction) {
    console.log(resultFromDiplomaFunction);
    return btech(resultFromDiplomaFunction)
  })
  .then(function(resultFromBtechFunction) {
    console.log(resultFromBtechFunction);
    return job(resultFromBtechFunction)
  })
  .then(function(resultFromJobFunction) {
    console.log(resultFromJobFunction);
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
