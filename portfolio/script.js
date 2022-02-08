let start = { lang: 'en', theme: 'dark'}; /* Autochoice: you can switch to russian lang or choose light theme*/

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
    start.lang = event.target.dataset.lng;
    translateClasses();
  }
};

const translateClasses = () => {
  changeLngActive();
  getTranslate(start.lang);
};

const changeLngActive = () => {
  switchLngBtns.forEach((el) => el.classList.remove('lng-active'));
  const activeBtn = document.querySelector(`[data-lng=${start.lang}]`);
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
const text = document.querySelectorAll('.text-el');
const openSidebar = document.querySelectorAll('.sidebar');

const ThemeBtnClick = () => {
  start.theme = start.theme == 'light' ? 'dark' : 'light';
  switchTheme();
};

const switchTheme = () => {
  if (
    start.theme === 'light' &&
    !themeBtn.classList.contains('light-theme-btn')
  ) {
    themeBtn.classList.add('light-theme-btn');
    text.forEach((el) => el.classList.add('light-theme'));
    openSidebar.forEach((el) => el.classList.add('light-theme-sidebar'));
  } else if (
    start.theme === 'dark' &&
    themeBtn.classList.contains('light-theme-btn')
  ) {
    themeBtn.classList.remove('light-theme-btn');
    text.forEach((el) => el.classList.remove('light-theme'));
    openSidebar.forEach((el) => el.classList.remove('light-theme-sidebar'));
  }
};

themeBtn.addEventListener('click', ThemeBtnClick);

/* Local storage*/

function getLocalStorage() {
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    switchTheme(theme);
  }
  if(localStorage.getItem('lang')){
    const lang = localStorage.getItem('lang');
    translateClasses(lang);
  }
}

window.addEventListener('load', getLocalStorage);

function setLocalStorage() {
  localStorage.setItem('theme', theme);
  localStorage.setItem('lang', lang);
}

window.addEventListener('beforeunload', setLocalStorage);


//Video settings

const video = document.querySelector('.video-item');
const playBtn = document.querySelector('.controls-play');
const stopBtn = document.querySelector('.controls-stop');
const playBtnImg = document.querySelector('.play-btn');
const progress = document.querySelector('.progress');
const time = document.querySelector('.controls-time');
const mainBtn = document.querySelector('.video-btn');
const volumeBtn = document.querySelectorAll('.volume-btn');

//play video

function videoStatus() {
    if (video.paused) {
        video.play();
        playBtnImg.classList.toggle('paused');
        mainBtn.classList.toggle('paused');
    } else {
        video.pause()
        playBtnImg.classList.toggle('paused');
        mainBtn.classList.toggle('paused');
    }
}

playBtn.addEventListener('click', videoStatus);
video.addEventListener('click', videoStatus);
mainBtn.addEventListener('click', videoStatus);

// stop video

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

stopBtn.addEventListener('click', stopVideo);

// Timer

function videoTime () {
    progress.value = (video.currentTime / video.duration)*100;

    //time
    let min = Math.floor(video.currentTime / 60);
    if (min < 10) {
        min = '0' + String(min);
    }
    let sec = Math.floor(video.currentTime % 60);
    if (sec < 10) {
        sec = '0' + String(sec);
    }
    time.innerHTML = `${min}:${sec}`;
}

video.addEventListener('timeupdate', videoTime);

// progress video
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
})

// Volume settings

function setVolume() {
  volumeBtn.classList.toggle('mute');
  if (volumeBtn.classList.contains('mute')) {
    video.volume = '0';
  } else {
    video.volume = volume.value;
  }
}

volumeBtn.addEventListener('click', setVolume);

function changeVolume () {
  video.volume = volume.value;
  const volumeFirst = (volume.value / 1) * 100;
  if (volume.value == 0) {
    volumeBtn.classList.add('mute');
  } else {
    volumeBtn.classList.remove('mute');
  }
}
volume.addEventListener('change', changeVolume);