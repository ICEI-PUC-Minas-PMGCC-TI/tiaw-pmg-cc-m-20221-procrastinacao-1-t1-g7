const back_box = document.querySelector('.back-box'),
      user_firstname = document.querySelector('#firstname'),
      user_lastname = document.querySelector('#lastname'),
      user_email = document.querySelector('#email'),
      user_confirmemail = document.querySelector('#confirmemail'),
      user_passwd = document.querySelector('#passwd'),
      user_confirmpasswd = document.querySelector('#confirmpasswd'),
      form_element = document.querySelector('#register'),
      btn_login = document.querySelector('.btn-login'),
      show_passwd = document.querySelector('#show-passwd'),
      hide_passwd = document.querySelector('#hide-passwd');

let objUsers = {
    'user_registered': []
}
    
let localStorageData = localStorage.getItem('users')

if (localStorageData) {
    objUsers = JSON.parse(localStorageData)
}

var btn_submit = document.querySelector('.btn-submit'),
    valid_email = false,
    valid_passwd = false,
    obj = objUsers.user_registered


// Back Box Event Listener
back_box.addEventListener('click', () => {
    history.back();
})

// User First Name Event Listener
user_firstname.addEventListener('blur', () => {
    user_firstname.value = user_firstname.value.toLowerCase();
    user_firstname.value = user_firstname.value[0].toUpperCase() + user_firstname.value.slice(1);
})

// User Last Name Event Listener
user_lastname.addEventListener('blur', () => {
    user_lastname.value = user_lastname.value.toLowerCase();
    user_lastname.value = user_lastname.value[0].toUpperCase() + user_lastname.value.slice(1);
})

// User Email Event Listeners
user_email.addEventListener('input', () => {
    user_email.value = user_email.value.toLowerCase();
})

user_email.addEventListener('change', () => {
    Object.keys(obj).forEach(function(id) {
        if (obj[id].email == user_email.value) {
            alert('Email já cadastrado, tente realizar o login!')
            user_email.style.backgroundColor = '#f1343499';
            btn_submit.setAttribute('disabled', 'true');
            user_confirmemail.setAttribute('disabled', 'true');
            valid_email = false;
        }
        else {
            btn_submit.removeAttribute('disabled');
            user_confirmemail.removeAttribute('disabled');
        }
    })
} )

// User Confirm Email Event Listeners
user_confirmemail.addEventListener('input', () => {
    user_confirmemail.value = user_confirmemail.value.toLowerCase();
})

user_confirmemail.addEventListener('blur', () => {
    if (user_confirmemail.value != user_email.value) {
        user_confirmemail.style.backgroundColor = '#f1343499';
        valid_email = false;
        btn_submit.setAttribute('disabled', 'true');
    }
    else {
        user_confirmemail.style.backgroundColor = '#fff';
        valid_email = true;
        if (valid_email && valid_passwd) {
            btn_submit.removeAttribute('disabled');
        }
    }
})

// User Confirm Password Event Listener
user_confirmpasswd.addEventListener('blur', () => {
    if (user_confirmpasswd.value != user_passwd.value) {
        user_confirmpasswd.style.backgroundColor = '#f1343499';
        valid_passwd = false;
        btn_submit.setAttribute('disabled', 'true');
    }
    else {
        user_confirmpasswd.style.backgroundColor = '#fff';
        valid_passwd = true;
        if (valid_email && valid_passwd) {
            btn_submit.removeAttribute('disabled');
        }
    }
})


// Form Element Event Listener
form_element.addEventListener('submit', evento => {
    var users = {
        'firstname': user_firstname.value,
        'lastname': user_lastname.value,
        'email': user_email.value,
        'passwd': user_passwd.value,
        'phone': '',
        'age': '',
    }

    objUsers.user_registered.push(users)
    localStorage.setItem('users', JSON.stringify(objUsers));
    location.href = '../index.html';
    evento.preventDefault();
})

btn_login.addEventListener('click', () => {
    location.href = '../index.html';
})

show_passwd.addEventListener('click', (event) => {
    user_confirmpasswd.setAttribute('type', 'text');
    show_passwd.style.display = 'none';
    hide_passwd.style.display = 'block';
    event.preventDefault();
})

show_passwd.addEventListener('vmousedown', (event) => {
    user_confirmpasswd.setAttribute('type', 'text');
    show_passwd.style.display = 'none';
    hide_passwd.style.display = 'block';
    event.preventDefault();
})

hide_passwd.addEventListener('click', (event) => {
    user_confirmpasswd.setAttribute('type', 'password');
    show_passwd.style.display = 'block';
    hide_passwd.style.display = 'none';
    event.preventDefault();
})