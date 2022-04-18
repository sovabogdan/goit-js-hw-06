const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output')
}
function onInputChange(event) {
    if (event.currentTarget.value !== '') {
        refs.nameLabel.textContent = event.currentTarget.value;
    }
    else {
        refs.nameLabel.textContent = 'Anonymous'
    }
    
};
refs.input.addEventListener('input', onInputChange);
console.log(refs.input.currentTarget);