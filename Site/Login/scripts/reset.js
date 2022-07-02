const back_box = document.querySelector('.back-box'),
      new_passwd = document.querySelector('.new-passwd'),
      confirm_passwd = document.querySelector('.confirm-passwd'),
      reset_form = document.querySelector('.reset-form'),
      form_button = document.querySelector('.form-button'),
      information = document.querySelector('.information'),
      show_passwd = document.querySelector('#show-passwd'),
      hide_passwd = document.querySelector('#hide-passwd'),
      show_confirmpwd = document.querySelector('#show-confirmpwd'),
      hide_confirmpwd = document.querySelector('#hide-confirmpwd');
     

var valid_passwd = true;

let userEmailReset = localStorage.getItem('user_email_reset'),
    localStorageData = localStorage.getItem('users');

if (localStorageData) {
    var users = JSON.parse(localStorageData),
        obj = users.user_registered
}

else {
    location.href = '../index.html';
}

// Back Box Event Listener
back_box.addEventListener('click', () => {
    history.back();
})


// User Confirm Password Event Listener
confirm_passwd.addEventListener('input', () => {
    if (confirm_passwd.value != new_passwd.value) {
        confirm_passwd.style.backgroundColor = '#f1343499';
        valid_passwd = false;
        form_button.setAttribute('disabled', 'true');
        information.innerText = 'As senhas não se coincidem.'
    }
    else {
        confirm_passwd.style.backgroundColor = '#fff';
        valid_passwd = true;
        form_button.removeAttribute('disabled');
        information.innerText = ''
    }
})


reset_form.addEventListener('submit', (event) => {
    if (valid_passwd) {
        Object.keys(obj).forEach(function(id) {
            if (obj[id].email == userEmailReset) {
                obj[id].passwd = confirm_passwd.value
                localStorage.setItem('users', JSON.stringify({'user_registered': obj}))
                localStorage.removeItem('user_email_reset');
                location.href = '../index.html'
            }
        })
    }

    event.preventDefault();
})


// Show and Hide Passwords Event Listeneres
show_passwd.addEventListener('click', (event) => {
    new_passwd.setAttribute('type', 'text');
    show_passwd.style.display = 'none';
    hide_passwd.style.display = 'block';
    event.preventDefault();
})

show_passwd.addEventListener('vmousedown', (event) => {
    new_passwd.setAttribute('type', 'text');
    show_passwd.style.display = 'none';
    hide_passwd.style.display = 'block';
    event.preventDefault();
})

hide_passwd.addEventListener('click', (event) => {
    new_passwd.setAttribute('type', 'password');
    show_passwd.style.display = 'block';
    hide_passwd.style.display = 'none';
    event.preventDefault();
})

show_confirmpwd.addEventListener('click', (event) => {
    confirm_passwd.setAttribute('type', 'text');
    show_confirmpwd.style.display = 'none';
    hide_confirmpwd.style.display = 'block';
    event.preventDefault();
})

show_confirmpwd.addEventListener('vmousedown', (event) => {
    confirm_passwd.setAttribute('type', 'text');
    show_confirmpwd.style.display = 'none';
    hide_confirmpwd.style.display = 'block';
    event.preventDefault();
})

hide_confirmpwd.addEventListener('click', (event) => {
    confirm_passwd.setAttribute('type', 'password');
    show_confirmpwd.style.display = 'block';
    hide_confirmpwd.style.display = 'none';
    event.preventDefault();
})