// const colors = ["Red", "Blue", "Green"];

// console.log(colors);

// colors[1] = "Pink";

// console.log(colors);

// // const arr = ["jonh", 30, true, {}, ["Otras cosas"]];

// // const colors = ["Red", "Blue", "Green", "Cyan", "Black"]; // 5

// // console.log(colors);

// // for (let i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// // }

// const numbers = [1, 3, 4, 7, 2, 1, 9, 0];
// // 0, 1, 2, 3, 4, 5, 6, 7
// // console.log(numbers);

// const multiplyByTwo = (arrNum) => {
//   // [1, 3, 4, 7, 2, 1, 9, 0]  length === 8
//   const newArr = [];
//   // 8
//   for (let i = 0; i < arrNum.length; i++) {
//     newArr.push(arrNum[i] * 2);
//   }
//   return newArr;
// };

// // i    valor    newArr[]
// // 0      1        [2]
// // 1      3        [2, 6]
// // 2      4        [2, 6, 8]

// multiplyByTwo(numbers); //[2, 6, 8, 14, 4, 2, 18, 0];
// console.log(multiplyByTwo(numbers));//[2, 6, 8, 14, 4, 2, 18, 0];

// const arrNum = [2, 3, 4, 3, 5, 6, 7]; // 12 / 4 =  3
// let sum = 0;
// const calculateAverage = (arrNum) => {
//   for (let i = 0; i < arrNum.length; i++) {
//     sum += arrNum[i];
//   }
//   const promedio = sum / arrNum.length;
//   return promedio;
// };

// console.log(calculateAverage(arrNum));

const estudiantes = [
  {
    nombre: "Eduardo",
    apellido: "Gomez",
    anioNac: 1998,
    direccion: "Av 1 y calle 2",
    estudiante: true,
    peliculas: ["It", "misión imposible", "contra"],
    mascota: {
      nombre: "Firulais",
      edad: 2,
      color: "Blanco",
      vacunado: true,
    },
  },
  {
    nombre: "Emil",
    apellido: "Cruz",
    anioNac: 2001,
    direccion: "desconcida",
    estudiante: true,
    peliculas: ["Rambo", "Split"],
    mascota: {
      nombre: "",
      edad: undefined,
      color: "",
      vacunado: undefined,
    },
  },
  {
    nombre: "Cris",
    apellido: "Morán",
    anioNac: 2002,
    direccion: "Calle 43 y calle 76",
    estudiante: true,
    peliculas: ["Ironman", "Superman"],
    mascota: {
      nombre: "Michi",
      edad: 4,
      color: "cafe",
      vacunado: true,
    },
  },
  {
    nombre: "Jonh",
    apellido: "Parra",
    anioNac: 1986,
    direccion: "Av 7 y calle 3",
    estudiante: false,
    peliculas: ["Duro de Matar", "Pulp Fiction"],
    mascota: {
      nombre: "Logan",
      edad: 8,
      color: "blanco",
      vacunado: true,
    },
  },
  {
    nombre: "Javi",
    apellido: "Rios",
    anioNac: 2004,
    direccion: undefined,
    estudiante: true,
    peliculas: ["Rocky", "Volver al futuro"],
    mascota: {
      nombre: "Solovino",
      edad: 1,
      color: "blanco",
      vacunado: true,
    },
  },
];

// const lalo = {
//   nombre: "Eduardo",
//   apellido: "Gomez",
//   edad: 25,
//   direccion: "Av 1 y calle 2",
//   estudiante: true,
//   peliculas: ["It", "misión imposible", "contra"],
//   mascota: {
//     nombre: "Firulais",
//     edad: 2,
//     color: "Blanco",
//     vacunado: true,
//   },
// };

// // lalo.ciudad = "CDMX";
// lalo.edad = 26;

// console.log(lalo);

// const car = {
//   brand: "Nissan",
//   model: "Versa",
//   year: 2024,
// };

// // console.log(car["brand"]);

// const keyValuePairs = (obj) => {
//   const keysArr = Object.keys(obj); // ['brand', 'model', 'year']
//   const pairs = [];

//   for (let i = 0; i < keysArr.length; i++) {
//     pairs.push([keysArr[i], obj[keysArr[i]]]); // [['brand, 'Nissan] []]
//   }
//   return pairs;
// };

// console.log(keyValuePairs(car));

const john = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1986,
  calculateAge: function () {
    const today = new Date();
    const year = today.getFullYear();
    this.age = year - this.birthYear;
    return year - this.birthYear;
  },
};
console.log(john.calculateAge());
console.log(john);
