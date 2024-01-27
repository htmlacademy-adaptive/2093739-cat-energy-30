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

let slider = document.querySelector('.slider');
let before = document.querySelector('.slider__before');
let beforeImage = document.querySelector('.slider__before-image');
let change = document.querySelector('.slider__button-curtain');
let body = document.body;

let isActive = false;

try {
  let width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;

  change.addEventListener('mousedown', () => {
    isActive = true;
  });

  body.addEventListener('mouseup', () => {
    isActive = false;
  });

  body.addEventListener('mouseleave', () => {
    isActive = false;
  });

  const beforeAfterSlider = (x) => {
    let shift = Math.max(0, Math.min(x, slider.offsetWidth));
    before.style.width = `${shift}px`;
    change.style.left = `${shift}px`;
  };

  const pauseEvents = (e) => {
    e.stopPropagation();
  };

  body.addEventListener('mousemove', (e) => {
    if (!isActive) {
      return;
    }

    let x = e.pageX;
    x -= slider.getBoundingClientRect().left;
    beforeAfterSlider(x);
    pauseEvents(e);
  });

  change.addEventListener('touchstart', () => {
    isActive = true;
  });

  body.addEventListener('touchend', () => {
    isActive = false;
  });

  body.addEventListener('touchcancel', () => {
    isActive = false;
  });

  body.addEventListener('touchmove', (e) => {
    if (!isActive) {
      return;
    }

    let x;

    let i;
    for (i = 0; i < e.changedTouches.length; i++) {
      x = e.changedTouches[i].pageX;
    }

    x -= slider.getBoundingClientRect().left;

    beforeAfterSlider(x);
    pauseEvents(e);
  });
} catch(err)
{};
