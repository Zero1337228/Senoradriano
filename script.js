// const { loadEnvFile } = require("process");
// const { format } = require("url");

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.querySelector('.nav-menu');

    burgerMenu.addEventListener('click', () => {
        // console.log('click')
        navMenu.classList.toggle('active');
    })})
