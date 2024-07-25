// Todos los elementos que tengan la etiqueta que buscamos
// const parrafos = document.getElementsByTagName("span");
// console.log(parrafos);

// Todos los elementos que tengan la clase que buscamos
// const filtradosByClass = document.getElementsByClassName("filtrado");
// Array.from(filtradosByClass).forEach((element) => {
//   element.style.color = "blue";
//   element.style.backgroundColor = "cyan";
//   element.style.fontSize = "16px";
// });

//? El único elemento que contenga el Id que estamos pidiendo
// const parrafoUnico = document.getElementById("parrafo-unico");
// parrafoUnico.classList.add("nueva-clase");
// console.log(parrafoUnico);

//? Nos funcona igualq uen los 3 anteriores solo agregando el . o # en caso de ser clase o id resp
// const elementos = document.querySelectorAll("#parrafo-unico");
// console.log(elementos);

//? Nos funcona igual que  los 3 anteriores solo retorna el primer elemento que encuentre, solo agregando el . o # en caso de ser clase o id resp
// const elemento = document.querySelector("#parrafo-unico");
// console.log(elemento);

// const paragraphs = document.getElementsByTagName("p");

// console.log("Colección de nodos:", paragraphs);

// console.log("Primer Nodo:", paragraphs[0]);
// console.log("Segundo Nodo:", paragraphs[1]);
// console.log("Tercer Nodo:", paragraphs[2]);

// document.body.insertBefore(paragraphs[2], paragraphs[0]);

// const h1 = document.createElement("h1");
// const text = document.createTextNode("Hola Mundo!!");
// h1.appendChild(text);
// document.body.appendChild(h1);

// const createNode = (type, child) => {
//   var node = document.createElement(type);

//   if (typeof child === "string") {
//     var text = document.createTextNode(child);
//     node.appendChild(text);
//   } else {
//     node.appendChild(child);
//   }
//   return node;
// };

// console.log(createNode("h1", createNode("strong", "Hello World")));

// const quote = document.getElementById("quote");

// quote.appendChild(createNode("footer", createNode("strong", "- Karl Popper")));

// const quote = document.getElementById("quote");

const root = document.getElementById("root");

// let divNuevo = `
//   <div class='nueva-clase'>
//     <p id ='id-prueba'>Hola Mundo desde Template literal </p>
//   </div>`;

// divNuevo += `<img src="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100"  alt='perrito'/>`;

// root.innerHTML = divNuevo;

// const nombre = prompt("Ingresa tu nombre");
const nombre = "Jonh";

const url =
  "https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100";

const platillos = [
  "Enchiladas",
  "Tacos",
  "Pambazos",
  "Enmoladas",
  "Cereal",
  "Quesadillas",
];

const divNuevo = `
  <div class='nueva-clase'>
    <p id ='id-prueba'>Hola ${nombre}, mira los perritos que tenemos!!</p> 
  </div>`;

const imagen = `
  <p>
    <img src=${url}  alt='perrito'/>
  </p>`;

let lista = `<ul></ul>`;
lista += platillos.reduce((acum, current) => acum + `<li>${current}</li>`, "");

root.innerHTML = divNuevo;
root.insertAdjacentHTML("beforeend", imagen);
root.insertAdjacentHTML("beforeend", lista);
