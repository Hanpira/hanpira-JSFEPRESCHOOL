const burger = document.querySelector('.header-burger');
const burgerLine = document.querySelectorAll('.line')
const menu = document.querySelector('.nav');
const item = document.querySelectorAll('.nav-item');
const shadow = document.querySelector('.shadow');


(function () {
	burger.addEventListener('click', (() => {
		menu.classList.toggle('nav-active')
		burgerLine.forEach((line) => { line.classList.toggle('.line-active') })
		shadow.classList.toggle('shadow-active')
	}));
}());


(function () {
	item.forEach((li) => {
		li.addEventListener('click', (() => {
			menu.classList.toggle('nav-active')
			burgerLine.forEach((line) => { line.classList.toggle('.line-active') })
			shadow.classList.toggle('shadow-active')
		}))
	})
}());