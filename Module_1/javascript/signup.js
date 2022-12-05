const inpEmail = document.getElementById("inp-email");
const inpPassword = document.getElementById("inp-password");
const btnPassword = document.getElementById("btn-password");
const inpConfirmPassword = document.getElementById("inp-confirmPassword");
const btnConfirmPassword = document.getElementById("btn-confirmPassword");
const btnSubmit = document.getElementById("btn-submit");
const noteEmail = document.getElementById("noteEmail");
const notePassword = document.getElementById("notePassword");
const noteConfirmPassword = document.getElementById("noteConfirmPassword");

var usersRegister = [];
let data = "user";

//NÚT SUBMIT
let signUp = document.getElementById("btn-submit");
signUp.addEventListener("click", function () {
    if (checkForm()) {
        console.log(usersRegister);
        usersRegister.push({
            email: inpEmail.value,
            password: inpPassword.value,
        })
        console.log(usersRegister);
        console.log(JSON.stringify(usersRegister));
        localStorage.setItem("user", JSON.stringify(usersRegister))
        window.location.href = "loginForm.html"
    }
})
console.log(usersRegister)


////////////        CHECK FORM        //////////////
function checkForm() {
    if (checkEmail() == true && checkPassword() == true && checkConfirmPassword() == true) {
        return true;
    } else {
        return false;
    }
}
//       KIỂM TRA EMAIL
function checkEmail() {
    const FormatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!(FormatEmail.test(String(inpEmail.value).toLowerCase()))) {
        noteEmail.innerHTML = "Email không định dạng";
        noteEmail.style.color = "red";
        console.log("Email không định dạng");
        return false;
    } else {
        noteEmail.innerHTML = "Địa chỉ email hợp lệ";
        noteEmail.style.color = "rgb(0, 255, 0)";
    }
    return true
}
//       KIỂM TRA PASSWORD
function checkPassword() {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (!(inpPassword.value.match(decimal))) {
        console.log("Email không định dạng");
        notePassword.innerHTML = "Password không định dạng";
        notePassword.style.color = "red"
        return false;
    } else {
        notePassword.innerHTML = "Password hợp lệ";
        notePassword.style.color = "rgb(0, 255, 0)"
    }
    return true
}
//       KIỂM TRA CONFIRM PASSWORD
function checkConfirmPassword() {
    if (inpConfirmPassword.value !== inpPassword.value) {
        console.log("Confirm Password không hợp lê");
        noteConfirmPassword.innerHTML = "Confirm Password không hợp lê";
        noteConfirmPassword.style.color = "red"
        return false;
    } else {
        noteConfirmPassword.innerHTML = "Confirm Password hợp lệ";
        noteConfirmPassword.style.color = "rgb(0, 255, 0)"
    }
    return true
}



//Hàm Nút Để Nhìn Mật Khẩu
btnPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpPassword.setAttribute('type',
        inpPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})

btnConfirmPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpConfirmPassword.setAttribute('type',
        inpConfirmPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})