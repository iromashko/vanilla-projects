(function () {
  const openingButton = document.querySelector('.sidebar__hamburger');
  const closingButton = document.querySelector('.sidebar__close');
  const sidebar = document.querySelector('.sidebar');

  openingButton.addEventListener('click', () => {
    sidebar.classList.add('sidebar--opened');
  });

  closingButton.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--opened');
  });
})();

(function () {
  const slides = document.querySelectorAll('.fade-slider__item');
  const activeClass = 'fade-slider__item--visible';

  let index = 0;

  setInterval(function () {
    slides[index].classList.remove(activeClass);
    index++;

    if (index + 1 > slides.length) {
      index = 0;
    }

    slides[index].classList.add(activeClass);
  }, 5000);
})();

(function () {
  const controlls = document.querySelectorAll('.filter__link');
  const activeClass = 'filter__item--active';

  controlls.forEach(function (control) {
    control.addEventListener('click', function (e) {
      e.preventDefault();

      controlls.forEach(function (control) {
        control.closest('.filter__item').classList.remove(activeClass);
      });

      control.closest('.filter__item').classList.add(activeClass);
    });
  });
})();
