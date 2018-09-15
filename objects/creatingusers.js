let defaultuser = [{
  uname: "admin",
  passwd: "admin"
}];
for (login = 0; login <= defaultuser.length; login++) {
  let username = prompt("ENter Credintials");
  let password = prompt("ENter Credintials");
  if (username == defaultuser[login].uname && password == defaultuser[login].passwd) {
    alert("Login Sucessful");
  } else {
    alert("Not A vALID USER");
    let newUser = {
      uname: prompt("ENter Credintials to register"),
      passwd: prompt("ENter Credintials to register"),
    };
    defaultuser.push(newUser)
  }

  console.log(defaultuser);
}
