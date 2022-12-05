//Scroll nav bar(chỉ là css thôi)
const navbar = document.querySelector("header");

function myFunction() {
    if (window.scrollY > 200) {
        navbar.style.background = "#fff"

    } else {
        navbar.style.background = "rgba(200, 200, 200, 0.253)"

    }
}