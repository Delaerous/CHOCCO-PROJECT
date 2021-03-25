const hamburgerBtn = document.querySelector(".hamburger");
const modalMenu = document.querySelector(".fullscreen-menu");
const body = document.body;
const hamburgerBtnClose = document.getElementById("close");
const hero = document.querySelector(".hero");

hamburgerBtn.addEventListener("click", function () {
  modalMenu.style.display = "flex";
  body.style.overflow = "hidden";
  hero.style.display = "none";
});

hamburgerBtnClose.addEventListener("click", function () {
  modalMenu.style.display = "none";
  body.style.overflow = "";
  hero.style.display = "";
});
