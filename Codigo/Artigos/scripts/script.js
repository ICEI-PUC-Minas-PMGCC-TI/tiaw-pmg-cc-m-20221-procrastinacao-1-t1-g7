var userLoggedData = localStorage.getItem('user_login');

onload = () => {
    if (userLoggedData) {
        var userLogged = JSON.parse(userLoggedData),
            userLoggedObj = userLogged.user_login;

        if (userLoggedObj[0].access != true) {
            location.href = '../index.html'
        }
    }

    else {
        location.href = '../index.html'
    }
}

function logout() {
    var users = {
        'user_login': [{
            'firstname': '',
            'email': '', 
            'passwd': '',
            'access': false
        }]
    }
    localStorage.setItem('user_login', JSON.stringify(users));
    location.href = '../index.html';
}