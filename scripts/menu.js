const navigationMenu = document.getElementsByClassName('navigation-menu')[0];
const hamburgerIcon = document.getElementById('hamburger-menu-icon');
const navigationLinks = document.querySelectorAll('.navigation-menu__link a');

navigationLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu());
})
    
function toggleMenu() {
    navigationMenu.classList.toggle('navigation-menu--active');
}