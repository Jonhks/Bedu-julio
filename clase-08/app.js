// const btnFirst = document.getElementById("btn-first");
// window.addEventListener("click", () => {
//   console.log("Hola Mundo!!!");
// });

// const once = () => {
//   console.log("Click once");
//   btnFirst.removeEventListener("click", once);
// };

// btnFirst.addEventListener("click", once);

// btnFirst.addEventListener("click", () => {
//   console.log("Click once");

// });

// document.getElementById("btn-first").addEventListener("click", () => {
//   console.log("Button clicked.");
// });

// const title = document.getElementById("title");
// const btnsColor = document.getElementsByClassName('btns-color')

// Array.from(btnsColor).forEach((btn) => {
//   btn.addEventListener('click', () => {
//     title.style.color = btn.id
//   })
// })

// const redBtn = document.getElementById("red");
// const blueBtn = document.getElementById("blue");
// const blackBtn = document.getElementById("black");
// const pinkBtn = document.getElementById("pink");
// const cyankBtn = document.getElementById("cyan");

// redBtn.addEventListener("click", () => {
//   title.style.color = "red";
// });

// blueBtn.addEventListener("click", () => {
//   title.style.color = "blue";
// });

// blackBtn.addEventListener("click", () => {
//   title.style.color = "black";
// });

// pinkBtn.addEventListener("click", () => {
//   title.style.color = "pink";
// });

// cyankBtn.addEventListener("click", () => {
//   title.style.color = "cyan";
// });

// const title = document.getElementById("title");
// const text = document.getElementById("text");
// const check = document.getElementById("check");
// const btn = document.getElementById("btn");
// const selectNumbers = document.getElementById("select-numbers");

// text.addEventListener('keydown', (e) =>  {
//   console.log(e.key);
// })

// selectNumbers.addEventListener('change', (e) => {
//   console.log(e.target.value);
// })

// check.addEventListener('input', (e) => {
//   console.log(e.target.checked);
// })

// btn.addEventListener('click', (e) => {
//   console.log('El parrafo clickeado');
// })

// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   console.log('btn clickeado');
// })

// window.addEventListener('keydown', (e) => {
//   console.log(e.key);
//   console.log(e.ctrlKey);
//   if(e.key === 'Enter'){
//     document.body.style.background = 'lightblue'
//   }
//   if(e.key === 'Enter' && e.ctrlKey){
//     document.body.style.background = 'orange'
//   }
// })

// window.addEventListener('keyup', (e) => {
//   console.log(e.key, 'tecla soltada');
//  if( e.key === 'Enter') {
//    document.body.style.background = ''
//  }
// })

//? Reto 1

// const globo = document.getElementById("globo");
// let size = 20;

// const setSize = (newSize) => {
//   size = newSize;
//   globo.style.fontSize = `${size}px`;
// };

// const handleArrow = (e) => {
//   console.log(size);
//   if (e.key === "ArrowUp") {
//     if (size > 80) {
//       globo.textContent = "💥 BOOOM !!";
//       document.body.removeEventListener("keydown", handleArrow);
//     } else {
//       setSize(size * 1.1);
//       e.preventDefault();
//     }
//   } else if (e.key === "ArrowDown") {
//     setSize(size * 0.9);
//     e.preventDefault();
//   }
// };

// document.body.addEventListener("keydown", handleArrow);

//? Reto 2

const modal = document.getElementById("modal");
const btnModal = document.getElementById("btn-modal");
const modalImage = document.getElementById("modal-image");
const closebtn = document.getElementById("close");
const url = "https://picsum.photos/300/200";

btnModal.addEventListener("click", () => {
  modal.style.display = "block";
  modalImage.src = url;
});

closebtn.addEventListener("click", () => (modal.style.display = "none"));

//? Reto 3

// const createTabs = (node) => {
//   const tabs = Array.from(node.children).map(function (node) {
//     const button = document.createElement("button");
//     button.textContent = node.getAttribute("data-tabname");

//     const tab = {
//       node: node,
//       button: button,
//     };

//     button.addEventListener("click", () => selectTab(tab));

//     return tab;
//   });

//   const tabList = document.createElement("div");

//   for (let i = 0; i < tabs.length; i++) {
//     tabList.appendChild(tabs[i].button);
//   }

//   node.insertBefore(tabList, node.firstChild);

//   const selectTab = (selectedTab) => {
//     for (let i = 0; i < tabs.length; i++) {
//       const selected = tabs[i] == selectedTab;
//       tabs[i].node.style.display = selected ? "" : "none";
//       tabs[i].button.style.color = selected ? "red" : "";
//     }
//   };

//   selectTab(tabs[0]);
// };

// createTabs(document.querySelector("#tab-panel"));
