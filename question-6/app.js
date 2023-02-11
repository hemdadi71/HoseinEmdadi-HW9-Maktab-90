'use strict';
const hider = document.getElementById('hider');
const text = document.getElementById('text');

const hideText = (txt, fun) => {
  txt.classList.add('d-none');
  return setTimeout(fun, 5000);
};
const hideBtn = () => {
  return hider.classList.add('d-none');
};

hider.addEventListener('click', () => hideText(text, hideBtn));
