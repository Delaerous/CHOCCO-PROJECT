//hamburger and scroll-to

const fullMenu = document.querySelector(".menu__mobile");
const hamburger = document.querySelector(".hamburger");
const body = document.querySelector('body');
const Link = $('.menu__link');


hamburger.addEventListener('click', e => {
  e.preventDefault();

  if (fullMenu.classList.contains('menu__mobile__active')) {

    fullMenu.classList.remove('menu__mobile__active');
    hamburger.classList.remove('hamburger__active');
    body.classList.remove('body__block');
  } else {
  fullMenu.classList.add('menu__mobile__active');
  hamburger.classList.add('hamburger__active');
  body.classList.add('body__block');
  }
});

Link.on('click', (e) => {
  e.preventDefault();
  const curLink = $(e.currentTarget);
  const dataValue = curLink.attr('data-scroll-to');
  scrollToSection(dataValue); 
  if (body.classList.contains('body__block')) {
    hamburger.classList.remove('hamburger__active');
    body.classList.remove('body__block');
    fullMenu.classList.remove('menu__mobile__active');
  }
})

const scrollToSection = (value) => {
  const elem = document.querySelector(`[data-section=${value}]`);
  window.scroll({
    left: 0,
    top: elem.offsetTop,
    behavior: "smooth"
  });
}
