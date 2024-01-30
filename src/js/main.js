let swiper = new Swiper('.brands-slider__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

let elementsToShow = 0;
let areElementsShown = false;
const showHideBtn = document.querySelector('#brands-slider__expand');
const slidesCollection = document.querySelectorAll('.brands-slider__slide');

if (window.innerWidth < 768) {
  elementsToShow = 10000;
  swiper.init();
} else if (window.innerWidth < 1120) {
  swiper.destroy();
  elementsToShow = 6;
} else {
  swiper.destroy();
  elementsToShow = 8;
}

showElementsInitially(elementsToShow);

function showElementsInitially(i) {

  slidesCollection.forEach(element => {

    if (i > 0) {
      element.classList.add('brands-slider__slide--show');
    }
    
    i--;
  });
  
}


showHideBtn.addEventListener('click', (e) => {

  areElementsShown ? hideElements() : showElements();
  showHideBtn.classList.toggle('brands-slider__show--shown');

})


function hideElements() {
  let counter = 0;

  slidesCollection.forEach(element => {
    if (counter >= elementsToShow) element.classList.remove('brands-slider__slide--show');

    counter++;

  });

  areElementsShown = false;
  showHideBtn.textContent = 'Показать все';
}

function showElements() {

  slidesCollection.forEach(element => {
    element.classList.add('brands-slider__slide--show');
  });

  areElementsShown = true;
  showHideBtn.textContent = 'Скрыть все';
}