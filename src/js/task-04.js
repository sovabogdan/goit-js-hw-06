let counterValue = 0;
const counterField = document.querySelector('#value');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

function onBtnDecrement() {
    counterValue -= 1;
    counterField.innerHTML = counterValue; 
};

btnDecrement.addEventListener('click', onBtnDecrement);

function onBtnIncrement() {
    counterValue += 1;
    counterField.innerHTML = counterValue; 
};


btnIncrement.addEventListener('click', onBtnIncrement);

