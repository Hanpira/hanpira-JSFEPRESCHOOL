let firstVisit = { lang: 'en', theme: 'dark' }; /* Autochoise: you can switch to russian lang or choose light theme*/

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

const toggleMenu = () => {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
};

const closeMenu = () => {
  hamburger.classList.remove('open');
  navList.classList.remove('open');
};

hamburger.addEventListener('click', toggleMenu);

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

// Portfolio section - changing season button 
const portfolioBtn = document.querySelectorAll('.period-btn');
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

const preloadImages = (el) => {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${el}/${i}.jpg`;
  }
};

seasons.forEach(preloadImages);

const portfolioBtnsClick = (event) => {
  if (event.target.classList.contains('period-btn')) {
    changeImage(event);
    changeActive(event);
  };
}

const changeImage = (event) => /* change images and season */
portfolioImages.forEach ((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index+1}.jpg`);

const changeActive = (event) => /* change button from active to inactive and vice versa */ {
  portfolioBtn.forEach((el) => el.classList.remove('active'));
  event.target.classList.add('active');
}

portfolioBtns.addEventListener('click', portfolioBtnsClick);

/* Buttons*/

const animateButton = (e) => {
  e.preventDefault;
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(() => {
    e.target.classList.remove('animate');
  }, 700);
};

const diagButtons = document.querySelectorAll('.btn-diagonal');

diagButtons.forEach((el) =>
  el.addEventListener('click', animateButton, false)
);

/* Internationalization */

import i18Obj from './translate.js';

const switchLng = document.querySelector('.lng');
const switchLngBtns = document.querySelectorAll('.lng-btn');

const lngBtnClick = (event) => {
  if (event.target.classList.contains('lng-btn')) {
    firstVisit.lang = event.target.dataset.lng;
    translateClasses();
  }
};

const translateClasses = () => {
  changeClassLngActive();
  getTranslate(firstVisit.lang);
};

const changeClassLngActive = () => {
  switchLngBtns.forEach((el) => el.classList.remove('lng-active'));
  const activeBtn = document.querySelector(`[data-lng=${firstVisit.lang}]`);
  activeBtn.classList.add('lng-active');
};

const getTranslate = (currentLanguage) => {
  const dataElements = document.querySelectorAll('[data-i18]');

  dataElements.forEach((el) => {
    if (el.placeholder) {
      el.placeholder = i18Obj[currentLanguage][el.dataset.i18];
      el.textContent = '';
    } else {
      el.textContent = i18Obj[currentLanguage][el.dataset.i18];
    }
  });
};

switchLng.addEventListener('click', lngBtnClick);


/* Switching themes */

const themeBtn = document.querySelector('.theme-btn');
const sectionTitle = document.querySelectorAll('.section-title');
const text = document.querySelectorAll('.text-el');
const openSidebar = document.querySelectorAll('.sidebar');

const ThemeBtnClick = () => {
  firstVisit.theme = firstVisit.theme === 'light' ? 'dark' : 'light';
  switchTheme();
};

const switchTheme = () => {
  if (
    firstVisit.theme === 'light' &&
    !themeBtn.classList.contains('light-theme-btn')
  ) {
    themeBtn.classList.add('light-theme-btn');
    text.forEach((el) => el.classList.add('light-theme'));
    openSidebar.forEach((el) => el.classList.add('light-theme-sidebar'));
  } else if (
    firstVisit.theme === 'dark' &&
    themeBtn.classList.contains('light-theme-btn')
  ) {
    themeBtn.classList.remove('light-theme-btn');
    text.forEach((el) => el.classList.remove('light-theme'));
    openSidebar.forEach((el) => el.classList.remove('light-theme-sidebar'));
  }
};

themeBtn.addEventListener('click', ThemeBtnClick);

/* Local storage*/

function setLocalStorage() {
  localStorage.setItem('firstVisit', firstVisit);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('firstVisit')) {
    firstVisit = localStorage.getItem('firstVisit');
    translateClasses();
    switchTheme();
  }
}
window.addEventListener('load', getLocalStorage)
