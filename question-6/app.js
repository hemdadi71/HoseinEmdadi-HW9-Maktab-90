'use strict';
const hider = document.getElementById('hider');
const text = document.getElementById('text');

const hideText = (txt, fun) => {
  txt.classList.add('d-none');
  setTimeout(fun, 5000);
};
const hideBtn = () => {
  hider.classList.add('d-none');
};

hider.addEventListener('click', () => hideText(text, hideBtn));
