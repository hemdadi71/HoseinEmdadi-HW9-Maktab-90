'use strict';

const container = document.getElementById('container');

let data = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      apple_tree: {},
      magnolia: {},
    },
  },
};

const createTree = (container, obj) => {
  container.append(createList(obj));
};

const createList = obj => {
  const keyOfObject = Object.keys(obj);
  if (!keyOfObject.length) return null;

  let ul = document.createElement('ul');
  ul.classList.add('fs-4');

  for (let key in obj) {
    let li = document.createElement('li');
    li.innerHTML = key;

    let childrenUl = createList(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

  return ul;
};
createTree(container, data);
