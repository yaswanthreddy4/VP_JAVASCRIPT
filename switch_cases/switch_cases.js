let user = {
  name: null,
  grade: null,
  school: "xyz school",
  section: "heros"
};
var grade = prompt("select from A,B,C");
switch (grade) {
  case 'A':
    user.name = "sam";
    user.grade = 'A';
    console.log(user);
    break;
  case 'B':
    user.name = "ram";
    user.grade = 'B';
    console.log(user);
    break;
  case 'C':
    user.name = "jam"
    user.grade = 'C'
    console.log(user);
    break;
  default:
    alert("invalid selection")
}
