/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.main-nav');
const navButton = document.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--no-js');
nav.classList.add('main-nav--closed');

navButton.addEventListener('click', () => {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    nav.classList.add('main-nav--opened');
  } else {
    nav.classList.add('main-nav--closed');
    nav.classList.remove('main-nav--opened');
  }
});
