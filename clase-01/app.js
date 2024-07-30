// // ES5
// // var nombre_completo = "Jonathan Parra";
// var nombreCompleto = "Jonathan Parra";
// var nombreCompleto = "4";
// var nombreCompleto = "true";
// var nombreCompleto = "true";
// var nombreCompleto = `true`;

// var edad = -38.3423423;

// var mexicano = false;

// var persona = {
//   nombre: "Jonh",
//   edad: 38,
// };

// console.log(persona.nombre);
// console.log(persona["edad"]);
// //                       1      2         3
// var listaUsuuarios = ["Pedro", "Cris", "Jonh"];
// //                      0        1        2

// // console.log(listaUsuuarios[1]);

// var nombre = "Usuario";

// console.log(nombre);

// // fundionalidad del login
// // var login = () => {};

// // nombre = "jonh";

// var nombre = null;

// nombre === '' ? "Usuario" : "Jonh";

// console.log("He said `Hello` and left.");

// var nombre = ""; // jonh

// var nombre = "Cris"; //

// var nombre = "Isra";

// var nombre = Infinity;

// console.log(typeof nombre);

// var nombre = "Jonh";
// var apellido = "Parra";

// console.log(nombre + apellido);

// var num1 = "2";
// var num2 = 4;

// console.log(num1 + num2);

// var numeroUsuario = prompt("Ingresa un número");

// console.log(numeroUsuario + 5);

// console.log(typeof (123 + ""));
// console.log(Number("-10"));

// var nombre = "Jonh"; // jonh

// var nombre = true; //

// nombre = 2;

// if (true) {
//   var nombre = "pepe";
// }

// console.log(nombre);

// ? let y const
// const nombre = "Jonh";

// nombre = true;
// if (true) {
//   const nombre = "pepe";
//   console.log(nombre);
// }

// const login = () => {
//   return "Estamos logueados";
// };

// console.log(login());

// let nombre = "Usuario";

// nombre = "Jonh";

// if (true) {
//   let nombre = "pepe";
//   console.log(nombre);
// }
// console.log(nombre);

// let number = 5;

// console.log(number++);
const globo = document.getElementById("globo");
let size;

const setSize = (newSize) => {
  size = newSize;
  globo.style.fontSize = size + "px";
};

setSize(20);

const handleArrow = (e) => {
  if (e.key == "ArrowUp") {
    if (size > 80) {
      globo.textContent = "💥 BOOOOOM!!!";
      document.body.removeEventListener("keydown", handleArrow);
    } else {
      setSize(size * 1.1);
      e.preventDefault();
    }
  } else if (e.key == "ArrowDown") {
    setSize(size * 0.9);
    e.preventDefault();
  }
};

document.body.addEventListener("keydown", handleArrow);

//? 2

const modal = document.getElementById("modal");
const url = "https://picsum.photos/300/200";
const button = document.getElementById("btn-modal");
const modalImage = document.getElementById("modal-image");
const close = document.getElementById("close");

button.addEventListener("click", () => {
  modal.style.display = "block";
  modalImage.src = url;
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

//? 3
