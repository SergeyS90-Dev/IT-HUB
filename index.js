const btn = document.querySelector('.burger');
const menuEl = document.querySelector('.menu');
const close = document.querySelector('.menu__btn');


btn.addEventListener('click', function (e) {
  menuEl.classList.add('menu--open');
  btn.classList.add('burger--active');
  btn.setAttribute('aria-expanded', 'true');
});

close.addEventListener('click', function (e) {
  menuEl.classList.remove('menu--open');
  btn.classList.remove('burger--active');
  btn.setAttribute('aria-expanded', 'false');

  btn.focus()
});


const yardBtn = document.querySelector('.yard-park__btn');
const yardImg = document.querySelector('.yard-park__image');
const yardClose = document.querySelector('.yard-park__button');

yardBtn.addEventListener('click', function () {
  yardImg.classList.add('yard-park__image--open');
  yardClose.classList.add('yard-park__button--active');
  yardBtn.classList.add('yard-park__btn--active');
});

yardClose.addEventListener('click', function () {
  yardImg.classList.remove('yard-park__image--open');
  yardClose.classList.remove('yard-park__button--active');
  yardBtn.classList.remove('yard-park__btn--active');
});


const openFormBtn = document.querySelector('.apartaments__btn');
const modal = document.querySelector('.form-modal');
const form = document.querySelector('.form');
const result = document.querySelector('.form-result');
const closeResultBtn = document.querySelector('.form__button');

const resultValues = document.querySelectorAll('.form-result__value');

const agree = document.querySelector('#agree');

openFormBtn.addEventListener('click', function () {
  modal.classList.add('form-modal--active');
});

closeResultBtn.addEventListener('click', function () {
  modal.classList.remove('form-modal--active');
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  if (!agree.checked) {
    agree.setCustomValidity(
      'Необходимо согласиться на обработку персональных данных'
    );
    agree.reportValidity();
    return;
  }

  const selectedConsultation = form.querySelector(
    'input[name="sminex"]:checked'
  );

  const values = {
    family: document.querySelector('#family').value.trim(),
    name: document.querySelector('#name').value.trim(),
    phone: document.querySelector('#phone').value.trim(),
    mail: document.querySelector('#mail').value.trim(),
    description: document.querySelector('#description').value.trim(),
    consultation: selectedConsultation
      ? selectedConsultation.value
      : 'Не выбрано'
  };

  resultValues.forEach(function (item) {
    const key = item.dataset.result;
    item.textContent = values[key] || 'Не указано';
  });

  result.classList.add('form-result--active');
});

agree.addEventListener('change', function () {
  agree.setCustomValidity('');
});



