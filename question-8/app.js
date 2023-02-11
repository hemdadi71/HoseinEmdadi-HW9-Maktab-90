'use strict';

const item = document.querySelectorAll('.item');
const alertArr = Array.from(alert);

const imgAttr = { src: 'img/close.png', width: '25px' };

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const closeAlert = e => {
  e.currentTarget.parentElement.style.opacity = '0';
  e.currentTarget.parentElement.style.transition = 'all 1s';
};

item.forEach(element => {
  const img = document.createElement('img');
  setAttributes(img, imgAttr);
  img.classList.add('position-absolute', 'mx-3', 'end-0', 'cursor-pointer');
  element.prepend(img);

  img.addEventListener('click', closeAlert);
});
