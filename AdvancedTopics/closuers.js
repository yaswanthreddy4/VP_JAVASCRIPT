"use strict";
var xyz=[];
for (let i = 0; i < 10; i++){
  xyz[i] = function() { return i };
}
console.log(xyz[0]());
console.log(xyz[1]());
console.log(xyz[2]());
