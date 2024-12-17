// JavaScript to toggle the mobile menu
const menuBtn = document.getElementById('menu-btn');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('#nav-list a');

// Toggle the menu when the hamburger button is clicked
menuBtn.addEventListener('click', () => {
  // Toggle the 'show' class to display or hide the navigation links
  navList.classList.toggle('show');
});

// Close the menu when any navigation link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the 'show' class to hide the menu when a link is clicked
    navList.classList.remove('show');
  });
});
