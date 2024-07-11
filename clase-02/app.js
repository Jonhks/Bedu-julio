// const edadUsuario = Number(prompt("¿Cuál es tu edad?"));

// // console.log(isNaN(edadUsuario));

// if (typeof edadUsuario !== "number" || isNaN(edadUsuario)) {
//   alert("El valor ingresado debe ser un número");
//   window.location.reload();
// } else {
//   if (edadUsuario >= 18) {
//     document.write(
//       "Bienvenido a nuestra pag," + " Tu edad es :" + edadUsuario + " años"
//     );
//   } else {
//     document.write(
//       "No te podemos vender nada, regresa cuando seas mayor de edad!! " +
//         " Tu edad es :" +
//         edadUsuario +
//         " años"
//     );
//   }
// }

// const response = "9";

// if (typeof response === "string") {
//   document.write("El valor es valido");
// } else {
//   document.write("Solo se aceptan valores de tipo texto");
// }

// const time = 21;
// let saludo;

// if (time >= 0 && time < 12) {
//   saludo = "Buenos días";
// } else if (time >= 12 && time < 20) {
//   saludo = "Buenas tardes";
// } else if (time >= 20 && time < 24) {
//   saludo = "Buenas Noches";
// } else {
//   saludo = "Hora no valida";
// }

// console.log(saludo);

// const dia = 0;
// let msj;

// switch (dia) {
//   case 0:
//     msj = "Domingo";
//     break;
//   case 1:
//     msj = "Lunes";
//     break;
//   case 2:
//     msj = "Martes";
//     break;
//   case 3:
//     msj = "Miercoles";
//     break;
//   case 4:
//     msj = "Jueves";
//     break;
//   case 5:
//     msj = "Viernes";
//     break;
//   case 6:
//     mjs = "Sabado";
//     break;
//   default:
//     msj = "Día invalido";
//     break;
// }

// document.write(msj);

// const edad = 8;

// const msj = edad >= 18 ? "Bienvenido a nuesta pag" : "No te pondemos vender";

// document.write(msj);

// for (let i = 0; i <= 1000; i++) {
// document.write("Número " +  + "<br>");
// console.log("Hola mundo");
// }

// ejecuta lo global

// i   log
// 0    0
// 1    1
// 2    2
// 3    3
// 4    4
// 5    5
// 6

// numero % 2 === 0;

// for (let numero = 0; numero <= 100; numero++) {
//   // if (numero % 2 === 0) {
//   //   document.write("Número par " + numero + "<br>");
//   // } else {
//   //   document.write(`Número Impar ${numero} <br>`);
//   // }
//   // numero % 2 === 0
//   //   ? document.write("Número par " + numero + "<br>")
//   //   : document.write(`Número Impar ${numero} <br>`);

//   numero % 2 === 0 && document.write("Número par " + numero + "<br>");
//   // numero % 2 === 0 ? document.write("Número par " + numero + "<br>") : "";
// }

for (let counter = 2; counter <= 100; counter++) {
  let isPrime = true;

  for (let i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      isPrime = false;
    }
  }

  if (isPrime) {
    console.log(counter);
  }
}
