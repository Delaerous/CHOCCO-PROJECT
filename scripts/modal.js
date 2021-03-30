

const btn = document.querySelector('#hamburger');
const popup = document.querySelector('#popup');
const closeBtn = menu.querySelector('.popup__close');
const body = document.querySelector('body')

const togle = ()=> {
  popup.classList.toggle('active');
  body.classList.toggle('body__block');
}

btn.addEventListener('click', togle)


popup.addEventListener('click', (e) => {
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

