'use strict';
const add = document.querySelectorAll('.add');
const minus = document.querySelectorAll('.minus');
const card = document.querySelectorAll('.card');
const price = document.querySelectorAll('.price');
const totalOrder = document.getElementById('total-price');
const wagePrice = document.getElementById('wage-price');
const paymentPrice = document.getElementById('payment');
const form = document.getElementById('form');
const discount = document.getElementById('discount-percent');
const tick = document.getElementById('tick');
const orderBtn = document.getElementById('orderBtn');
const container = document.getElementById('container');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const button = document.getElementById('button');
const modalText = document.getElementById('modalText');
// ................................................................................................
const state = [
  {
    id: 1,
    price: 8000,
  },
  {
    id: 2,
    price: 10000,
  },
  {
    id: 3,
    price: 10000,
  },
  {
    id: 4,
    price: 20000,
  },
  {
    id: 5,
    price: 25000,
  },
  {
    id: 6,
    price: 10000,
  },
  {
    id: 7,
    price: 6000,
  },
  {
    id: 8,
    price: 5000,
  },
  {
    id: 9,
    price: 8000,
  },
  {
    id: 10,
    price: 25000,
  },
];
const off = [
  {
    name: 'golden',
    percent: 30,
  },
  {
    name: 'silver',
    percent: 20,
  },
  {
    name: 'bronze',
    percent: 10,
  },
];
for (const item of state) {
  item.counter = 0;
  item.maxPrice = 0;
}
let maxOrder = 0;
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
  wagePrice.innerHTML = `${total * 0.05} تومان`;
  paymentPrice.innerHTML = `${total + total * 0.05} تومان`;
  maxOrder = total + total * 0.05;
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
      e.currentTarget.parentElement.nextElementSibling.innerHTML = `${item.maxPrice} تومان`;
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
        e.currentTarget.parentElement.nextElementSibling.innerHTML = `${item.maxPrice} تومان`;
      }
    }
  }
  toatlOrder(state);
};
// .......................................Payment Price After Discount............................................
const handlePaymentPrice = e => {
  const input =
    e.currentTarget.parentElement.previousElementSibling.value.toLowerCase();
  for (let item of off) {
    if (input === item.name) {
      discount.innerHTML = `${item.percent} درصد`;
      paymentPrice.innerHTML = `${
        maxOrder - maxOrder * (item.percent / 100)
      } تومان`;
    }
  }
  form.reset();
};
// ........................................Show Modal................................................
const handleShowModal = () => {
  if (paymentPrice.innerHTML === '0 تومان') {
    modalText.innerHTML = `شما چیزی سفارش نداده اید.`;
    button.innerHTML = `بازگشت`;
  } else {
    modalText.innerHTML = `سفارش شما ثبت شد.`;
    button.innerHTML = `باشه`;
  }
  container.classList.add('blur');
  modal.classList.remove('d-none');
  modal.classList.add('d-block');
  modalBody.classList.remove('d-none');
  modalBody.classList.add('d-block');
};
// .......................................Hide Modal..................................................
const handleHideModal = () => {
  container.classList.remove('blur');
  modal.classList.add('d-none');
  modal.classList.remove('d-block');
  modalBody.classList.add('d-none');
  modalBody.classList.remove('d-block');
  location.reload();
};
// ................................................................................................
add.forEach(item => item.addEventListener('click', handleAddOrder));
minus.forEach(item => item.addEventListener('click', handleMinusOrder));
tick.addEventListener('click', handlePaymentPrice);
orderBtn.addEventListener('click', handleShowModal);
button.addEventListener('click', handleHideModal);
