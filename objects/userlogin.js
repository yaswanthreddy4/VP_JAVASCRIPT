let user = [{
  username:"admin",
  password: "admin"
}];
let opt1 = prompt("Enter user name");
let opt2 = prompt("Enter Password");
if (user.username == opt1 && user.password == opt2){
  alert("Login Sucessful")
}else {
  alert("NOT A REGISTER USER")
  for(var i=0;i<user.length;i++){
  user[i] = prompt("enter ur name ");
   
  }
}
