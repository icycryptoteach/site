let menu_btn = document.querySelector('.menu_btn');
let navbar = document.querySelector('.navbar');
let close_icon = document.querySelector('.bx-menu');
let body = document.querySelector('body');
let nav_item = document.querySelectorAll('.nav_item');

menu_btn.onclick = () => {
    navbar.classList.toggle('open');
    close_icon.classList.toggle('bx-x');
    body.classList.toggle('hidden_scroll');
};

nav_item.forEach((e) => {
    e.onclick = () => {
        navbar.classList.remove('open');
        navbar.classList.toggle('close');
        close_icon.classList.remove('bx-x');
        body.classList.remove('hidden_scroll');
    };
});

