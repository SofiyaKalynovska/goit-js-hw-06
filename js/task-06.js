const textInput = document.querySelector('#validation-input');
const validSymbolsLength = Number(textInput.getAttribute('data-length'));

textInput.addEventListener("blur", (e) => {
  if (textInput.value.replaceAll(/\s/g, "").length === validSymbolsLength) {
    textInput.classList.add('valid');
  } 
    textInput.classList.add('invalid');
  
      if (textInput.value.replaceAll(/\s/g, "").length === validSymbolsLength) {

        textInput.classList.remove('invalid');
      }
})