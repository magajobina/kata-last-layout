import '../scss/style.scss'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


function initSliders() {
  new Swiper('.brands-slider__swiper', {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  
  new Swiper('.main__brands-slider--huge-btns .brands-slider__swiper', {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });

  new Swiper('.price__slider', {
    modules: [Pagination],
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
}

//Свернуть-развернуть слайдеры=======================

//Переменные
let amountToShowFirst;
let amountToShowSecond;
const collectionFirst = document.querySelectorAll('.main__brands-slider--little-btns .brands-slider__slide');
const collectionSecond = document.querySelectorAll('.main__brands-slider--huge-btns .brands-slider__slide');
const showBtnFirst = document.querySelectorAll('.brands-slider__show')[0];
const showBtnSecond = document.querySelectorAll('.brands-slider__show')[1];


if (window.innerWidth < 768) {
  initSliders();
} else if (window.innerWidth < 1120) {
  amountToShowFirst = 6;
  amountToShowSecond = 3;
  initTogglers();
} else {
  amountToShowFirst = 8;
  amountToShowSecond = 4;
  initTogglers();
}

function hideShowSlides (collection, amountToShow, event) {

  for (let i = 0; i < collection.length; i++) {

    if (i >= amountToShow) {
      collection[i].classList.toggle('brands-slider__slide--hidden');
    }
  }

  if (event) {
    const target = event.currentTarget;
    target.classList.toggle('brands-slider__show--shown');

    target.classList.contains('brands-slider__show--shown') ? 
    target.textContent = 'Скрыть все' :
    target.textContent = 'Показать все';
  }
}

function initTogglers () {
  
  hideShowSlides(collectionFirst, amountToShowFirst);
  hideShowSlides(collectionSecond, amountToShowSecond);
  
}


showBtnFirst.addEventListener('click', event => hideShowSlides(collectionFirst, amountToShowFirst, event));
showBtnSecond.addEventListener('click', event => hideShowSlides(collectionSecond, amountToShowSecond, event));

//Модалка=====================

const modMenu = document.querySelector('.mod-menu');
const modMenuOpenBtn = document.querySelector('#mod-menu__open');
const modMenuCloseBtn = document.querySelector('#mod-menu__close');

const modFeedback = document.querySelectorAll('.mod-feedback')[0];
const modFeedbackOpenBtns = document.querySelectorAll('.mod-feedback-open--1');
const modFeedbackCloseBtn = document.querySelector('#mod-feedback__close');

const modFeedback2 = document.querySelectorAll('.mod-feedback')[1];
const modFeedbackOpenBtns2 = document.querySelectorAll('.mod-feedback-open--2');
const modFeedbackCloseBtn2 = document.querySelector('#mod-feedback__close2');

function toggleModal (modalToToggle, classToToggle) {

  modalToToggle.classList.toggle(classToToggle);

  scrollManager();

}

//Сделать modmenu закрывалась после открытия других модалок и body был overflow
function toggleModal2 (modalToToggle, classToToggle) {
  
  if (modMenu.classList.contains('mod-menu--active')) {
    modMenu.classList.remove('mod-menu--active');
  }

  modalToToggle.classList.toggle(classToToggle);

  scrollManager();
}

function scrollManager () {
  if (
    modMenu.classList.contains('mod-menu--active') || 
    modFeedback.classList.contains('mod-feedback--active') ||
    modFeedback2.classList.contains('mod-feedback--active')
  ) {
    document.body.classList.add('hide-scroll');
  } else {
    document.body.classList.remove('hide-scroll');
  }
}


//МОДАЛКА МЕНЮ---------------------------------------
modMenuOpenBtn.addEventListener('click', event => toggleModal(modMenu, 'mod-menu--active'));
modMenuCloseBtn.addEventListener('click', event => toggleModal(modMenu, 'mod-menu--active'));

modMenu.addEventListener('click', (event) => {
  
  if (event.target == event.currentTarget) {
    toggleModal(modMenu, 'mod-menu--active');
  }
})

//МОДАЛКА ФИДБЕК1--------------------------------------
modFeedbackCloseBtn.addEventListener('click', event => toggleModal2(modFeedback, 'mod-feedback--active'));
modFeedbackOpenBtns.forEach(el => {
  
  el.addEventListener('click', event => toggleModal2(modFeedback, 'mod-feedback--active'));
});


modFeedback.addEventListener('click', (event) => {
  
  if (event.target == event.currentTarget) {
    toggleModal2(modFeedback, 'mod-feedback--active');
  }
})

//МОДАЛКА ФИДБЕК2--------------------------------------
modFeedbackCloseBtn2.addEventListener('click', event => toggleModal2(modFeedback2, 'mod-feedback--active'));
modFeedbackOpenBtns2.forEach(el => {
  
  el.addEventListener('click', event => toggleModal2(modFeedback2, 'mod-feedback--active'));
});

modFeedback2.addEventListener('click', (event) => {

  if (event.target == event.currentTarget) {
    toggleModal2(modFeedback2, 'mod-feedback--active');
  }
})



//Разворот текста================
const readMoreServicesBtn = document.querySelector('.services__read-btn')

function toggleText (selector, event) {
  document.querySelector(selector).classList.toggle('text-shown');

  if (event) {
    const target = event.currentTarget;
    target.classList.toggle('brands-slider__show--shown');

    target.classList.contains('brands-slider__show--shown') ? 
    target.textContent = 'Скрыть' :
    target.textContent = 'Читать далее' ;
  }
}

readMoreServicesBtn.addEventListener('click', event => toggleText('.services__text-toggle', event))