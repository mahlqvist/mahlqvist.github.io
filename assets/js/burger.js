/* Variables */
const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-link');

/* Functions */
mobileNav = () => {
    burger.classList.toggle('active');
    navbar.classList.toggle('active');
}

checkInnerWidth = () => {
    if (window.innerWidth > 680 && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        burger.classList.remove('active');   
    }
}

/* Even Listeners */
burger.addEventListener('click', mobileNav);

navLinks.forEach(el => el.addEventListener('click', () => {
    navbar.classList.remove('active');
    burger.classList.remove('active');
}));

window.addEventListener('resize', checkInnerWidth);