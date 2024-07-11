// const ageJonh = calculateAge(1986); // 38 Jonh

//? Funcion declarada
// function calculateAge(birthYear) {
//   return 2024 - birthYear;
// }

//? funcion expresada
// const calculateAge = function (birthYear) {
//   return 2024 - birthYear;
// };
// const calculateAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// //?  Funcion flecha o ArrowFunction
// const calculateAge = (birthYear) => {
//   return 2024 - birthYear;
// };

// // ? Retorno implicito en funciones flecha
// const calculateAge = (birthYear) => 2024 - birthYear;

// const ageJonh = calculateAge(1986); // 38 Jonh
// const agePedro = calculateAge(2001); // 23 Pedro
// const ageLalo = calculateAge(2006); // 18 Lalo

// document.write(`La edad de Jonh es de ${ageJonh} años <br>`);
// document.write(`La edad de Pedro es de ${agePedro} años <br>`);
// document.write(`La edad de Lalo es de ${ageLalo} años <br>`);

// const calculateAge = (birthYear) => {
//   return 2024 - birthYear;
// };

// const yearsUntilRetirement = (year, name) => {
//   const age = calculateAge(year);
//   const retirement = 65 - age;
//   document.write(`${name} te faltan ${retirement} años para tu retiro <br>`);
// };

// yearsUntilRetirement(1986, "Jonh");
// yearsUntilRetirement(2001, "Pedro");
// yearsUntilRetirement(2006, "Lalo");

// const arr = ["Pedro", "Jonh"];

// arr.map(()=>{})

// btn.addEventLinstener(() => {

// })

// const power = (base, exponent) => {
//   let result = 1; // 27

//   for (let i = 0; i < exponent; i++) {
//     // i: 3

//     result *= base;
//   }

//   return result;
// };

// console.log(power(3, 3));
// console.log(power(2, 3));

// console.log("Con el metodo", Math.pow(3, 3));
// console.log("Con el metodo", Math.pow(2, 3));

// (function () {
//   var name = "John Doe";
//   console.log(name);
// })();

const suma = () => {
  const num1 = prompt("Ingresa el primer número");
  const num2 = prompt("Ingresa el segundo número");
  document.write(`La suma de tus dos números es: ${+num1 + +num2} <br>`);
};

// ? número mayor

const getLergerInt = (number1, number2) =>
  number1 > number2 ? number1 : number2;

console.log(getLergerInt(9, 2));
console.log(getLergerInt(4, 8));

// ?fibonacci
const fibonacci = (num) => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
};

const fibonacciSequence = (limit) => {
  if (limit < 1) return console.log("El limite debe ser mayor a uno");

  for (let i = 0; i < limit; i++) {
    console.log(fibonacci(i));
  }
};

fibonacciSequence(10);
