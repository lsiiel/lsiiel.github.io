document.addEventListener('DOMContentLoaded', () => {

    let hamb = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item');

    function hambTap() {
        hamb.addEventListener('click', (event) => {
            hamb.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    }

    function menuTap() {
        menuItem.forEach(item => {
            item.addEventListener('click', (event) => {
                hamb.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            });
        });
    }

    hambTap();
    menuTap();
});