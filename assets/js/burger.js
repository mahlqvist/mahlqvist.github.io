const navbar = document.querySelector('.navbar');
const burger = document.querySelector('.burger');

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

burger.addEventListener('click', mobileNav);

window.addEventListener('resize', checkInnerWidth);