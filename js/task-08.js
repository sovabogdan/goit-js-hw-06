const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
        }= event.currentTarget;
    
    
         if (email.value=== '' || password.value === '') {
        alert('Вы не заполнили все поля');
    }
    console.log({ Email: email.value, Password: password.value });
   

        form.reset();
        
};