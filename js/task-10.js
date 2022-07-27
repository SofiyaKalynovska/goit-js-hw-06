function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого < div > - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  numberOfBoxes: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes')
}

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", destroyBoxes)


function onCreateBtnClick() {
  const amountOfBoxes = Number(refs.numberOfBoxes.value);
  createBoxes(amountOfBoxes)
}

function createBoxes(amount) {
  let arr = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.height = `${30 + 10*i}px`;
    newBox.style.width = `${30 + 10*i}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    arr.push(newBox);
  }
  refs.boxes.append(...arr)
}

function destroyBoxes() {
  refs.numberOfBoxes.value = "";
  refs.boxes.innerHTML = "";
}
