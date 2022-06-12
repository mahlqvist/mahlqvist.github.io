const displayMsg = document.querySelector('.hero-text');
const phrases = ['A Brief History ', 'of Computing. ']
const typeSpeed = 250;
const delSpeed = 100;
let isDel = false;
let charIndex = 0;
let i = 0;

typewriter = () => {
    displayMsg.innerHTML = phrases[i].substring(0, charIndex) + "<span>&#65512;</span>";

    if (!isDel && charIndex++ <= phrases[i].length) {
        setTimeout(typewriter, typeSpeed);
    }
    if (isDel && charIndex-- <= phrases[i].length) {
        setTimeout(typewriter, delSpeed);
    }
    if (charIndex == phrases[i].length) {
        isDel = true;
    }
    if (charIndex == 0) {
        i++;
        isDel = false;
        if (i == phrases.length) {
            i = 0;
        }
    }
}

window.addEventListener('load', typewriter);