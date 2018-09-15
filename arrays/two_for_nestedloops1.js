let names = ["sam", "ravi", "raj", "sonu"];
for (let index = 0; index < names.length; index++) {
  // console.log(index);
  console.log(names[index]);
  for (let innerIndex = 0; innerIndex < names[index].length; innerIndex++) {
    console.log(names[index][innerIndex]);
  }
}

let names = ["yaswanth", "reddy", "chintha", "rgpally", "pulivendula"]
for (index = 0; index < names.length; index++) {
  console.log(index);
  console.log(names[index]);
  for (deep = 0; deep < names[index].length; deep++) {
    console.log(names[index][deep]);
  }
}
