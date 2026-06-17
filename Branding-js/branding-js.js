
let menuBtn = document.querySelector(".header__burger");
console.log(menuBtn);
let body = document.body;
menuBtn.addEventListener("click", function () {
  let nav = document.querySelector(".header__menu");
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle('lock');
});



const btnToUp = document.querySelector(".btnUp");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 350) {
    btnToUp.style.display = "block"; 
  } else {
    btnToUp.style.display = "none";
  }
});

btnToUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
