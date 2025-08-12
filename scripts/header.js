// Header JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.header__menu-toggle');
  const body = document.body;
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      console.log('Hamburger menu clicked');
      
      // Toggle menu-open class on body
      body.classList.toggle('menu-open');
      
      // Add animation to hamburger lines
      const lines = this.querySelectorAll('.header__menu-toggle-line');
      lines.forEach((line, index) => {
        if (body.classList.contains('menu-open')) {
          // Transform to X when menu is open
          if (index === 0) {
            line.style.transform = 'rotate(45deg) translate(5px, 5px)';
          } else if (index === 1) {
            line.style.opacity = '0';
          } else if (index === 2) {
            line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
          }
        } else {
          // Reset to hamburger when menu is closed
          line.style.transform = 'none';
          line.style.opacity = '1';
        }
      });
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.header__menu-toggle') && body.classList.contains('menu-open')) {
      body.classList.remove('menu-open');
      
      // Reset hamburger lines
      const lines = document.querySelectorAll('.header__menu-toggle-line');
      lines.forEach(line => {
        line.style.transform = 'none';
        line.style.opacity = '1';
      });
    }
  });
});
