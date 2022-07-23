const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
  
  if (event.currentTarget.value.trim() === '') {
    textOutput.innerText = "Anonymous"
  } else {
    textOutput.textContent = event.currentTarget.value;
  }
});
