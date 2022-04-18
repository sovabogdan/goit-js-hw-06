function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

btnEl.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = getRandomHexColor();
}