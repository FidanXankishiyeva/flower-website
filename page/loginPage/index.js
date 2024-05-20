let showIcon= document.querySelector('.bi-eye-fill')
let hideIcon= document.querySelector('.bi-eye-slash-fill')
let passwordInp= document.querySelector('.password-input')
// show password
hideIcon.addEventListener('click', showPassword)

function showPassword(){
    passwordInp.type= 'text'
    hideIcon.style.display= 'none'
    showIcon.style.display= 'block'
}

// hide password
showIcon.addEventListener('click', hidePassword)

function hidePassword(){
    passwordInp.type= 'password'
    hideIcon.style.display= 'block'
    showIcon.style.display= 'none'
}