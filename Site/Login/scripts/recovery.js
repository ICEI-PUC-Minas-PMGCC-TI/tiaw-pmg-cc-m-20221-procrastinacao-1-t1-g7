const back_box = document.querySelector('.back-box'),
    code_form = document.querySelector('.code-form'),
    code_input = document.querySelector('.code-input'),
    form_input = document.querySelector('.form-input'),
    form_email = document.querySelector('.email-form'),
    request_email = document.querySelector('.request-email'),
    request_code = document.querySelector('.request-code');


var code = 0,
    existEmail = false;


while (code < 0 || code < 100000) {
    code = Math.floor(Math.random() * 999999) - 100000;
}

console.log(code);

let localStorageData = localStorage.getItem('users');

if (localStorageData) {
    var users = JSON.parse(localStorageData),
        obj = users.user_registered
}

onload = () => {
    request_code.style.display = 'none';
    request_email.style.display = 'flex';
}

form_input.addEventListener('input', () => {
    form_input.value = form_input.value.toLowerCase();
})


form_email.addEventListener('submit', (event) => {

    if (!localStorageData) {
        alert("Nenhuma conta encontrada.");
        event.preventDefault();
        return;
    }

    Object.keys(obj).forEach(function(id) {
        if (obj[id].email == form_input.value) {
            existEmail = true;
            localStorage.setItem('user_email_reset', obj[id].email);
        }
    })

    if (!existEmail) {
        alert("Nenhuma conta encontrada.");
    } else {
        request_email.style.display = 'none';
        request_code.style.display = 'flex';
    }

    event.preventDefault();
})

code_form.addEventListener('submit', (event) => {
    if (code_input.value == code) {
        location.href = 'reset-passwd.html';
    } else {
        alert("Código incorreto!");
    }

    event.preventDefault();
})

// Back Box Event Listener
back_box.addEventListener('click', () => {
    history.back();
})