/* в этот файл добавляет скрипты*/
let nav = document.querySelector('.main-nav');
let navButton = document.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--no-js');
nav.classList.add('main-nav--closed');

navButton.addEventListener('click', function () {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
  } else {
    nav.classList.add('main-nav--closed');
    nav.classList.remove('main-nav--opened');
  }
});
