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
