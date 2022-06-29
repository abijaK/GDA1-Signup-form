let form = document.querySelector('#loginForm');

/*
    test if form is not empty 
    =========================
 */ 
// add listener on form
form.addEventListener('submit', function () {
    validForm(this);
})

const validForm = function (params) {
    
    let small = params.nextElementSibling;
    // test if isNull
    if (params.value.trim() == '') {
        small.innerHTML = 'Firstname cannot be empty';
        small.style.color = 'red';
    }
}

/*
    input Firstname traitement
    ==========================
 */ 
// add listener for Firstname
form.firstname.addEventListener('change', function() {
   validFirstname(this);
})

// Create function to valide Firstname
const validFirstname = function(inputFirstname) {
    
    // Create RegExp for Firstname validation
    let firstnameRegExp = new RegExp('^[a-zA-Z-\s]+$', 'g');
    
    let testFirstname = firstnameRegExp.test(inputFirstname.value); 

    // Catch the 'small' tag
    let small = inputFirstname.nextElementSibling;
    const smallStyle = document.querySelector('div');

    if (!testFirstname) {
        small.innerHTML = 'Looks like this cannot be an Firstname';
        small.style.color = 'red';
    }else if (inputFirstname.value.trim() == '') {
        small.innerHTML = 'Firstname cannot be empty';
        small.style.color = 'red';
    }
}

/*
    input Lastname traitement
    ==========================
*/ 

// add listener for Lastname
form.lastname.addEventListener('change', function () {
    validLastname(this);
})

// Create function validLastname
const validLastname = function(inputLastname) {

    // Create RegExp to validate Lastname
    let lastnameRegExp = new RegExp('^[a-zA-Z-\s]+$', 'g');
    
    let testLastname = lastnameRegExp.test(inputLastname.value); 

    // Catch the 'small' tag
    let small = inputLastname.nextElementSibling;
    const smallStyle = document.querySelector('div');
    
    if (!testLastname) {
        small.innerHTML = 'Looks like this cannot be an Lastname';
        small.style.color = 'red';
    }else if (inputLastname.value.trim() == '') {
        small.innerHTML = 'Lastname cannot be empty';
        small.style.color = 'red';
    }
}

/*
    input Email traitement
    ======================
 */ 
// add listener for Email
form.email.addEventListener('change', function() {
    validEmail(this);
})

// Create function validEmail
const validEmail = function(inputEmail) {
    
    // Create RegExp to validate Email
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
    
    let testEmail = emailRegExp.test(inputEmail.value); 

    // Catch the 'small' tag
    let small = inputEmail.nextElementSibling;
    const smallStyle = document.querySelector('div');

    if (!testEmail) {
        small.innerHTML = 'Looks like this cannot be an email';
        small.style.color = 'red';
    }
}

// add listener for Password
form.password.addEventListener('change', function () {
    validPassword(this);
})

// Create function validPassword
const validPassword = function (inputPassword) {
    
    
}