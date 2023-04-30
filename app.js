let menuIcon = document.getElementById("menu-icon");
let menu = document.getElementById("menu");
let checkBox = document.getElementById("check-box");
let faqQuestions = document.querySelectorAll(".question");
let faqIcons = document.querySelectorAll(".faq-icon");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("nav-show");
});

document.addEventListener("scroll", () => {
  menu.classList.remove("nav-show");
  checkBox.checked = false;
});

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("active");
  });
});
