alert ("Common Calculator");
let option = Number(prompt("1.add \n 2.sub \n 3.mul \n 4.div \n"))
if (option == 1 || option == 2 || option == 3 || option== 4)
{
  if (option == 1)
  {
  num1 = parseInt (prompt("enter 1st no."));
  num2 = parseInt (prompt('enter 2nd no.'));
  num3 = parseInt (prompt('enter 3rd no.'));
  num4=num1+num2+num3;
  alert("result :" +num4);

  }
  else if (option ==2)
  {
    num1 = parseInt(prompt("enter 1st no."));
    num2 = parseInt (prompt('enter 2nd no.'));
    num3 = parseInt (prompt('enter 3rd no.'));
    num4=num1-num2-num3;
    alert("result:"+num4);
  }
  else if (option == 3)
  {
    num1 = parseInt(prompt("enter 1st no."));
    num2 = parseInt (prompt('enter 2nd no.'));
    num3 = parseInt (prompt('enter 3rd no.'));
    num4=num1*num2*num3;
    alert("result:"+num4);
  }
  else if (option == 4)
  {
    num1 = parseInt(prompt("enter 1st no."));
    num2 = parseInt (prompt('enter 2nd no.'));
    num3 = parseInt (prompt('enter 3rd no.'));
    num4=num1/num2/num3;
    alert("result:"+num4);
  }
}
else {
  alert("enter a valid number");
}
