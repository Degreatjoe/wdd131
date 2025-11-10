const menuOn = document.querySelector('#toggle-menu-on');
const menuOff = document.querySelector('#toggle-menu-off');
const nav = document.querySelector('nav');
const toggles = document.querySelectorAll('.toggle-menu'); // Both buttons

// the menu toggleing functionality
toggles.forEach(toggle => {
  toggle.addEventListener('click', function() {
    if (this.id === 'toggle-menu-on') {
      // Open menu
      nav.style.display = 'flex';
      menuOff.style.display = 'block';
    } else if (this.id === 'toggle-menu-off') {
      // Close menu
      nav.style.display = 'none';
      menuOff.style.display = 'none';
      menuOn.style.display = 'block';
    }
  });
});
