'use strice';

const table = document.getElementById('age-table');
console.log(table.outerHTML);
const labels = table.querySelectorAll('label');
console.log(labels);
const td = table.querySelector('td');
console.log(td.outerHTML);
const formSearch = document.querySelector('form[name="search"]');
console.log(formSearch.outerHTML);
const firstInput = formSearch.querySelector('input');
console.log(firstInput.outerHTML);
const lastInput = formSearch.querySelector('input:nth-child(2)');
console.log(lastInput.outerHTML);
