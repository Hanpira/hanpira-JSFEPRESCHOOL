const burger = document.querySelector('.header-burger');
const burgerLine = document.querySelectorAll('.burger-line');
const nav = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item');
const shadow = document.querySelector('.shadow');


(function () {
	burger.addEventListener('click', (() => {
		nav.classList.toggle('nav-list-active');
		burgerLine.forEach((line) => { line.classList.toggle('burger-line-active') });
		shadow.classList.toggle('shadow-active');
	}));
}());


(function () {
	navItem.forEach((li) => {
		li.addEventListener('click', (() => {
			nav.classList.toggle('nav-list-active')
			burgerLine.forEach((line) => { line.classList.toggle('burger-line') });
			shadow.classList.toggle('shadow-active');
		}));
	});
}());