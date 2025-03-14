document.addEventListener("DOMContentLoaded", function () {
    console.log("Project Page Loaded!");
});
// Get the menu toggle button and the navbar
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Add a click event listener to the menu toggle
menuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');
});
