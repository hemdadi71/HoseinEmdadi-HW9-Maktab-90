'use strict';
const add = document.querySelectorAll('.add');
const minus = document.querySelectorAll('.minus');
const card = document.querySelectorAll('.card');
const price = document.querySelectorAll('.price');
const totalOrder = document.getElementById('total-price');
// ................................................................................................
const state = [
  {
    id: 1,
    price: 8000,
    wage: 1000,
    counter: 0,
    maxPrice: 0,
  },
  {
    id: 2,
    price: 10000,
    wage: 2000,
    counter: 0,
    maxPrice: 0,
  },
  {
    id: 3,
    price: 10000,
    wage: 3000,
    counter: 0,
    maxPrice: 0,
  },
  {
    id: 4,
    price: 20000,
    wage: 4000,
    counter: 0,
    maxPrice: 0,
  },
  {
    id: 5,
    price: 25000,
    wage: 5000,
    counter: 0,
    maxPrice: 0,
  },
  {
    id: 6,
    price: 10000,
    wage: 6000,
    counter: 0,
    maxPrice: 0,
  },
  {
    id: 7,
    price: 6000,
    wage: 0,
    counter: 0,
    maxPrice: 0,
  },
  {
    id: 8,
    price: 5000,
    wage: 0,
    counter: 0,
    maxPrice: 0,
  },
  {
    id: 9,
    price: 8000,
    wage: 1000,
    counter: 0,
    maxPrice: 0,
  },
  {
    id: 10,
    price: 25000,
    wage: 3000,
    counter: 0,
    maxPrice: 0,
  },
];

// ......................Add Price To Each Product...................................................
price.forEach(elem => {
  for (const item of state) {
    if (item.id === +elem.dataset.id) {
      elem.innerHTML = `${item.price} تومان`;
    }
  }
});
// ................................Total Order.....................................................
const toatlOrder = arr => {
  let total = 0;
  for (const item of arr) {
    total += item.maxPrice;
  }
  totalOrder.innerHTML = `${total} تومان`;
};
// .....................................Add Order..................................................
const handleAddOrder = e => {
  for (const item of state) {
    if (
      +e.currentTarget.closest('#card-icon').previousElementSibling.dataset
        .id === item.id
    ) {
      item.counter += 1;
      item.maxPrice = item.price * item.counter;
      e.currentTarget.nextElementSibling.innerHTML = item.counter;
      e.currentTarget.parentElement.nextElementSibling.innerHTML = `${
        item.maxPrice
      } تومان`;
    }
  }
  toatlOrder(state);
};
// ..................................Remove Order..................................................
const handleMinusOrder = e => {
  for (const item of state) {
    if (item.counter > 0) {
      if (
        +e.currentTarget.closest('#card-icon').previousElementSibling.dataset
          .id === item.id
      ) {
        item.counter -= 1;
        item.maxPrice = item.price * item.counter;
        e.currentTarget.previousElementSibling.innerHTML = item.counter;
        e.currentTarget.parentElement.nextElementSibling.innerHTML = `${
          item.maxPrice
        } تومان`;
      }
    }
  }
  toatlOrder(state);
};
// ................................................................................................
add.forEach(item => item.addEventListener('click', handleAddOrder));
minus.forEach(item => item.addEventListener('click', handleMinusOrder));
