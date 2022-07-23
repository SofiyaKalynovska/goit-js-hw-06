const refs = {
  inputSelector: document.querySelector('#font-size-control'),
  spanWithText: document.querySelector('#text')
};
refs.inputSelector.addEventListener("input", (event) => {
  refs.spanWithText.style.fontSize = event.currentTarget.value + "px";
});