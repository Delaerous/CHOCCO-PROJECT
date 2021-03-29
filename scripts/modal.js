

const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.fullscreen-menu');
const closeBtn = menu.querySelector('.fullscreen-menu__close');
const body = document.querySelector('body')

const togle = ()=> {
  menu.classList.toggle('active');
  body.classList.toggle('body__block');
}

btn.addEventListener('click', togle)


menu.addEventListener('click', (e) => {
  const target =e.target;
  const DataValue = target.dataset.scrollto;
   if (target.classList.contains('menu__link'))
  {
    ScrolltoSec(DataValue);
    togle();
}
  
})
const ScrolltoSec = (attr) => {
  const elem = document.querySelector(`[data-section-id=${attr}]`);
  window.scroll({
    top: elem.getBoundingClientRect,
    left: 0,
    behavior: 'smooth'}
  )
}

closeBtn.addEventListener('click', (e) => {
  if (closeBtn.classList.contains('fullscreen-menu__close')) {
    togle()
  }
})

