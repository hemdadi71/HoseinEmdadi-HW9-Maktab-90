'use strict';
const navItem = document.getElementById('navItem');
const list = document.getElementById('list');

const showList = () => {
  list.classList.toggle('h-75');
  list.setAttribute('data-mdb-toggle', 'animation');
};

navItem.addEventListener('click', showList);

