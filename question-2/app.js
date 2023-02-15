'use strict';

const links = document.querySelectorAll('a');

const changeColor = arr => {
  arr.forEach(item => {
    const itemHref = item.getAttribute('href');
    if (
      itemHref.includes('://') &&
      !itemHref.startsWith('http://internal.com')
    ) {
      item.style.color = 'orange';
    }
  });
};
changeColor(links);
