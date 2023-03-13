let menuIcon = document.getElementById("menu-icon")
let menu = document.getElementById("menu")
let checkBox = document.getElementById("check-box")


menuIcon.addEventListener("click", () => {
    menu.classList.toggle("nav-show")
})

document.addEventListener("scroll", () => {
    menu.classList.remove("nav-show")
    checkBox.checked = false
})``