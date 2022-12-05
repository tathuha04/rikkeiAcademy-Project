const inpEmail = document.getElementById("inp-email");
const inpPassword = document.getElementById("inp-password");
const btnPassword = document.getElementById("btn-password");
const btnSubmit = document.getElementById("btn-submit");
const errorCheck = document.getElementById("errorCheck");


var usersRegister = [];
//NÚT SUBMIT
let signUp = document.getElementById("btn-submit");
signUp.addEventListener("click", function () {
    if (checkForm()) {
        sessionStorage.setItem("user", JSON.stringify(usersRegister));
        window.location.href = "homePage.html";
    } else {
        errorCheck.innerHTML = "Email hoặc mật khẩu không đúng";
        errorCheck.style.color = "red";
        console.error("Email hoặc mật khẩu không đúng");
    }
})


////////////        CHECK FORM        //////////////
function checkForm() {
    if (checkLocalStorage() == true) {
        console.log("Tài khoản hợp lệ");
        return true;
    } else {
        console.log("Tài khoản không hợp lệ");
        return false;
    }
}

//       KIỂM TRA XEM TÀI KHOẢN ĐÃ ĐƯƠC ĐĂNG KÝ CHƯA
function checkLocalStorage() {
    let checkUser = localStorage.getItem("user");
    let listUser = JSON.parse(checkUser)
    for (const index in listUser) {
        console.log(listUser[index]);
        if (listUser[index].email == inpEmail.value && listUser[index].password == inpPassword.value) {
            return true;
        } else {
            return false;
        }
    }
}

//Hàm Nút Để Nhìn Mật Khẩu
btnPassword.addEventListener('click', function () {
    this.classList.toggle('fa-eye');
    inpPassword.setAttribute('type',
        inpPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    )
})