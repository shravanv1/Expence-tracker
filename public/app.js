const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    form.email.value = '';
    alert("Thanks for sending your email");
    
});
