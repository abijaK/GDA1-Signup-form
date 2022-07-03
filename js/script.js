const form = document.querySelector('form');
const email = document.querySelector('#input-email')
const input = document.querySelectorAll('input');
const password = document.querySelector('#input-password')

const strengthPasswordBadge = document.querySelector('.strengthPassword')

const smallMsg = document.querySelector('#isEmpty-form')

// set id for small tag
const small_firstname = document.querySelector('#first-name');
const small_lastname = document.querySelector('#last-name');
const small_email = document.querySelector('#e-mail');

const small_password = document.querySelector('#pass-word');



/*
    Check if form is not empty 
    ==========================
 */ 
// add listener on form
form.addEventListener('submit', (e) => {

    let  errorMsg;

    // Select all the input to check if isEmpty
    for (let i = 0; i < input.length; i++) {

        if (!input[i].value) {

        errorMsg = "Please fill in all fields !";
            break;
        }       
    }

    // prevent the sumit button while error exists
    if (errorMsg) {
        e.preventDefault();

        smallMsg.innerHTML = errorMsg;
        smallMsg.style.marginTop = '15px';
        smallMsg.style.fontSize = '15px';
        smallMsg.style.color = 'red';
        return false;

    } else {
        smallMsg.innerHTML = 'Form sent !';
        smallMsg.style.color = 'green';
    }
    
})


/*
    ====================== input Firstname traitement ======================
 */ 
// add listener for Firstname
form.firstname.addEventListener('change', () => {
   validFirstname(this);
})

// Create function to valide Firstname
const validFirstname = (inputFirstname) => {
    
    // Create RegExp for Firstname validation
    let firstnameRegExp = new RegExp('^[a-zA-Z-\s]+$', 'g');
    
    let testFirstname = firstnameRegExp.test(inputFirstname.value); 

    small_firstname.style.marginLeft = '66%';

    if (!testFirstname) {
        small_firstname.innerHTML = 'Looks like this cannot be an Firstname';
        small_firstname.style.marginLeft = '46%';
        small_firstname.style.color = 'red';
        
        return false;

    }else {
        form.lastname.style.border = '1px solid green';
        small_firstname.innerHTML = 'Valid Firstname';
        small_firstname.style.color = 'green';

        return true;
    }
}

/*
    ====================== input Lastname traitement ======================
*/ 

// add listener for Lastname
form.lastname.addEventListener('change', function () {
    validLastname(this);
})

// Create function validLastname
const validLastname = (inputLastname) => {

    // Create RegExp to validate Lastname
    let lastnameRegExp = new RegExp('^[a-zA-Z-\s]+$', 'g');
    
    let testLastname = lastnameRegExp.test(inputLastname.value); 

    // Retrieve 'small' tag to display messag
    small_lastname.style.marginLeft = '66%';
    
    if (!testLastname) {
        small_lastname.innerHTML = 'Looks like this cannot be an Lastname';
        small_lastname.style.marginLeft = '46%';
        small_lastname.style.color = 'red';
        
        return false;

    }else {
        form.lastname.style.border = '1px solid green';
        small_lastname.innerHTML = 'Valid Lastname';
        small_lastname.style.color = 'green';
        
        return true;
    }
}

/*
    ====================== input Email traitement ======================
 */ 
// add listener for Email
form.email.addEventListener('change', () => {
    validEmail(this);
})

// Create function validEmail
const validEmail = (inputEmail) => {
    
    // Create RegExp to validate Email
    let emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    // let emailRegExp = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$, \g /;

    let testEmail = emailRegExp.test(email.value);
    
    small_email.style.marginLeft = '50%';

    if (!testEmail) {
        small_email.innerHTML = 
        'Looks like this cannot be an email';
        small_email.style.color = 'red';
        
        return false;

    } else{
        
        small_email.innerHTML = 'Valid email';
        
        form.email.style.border = '1px solid green';
        small_email.style.color = 'green';
        small_email.style.marginLeft = '70%';
        
        return true;
    }

}


/*
    ====================== input password traitement ======================
 */ 
// add listener for Password
form.password.addEventListener('input', () => {
    validPassword(this);
})

const validPassword = (password) => {

    // Create RegExp to validate Password
    // let passwordRegExp = new RegExp('((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]){8,40})');

       // The strong and medium password RegExp pattern checker
       let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
       let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
                        
       // Set the background color and text of the badge according to the result
       function strengthChecker(passwordParams) {
           if (strongPassword.test(passwordParams)) {
               strengthPasswordBadge.innerHTML = 'Strong password';
               
               strengthPasswordBadge.style.backgroundColor = 'green';
               strengthPasswordBadge.textContent = 'Strong';
               
           } else if (mediumPassword.test(passwordParams)) {
               strengthPasswordBadge.style.backgroundColor = 'orange';
               strengthPasswordBadge.textContent = 'Medium';
           } else {
               strengthPasswordBadge.style.backgroundColor = 'red';
               strengthPasswordBadge.textContent = 'Weak'; 

               strengthPasswordBadge.innerHTML = 'Weak password';
               strengthPasswordBadge.style.color = 'white';
           }
       }
   
    //    console.log(form.password.value);
       // Adding an input event listener when a user types to the password input
       form.password.addEventListener('input', () => {
   
           // The badge is hidden by default, so we show it
           strengthPasswordBadge.style.display = 'block';
           //We then call the StrengChecker function as a callback then pass the typed password to it
           
        //    clearTimeout(timeout);
           let timeout = setTimeout(() => strengthChecker(password.value), 500);
   
            // if (strengthChecker(password.value)) {
            
                // In case a user clears the next, the badge is hidden again
                if(form.password.value.length !== 0) {
                    strengthPasswordBadge.style.display != 'block';
                } else {
                    strengthPasswordBadge.style.display = 'none';
                }
            // }
        })
}