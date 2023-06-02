//  function getRandomHexColor() {
//       return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//     }

//     function createBoxes(amount) {
//       const boxesContainer = document.getElementById('boxes');

//       for (let i = 0; i < amount; i+=1) {
//         const box = document.createElement('div');
//         box.classList.add('box');
//         box.style.width = `${30 + i * 10}px`;
//         box.style.height = `${30 + i * 10}px`;
//         box.style.backgroundColor = getRandomHexColor();
//         boxesContainer.appendChild(box);
//       }
//     }

//     function destroyBoxes() {
//       const boxesContainer = document.getElementById('boxes');
//       boxesContainer.innerHTML = '';
//     }

//     const createButton = document.querySelector('[data-create]');
//     createButton.addEventListener('click', () => {
//       const input = document.querySelector('input[type="number"]');
//       const amount = parseInt(input.value);
//       createBoxes(amount);
//     });

//     const destroyButton = document.querySelector('[data-destroy]');
//     destroyButton.addEventListener('click', destroyBoxes);
console.log(document);

const body = document.body;
console.log(body);

const list = body.firstElementChild;
console.log(list);

const firstListItem = list.firstElementChild;
console.log(firstListItem);

const listItems = list.children;
console.log(listItems);