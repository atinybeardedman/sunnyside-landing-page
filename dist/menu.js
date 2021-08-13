const menu = document.querySelector('#menuButton');
menu.addEventListener('click', () => {
    const innerNav = document.querySelector('.navigation__inner');
    console.log(innerNav);
    innerNav.classList.toggle('mobile-show');
})