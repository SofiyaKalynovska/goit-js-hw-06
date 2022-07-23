const textInput = document.querySelector('#validation-input');
const validSymbolsLength = Number(textInput.getAttribute('data-length'));

textInput.addEventListener("blur", () => {
  if (textInput.value.replaceAll(/\s/g, "").length === validSymbolsLength) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
})