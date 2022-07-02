const back_box = document.querySelector('.back-box'),
      user_email = document.querySelector('#email'),
      user_passwd = document.querySelector('#passwd'),
      form_element = document.querySelector('#login'),
      btn_register = document.querySelector('.btn-register'),
      show_passwd = document.querySelector('#show-passwd'),
      hide_passwd = document.querySelector('#hide-passwd'),
      about_us = document.querySelector('.about-us');

let localStorageData = localStorage.getItem('users');

if (localStorageData) {
    var users = JSON.parse(localStorageData),
        obj = users.user_registered
}
      
var firstname_registered,
    email_registered,
    passwd_registered,
    valid_email = false,
    valid_passwd = false;

// Back Box Event Listener
back_box.addEventListener('click', () => {
    history.back();
})

// User Email Event Listeners
user_email.addEventListener('input', () => {
    user_email.value = user_email.value.toLowerCase();
})

user_email.addEventListener('change', () => {
    Object.keys(obj).forEach(function(id) {
        if (obj[id].email == user_email.value) {
            firstname_registered = obj[id].firstname
            email_registered = obj[id].email
            passwd_registered = obj[id].passwd
        }
    })
} )




// Form Element Event Listener
form_element.addEventListener('submit', (evento) => {
    if (user_email.value == email_registered) {
        valid_email = true;
    }
    else {
        valid_email = false;
    }
    if (user_passwd.value == passwd_registered) {
        valid_passwd = true;
    }
    else {
        valid_passwd = false;
    }
    if (!valid_email || !valid_passwd) {
        user_passwd.style.backgroundColor = '#f1343499';
    }
    else if (valid_email && valid_passwd) {
        var users = {
            'user_login': [{
                'firstname': firstname_registered,
                'email': user_email.value, 
                'passwd': user_passwd.value,
                'access': true
            }]
        }
    
        localStorage.setItem('user_login', JSON.stringify(users));
        location.href = 'Calendario/Calendario.html';
    }
    else {
        var users = {
            'user_login': [{
                'firstname': firstname_registered,
                'email': user_email.value, 
                'passwd': user_passwd.value,
                'access': false
            }]
        }
        localStorage.setItem('user_login', JSON.stringify(users));
    }
    evento.preventDefault();
})

btn_register.addEventListener('click', () => {
    location.href = 'Login/register.html';
})

show_passwd.addEventListener('click', (event) => {
    user_passwd.setAttribute('type', 'text');
    show_passwd.style.display = 'none';
    hide_passwd.style.display = 'block';
    event.preventDefault();
})

hide_passwd.addEventListener('click', (event) => {
    user_passwd.setAttribute('type', 'password');
    show_passwd.style.display = 'block';
    hide_passwd.style.display = 'none';
    event.preventDefault();
})

about_us.addEventListener('click', () => {
    location.href = 'Login/about.html';
})