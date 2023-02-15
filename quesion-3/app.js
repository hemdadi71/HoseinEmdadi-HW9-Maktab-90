'use strict';
const list = document.getElementById('list');
const ul = document.createElement('ul');
ul.classList.add('list-unstyled');
list.append(ul);

const addItems = text => {
  const li = document.createElement('li');
  li.classList.add('bg-white', 'fs-3','rounded-3','mt-4');
  li.innerHTML = text;
  ul.append(li);
};

while (true) {
  const input = prompt('Please Enter item of list');
  if (input === '' || input === null) {
    break;
  }
  addItems(input);
}
