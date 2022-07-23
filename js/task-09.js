function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorChangeButton: document.querySelector('.change-color'),
  colorNameText: document.querySelector('.color'),
  bodyWhichWillColored: document.querySelector('body')
}
refs.colorChangeButton.addEventListener("click", onBtnSubmitColorChanging);

function onBtnSubmitColorChanging() {
  refs.bodyWhichWillColored.style.backgroundColor = getRandomHexColor();
  refs.colorNameText.textContent = getRandomHexColor();
}
