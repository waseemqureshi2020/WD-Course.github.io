/* eslint-disable space-before-function-paren */
/* eslint-disable brace-style */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */
const menu = document.getElementById('menu-list');
const hamburger = document.getElementById('hamburger');
const link1 = document.getElementById('home');
const link2 = document.getElementById('about');
const link3 = document.getElementById('program');
const link4 = document.getElementById('join');
const link5 = document.getElementById('sponsor');
const link6 = document.getElementById('enroll');

let show = false;

if (window.innerWidth < 768) {
  const toggleMenu = () => {
    show = !show;
    if (show === true) {
      menu.style.transform = 'translateY(0%)';
      hamburger.className = 'fa-solid fa-xmark';
    }   else {
      menu.style.transform = 'translateY(-100%)';
      hamburger.className = 'fa-solid fa-bars';
    }
  };

  hamburger.addEventListener('click', toggleMenu);
}

function resetMenu () {
  if (window.innerWidth > 768) {
    menu.style.transform = 'none';
    hamburger.style.display = 'block';
  }
  else if
  (window.innerWidth < 768) {
    menu.style.transform = 'translateY(-100%)';
  }
}
window.addEventListener('resize', resetMenu);