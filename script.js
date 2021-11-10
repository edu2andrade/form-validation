//Atribuir variaveis
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const btn = document.querySelector('button')

//escutar o submit
btn.addEventListener('click', (e) => {
    //prevent default (reload page)
    e.preventDefault()
    //call function para checar os inputs
    checkInputs()
})
//Main function --> verifica os inputs
function checkInputs() {
    //get the values from inputs, put in local variables. the trim function remove spaces!
    const userNameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(userNameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'This field cannot be empty!')
    } else {
        //add success class
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'This field cannot be empty!')
    } else if(!isEmailValid(emailValue)) { //Se o email não for válido --> run setErrorFor. (Verifica através da function isEmailValid)
        setErrorFor(email, 'This format is not valid!')
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorFor(password, 'This field cannot be empty!')
    } else {
        setSuccessFor(password)
    }

    if(password2Value === '') {
        setErrorFor(password2, 'This field cannot be empty!')
    } else if(passwordValue !== password2Value) {//Verifica se as passwords são diferentes
        setErrorFor(password2, 'Passwords does not match!')
    } else {
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement //  All .form-control class
    const small = formControl.querySelector('small')

    //add error message inside small tag
    small.innerText = message

    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement //All .form-control class
    formControl.className = 'form-control success'
}

// Função para testar o email - CUIDADO com o REGEX, clientside não é a forma mais segura de testar o email. Return --> true or false.
function isEmailValid(email) {
    return /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
}