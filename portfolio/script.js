let state = { lang: "en", theme: "dark" }; /* Autochoise: you can switch to russian lang or choose light theme*/

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");

const toggleMenu = () => {
  hamburger.classList.toggle("open");
  navList.classList.toggle("open");
};

const closeMenu = () => {
  hamburger.classList.remove("open");
  navList.classList.remove("open");
};

hamburger.addEventListener("click", toggleMenu);

navLinks.forEach((el) => el.addEventListener("click", closeMenu));

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
  portfolioBtns.forEach((el) => el.classList.remove('active'));
  event.target.classList.add('active');
}

portfolioBtns.addEventListener("click", portfolioBtnsClick);

/* Buttons*/

const animateButton = (e) => {
  e.preventDefault;
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(() => {
    e.target.classList.remove("animate");
  }, 700);
};

const diagButtons = document.querySelectorAll(".btn-diagonal");

diagButtons.forEach((el) =>
  el.addEventListener("click", animateButton, false)
);

/* Internationalization */

import i18Obj from "./translate.js";

const switchLng = document.querySelector(".lng");
const switchLngBtns = document.querySelectorAll(".lng-btn");

const onLngBtnClick = (event) => {
  if (event.target.classList.contains("lng-btn")) {
    state.lang = event.target.dataset.lng;
    updateClasses();
  }
};

const updateClasses = () => {
  changeClassLngActive();
  getTranslate(state.lang);
};

const changeClassLngActive = () => {
  switchLngBtns.forEach((el) => el.classList.remove("lng-active"));
  const activeBtn = document.querySelector(`[data-lng=${state.lang}]`);
  activeBtn.classList.add("lng-active");
};

const getTranslate = (currentLanguage) => {
  const dataElements = document.querySelectorAll("[data-i18]");

  dataElements.forEach((el) => {
    if (el.placeholder) {
      el.placeholder = i18Obj[currentLanguage][el.dataset.i18];
      el.textContent = "";
    } else {
      el.textContent = i18Obj[currentLanguage][el.dataset.i18];
    }
  });
};

switchLng.addEventListener("click", onLngBtnClick);

