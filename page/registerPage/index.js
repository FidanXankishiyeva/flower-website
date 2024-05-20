let showIcon = document.querySelector(".bi-eye-fill");
let hideIcon = document.querySelector(".bi-eye-slash-fill");
let passwordInp = document.querySelector(".password");
let emailInp = document.querySelector(".email-input");
let userNameInpt = document.querySelector(".name-input");
let errorMsj = document.querySelector(".error-msj-1");
let existMsj = document.querySelector(".error-msj-2");
let form= document.querySelector("form")
userExist = false;
// show password
hideIcon.addEventListener("click", showPassword);
function showPassword() {
  passwordInp.type = "text";
  hideIcon.style.display = "none";
  showIcon.style.display = "block";
}

// hide password
showIcon.addEventListener("click", hidePassword);

function hidePassword() {
  passwordInp.type = "password";
  hideIcon.style.display = "block";
  showIcon.style.display = "none";
}

// database yaratmaaq
function createDatabase() {
  let user = [];
  localStorage.setItem("users", JSON.stringify(user));
}

// createDatabase()

// handle resgister
form.addEventListener("submit", handleRegister);
function handleRegister(e) {
  e.preventDefault();
  if (emailInp.value && passwordInp.value && userNameInpt.value) {
    checkUser();
    errorMsj.style.display = "none";
  } else {
    errorMsj.style.display = "block";
  }
}

// userin yoxlanilmasi

function checkUser() {
  let users = localStorage.getItem("users");
  let userData = JSON.parse(users);
  for (let index = 0; index < userData.length; index++) {
    if (userData[index].email == emailInp.value) {
      userExist = true;
      break;
    } else {
      userExist = false;
    }
  }

  if(userExist){
    existMsj.style.display= 'block'
  }
  else{
    existMsj.style.display= 'none'
    createUser()
    window.location.href= "../loginPage/index.html"
  }
}

// istifadecinin yaradilmasi
function createUser(){
    let users = localStorage.getItem("users")
    let userData= JSON.parse(users)
    let user= {
        email: emailInp.value,
        password: passwordInp.value,
        name: userNameInpt.value
    };
    userData.push(user)

    localStorage.setItem('users', JSON.stringify(userData));
    form.reset()
}