document.addEventListener("DOMContentLoaded", function () {
    console.log("Project Page Loaded!");
});

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');


menuToggle.addEventListener('click', () => {
   
    navbar.classList.toggle('active');
});
