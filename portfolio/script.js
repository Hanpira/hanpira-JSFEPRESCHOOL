(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .nav-list').toggleClass('active');
    });
});


/* Check tomorrow 
or 
const burger = document.querySelector('.header-burger');

function toggleMenu() {
  burger.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);
*/