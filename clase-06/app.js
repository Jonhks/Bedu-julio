// const numbers = [1, 2, 3, 4, 5];
// // const doubles = [];

// // for (let i = 0; i < numbers.length; i++) {
// //   doubles.push(numbers[i] * 2);
// // }

// // const doubles = numbers.map((number) => {
// //   return number * 2;
// // });

// const doubles = numbers.map((number) => number * 2);

// console.log(numbers);
// console.log(doubles);

// const car = {
//   brand: "Nissan",
//   model: "Sentra",
//   year: 2020,
// };

// const addColor = (car) => {
//   const newCar = Object.assign({}, car, {
//     color: "Black",
//   });
//   return newCar;
// };

// console.log("Before calling addColor()", car);

// const sameCar = addColor(car);

// console.log("After calling addColor()", car);
// console.log("After calling addColor()", sameCar);

// console.log("Same car?", car === sameCar); // true
// const cart = [{ item: "Laptop", quantity: 1 }];

// const addItemToCart = (cart, item, quantity) => {
//   const newCart = cart.map((el) => el);

//   newCart.push({
//     quantity,
//     item,
//   });
//   // Irian los pasos de actualizar la bdd
//   return newCart;
// };

// const newCart = addItemToCart(cart, "Phone", 1);

// console.log(newCart);

// ?Reto 3
// const loop = (start, test, update, body) => {
//   for (var value = start; test(value); value = update(value)) {
//     body(value);
//   }
// };

// const test = (n) => n > 0;

// const update = (n) => n - 1;

// loop(3, test, update, console.log);

//? Reto 2

// const compact = (array) => array.filter((element) => !!element);

//? Reto 1

// //! 1.0
// const flatten = (arrays) => {
//   let newArr = [];
//   for (let i = 0; i < arrays.length; i++) {
//     // console.log(arrays[i]); // [1,2,3], [4,5], [6]
//     for (let y = 0; y < arrays[i].length; y++) {
//       console.log(arrays[i][y]); // 1,2,3,4,5,6
//       // newArr.push(arrays[i][y]);
//       newArr = newArr.concat(arrays[y]);
//     }
//     // console.log(newArr);
//     return newArr;
//   }
// };

//! 2.0
// const flatten = (arrays) => {
//   let newArr = [];
//   for (let i = 0; i < arrays.length; i++) {
//     // [1,2,3], [4,5], [6]
//     // arrays[i].map((el) => newArr.push(el));
//     arrays[i].forEach((el) => newArr.push(el));
//   }
//   return newArr;
// };

// ! 3.0
// const flatten = (
//   // [1,2,3,4,5, 6]
//   arrays // [1, 2, 3], [4, 5], [6]
// ) => arrays.reduce((acum, current) => acum.concat(current), []);

// var arrays = [[1, 2, 3], [4, 5], [6]];
// var array = flatten(arrays);

// console.log(array); // [1, 2, 3, 4, 5, 6]

// const numbers = [1, 2, 3, 4, 5];

// const sumando = (arr) => {
//   let acumuladora = 0; //  15
//   for (let i = 0; i < arr.length; i++) {
//     acumuladora = acumuladora + arr[i];
//   }
//   return acumuladora;
// };

// console.log(sumando(numbers));

// const sum = numbers.reduce((acumuladora, currentValue) => {
//   return acumuladora + currentValue;
// }, 0); // Initial value

// console.log(sum); // 15
