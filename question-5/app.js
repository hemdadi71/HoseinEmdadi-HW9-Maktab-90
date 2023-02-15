'use strict';
const element = document.getElementById('elem');
const btn = document.getElementById('btn');

const clears = elem => {
  // remove li from ol
  elem.innerHTML = '';
  // remove ol
  // elem.remove();
};

btn.addEventListener('click', () => clears(element));
