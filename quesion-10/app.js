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
    wage: 1000,
  },
  {
    id: 2,
    price: 10000,
    wage: 2000,
  },
  {
    id: 3,
    price: 10000,
    wage: 3000,
  },
  {
    id: 4,
    price: 20000,
    wage: 4000,
  },
  {
    id: 5,
    price: 25000,
    wage: 5000,
  },
  {
    id: 6,
    price: 10000,
    wage: 6000,
  },
  {
    id: 7,
    price: 6000,
    wage: 0,
  },
  {
    id: 8,
    price: 5000,
    wage: 0,
  },
  {
    id: 9,
    price: 8000,
    wage: 1000,
  },
  {
    id: 10,
    price: 25000,
    wage: 3000,
  },
];
for (const item of state) {
  item.counter = 0;
  item.maxPrice = 0;
  item.maxWage = 0;
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
  let wage = 0;
  for (const item of arr) {
    total += item.maxPrice;
    wage += item.maxWage;
  }
  totalOrder.innerHTML = `${total} تومان`;
  wagePrice.innerHTML = `${wage} تومان`;
  paymentPrice.innerHTML = `${total + wage} تومان`;
  maxOrder = total + wage;
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
      item.maxWage = item.wage * item.counter;
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
        item.maxWage = item.wage * item.counter;
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
  if (input === 'golden') {
    discount.innerHTML = `${30} درصد`;
    paymentPrice.innerHTML = `${maxOrder - maxOrder * 0.3} تومان`;
  } else if (input === 'silver') {
    discount.innerHTML = `${20} درصد`;
    paymentPrice.innerHTML = `${maxOrder - maxOrder * 0.2} تومان`;
  } else if (input === 'bronze') {
    discount.innerHTML = `${10} درصد`;
    paymentPrice.innerHTML = `${maxOrder - maxOrder * 0.1} تومان`;
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
