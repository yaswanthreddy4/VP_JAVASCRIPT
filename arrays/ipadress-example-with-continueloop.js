let ipadress = ["192.168.106.50", "192.168.106.51", "192.168.106.52", "192.168.106.53", "192.168.106.54"];
for (let index = 0; index < ipadress.length; index++) {
  if (ipadress[index] == "192.168.106.53") {
    console.log(ipadress);
    continue;
  }
  console.log("index :" + index);
  console.log(ipadress[index]);
}
