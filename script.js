const Menu = document.getElementById('menu');
const Navbar = document.getElementById('navbar-list');

Menu.addEventListener('click', () => {
  Navbar.classList.toggle('active');
});
