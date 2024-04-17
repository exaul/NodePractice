const fs = require("fs");

const username = "Exaul";
const username2 = "Falcones";

fs.writeFile("user-data.txt", `Nombre: ${username}\n`, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("archivo creado correctamente")
});

fs.appendFile("user-data.txt", "Apellido:"+ username2, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("archivo 2 creado correctamente");
});
// console.log(username);
