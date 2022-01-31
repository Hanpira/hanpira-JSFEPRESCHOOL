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
const portfolioBtns = document.querySelector('.portfolio-btns');
const portfolioBtn = document.querySelector('.period-btn');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

const preloadImages = (el) => {
  for (let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/${el}/${i}.jpg`;
  }
};

seasons.forEach(preloadImages);

const changeImage = (event) => /* change images and season */
portfolioImages.forEach ((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index+1}.jpg`);

const changeActive = (event) => /* change button from active to inactive and vice versa */ {
  portfolioBtns.forEach((el) => el.classList.remove('active'));
  event.target.classList.add('active');
}

const portfolioBtnsClick = (event) => /*  */ {
  if (event.target.classList.contains('period-btn')) {
    changeImage(event);
    changeActive(event);
  };
}

portfolioBtns.addEventListener("click", portfolioBtnsClick);

