let basket = [];
for (loop = 0; loop <= 100; loop++) {
  let fruit = prompt(`Select What You Want
1.Mango
2.Orange
3.Apple
4.Pineapple
5.Straberry`);

  if (fruit == 1) {
    let quantity = prompt("Enter The Quantity You Want");
    for (index = 1; index <= quantity; index++) {
    //  basket.push("Mango");
    }
    console.log(basket);

  } else if (fruit == 2) {
    let quantity = prompt("Enter The Quantity You Want");
    for (index = 1; index <= quantity; index++) {
      basket.push("Orange");
    }
    //console.log(basket);

  } else if (fruit == 3) {
    let quantity = prompt("Enter The Quantity You Want");
    for (index = 1; index <= quantity; index++) {
      basket.push("Apple");
    }
  //  console.log(basket);

  } else if (fruit == 4) {
    let quantity = prompt("Enter The Quantity You Want");
    for (index = 1; index <= quantity; index++) {
      basket.push("Pineapple");
    }
    //console.log(basket);

  } else if (fruit == 5) {
    let quantity = prompt("Enter The Quantity You Want");
    for (index = 1; index <= quantity; index++) {
      basket.push("Straberry");
    }
    //console.log(basket);

  }
  else{
    alert("you have selected invalid option ");
    break;
  }
  console.log(basket);
}
