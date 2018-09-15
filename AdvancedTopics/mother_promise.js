/**
let motherPromise = new Promise(function(reslove,reject){
  let isClean=true;
  if (isClean){
    reslove('Clean');
  }else{
    reject('Is Not Clean');
  }
})
motherPromise.then(function(reultFromResolve){console.log(reultFromResolve);})
.catch(function(reultFromReject){console.log(reultFromReject);})
**/

/**
let motherPromise = new Promise(function(reslove,reject){
  let isClean=true;
  let room = {
    type: "boy",
    cleaned: "yes",
    trashCollected: "yes"
  }
  if (isClean){
    reslove(room);
  }else{
    reject('Is Not Clean');
  }
})
motherPromise.then(function(reultFromResolve){console.log(reultFromResolve);})
.catch(function(reultFromReject){console.log(reultFromReject);})
**/
let cleanRoom = function(){
  return new Promise (function(reslove,reject){
    let isClean = true;
    let room = {
      Type: "Boy",
      isCleaned:"Yes",
      trash:"A Lot Of Trash"
    }
    if (isClean){
      reslove(room);
    }else{
      reject('Is Not Cleaned');
    }
});
}

let removeTrash = function(inputFromCleanRoomFunction){
  return new Promise (function (resolve,reject) {
    resolve("Is Room Cleaned ?" +  inputFromCleanRoomFunction.isCleaned + "Now You Supposse To Throw The Garbge")
  })
}
let winWine = function(inputFromRemoveTrashFunction){
  return new Promise (function(reslove,reject){
    reslove(inputFromRemoveTrashFunction + "Yes Trash Has Been Thrown. Congo You Win The Wine Bottle. Enjoy Dude!")
  })
}

cleanRoom().then(function(reslutFromCleanRoomFunction){
  console.log(reslutFromCleanRoomFunction);
  return removeTrash(reslutFromCleanRoomFunction);})
.then(function(reslutFromRemoveTrashFunction){
  console.log(reslutFromRemoveTrashFunction);
  return winWine(reslutFromRemoveTrashFunction);})
  .then(function(reslutWinWIneFunction){
    console.log(reslutWinWIneFunction);
  })
.catch(function(reslut){
  console.log(reslut);})
