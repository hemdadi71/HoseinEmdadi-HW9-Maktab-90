'use strice';

const table = document.getElementById('age-table');
console.log(table.outerHTML);

const labels = table.querySelectorAll('label');
console.log(labels);

const td = table.childNodes[1].children[0].children[0];
console.log(td.outerHTML);

const formSearch_1 = document.getElementsByName('search')[0];
console.log(formSearch_1.outerHTML);

const FormSearch = document.querySelectorAll('form')[0];
console.log(FormSearch.outerHTML);

const firstInput = FormSearch.children[0].children[0];
console.log(firstInput.outerHTML);

const lastInput = FormSearch.children[1];
console.log(lastInput.outerHTML);
