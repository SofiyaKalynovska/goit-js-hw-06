let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');

counter.innerHTML = counterValue;

const onDecrementBtnClick = () => {
  counterValue--;
  counter.innerHTML = counterValue;
};
const onIncrementBtnClick = () => {
  counterValue++;
  counter.innerHTML = counterValue;
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);



