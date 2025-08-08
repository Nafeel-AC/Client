// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.header__menu-toggle');
  const nav = document.getElementById('headerNav');
  if (!toggle || !nav) return;

  function setExpanded(expanded) {
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    nav.classList.toggle('is-open', expanded);
    document.body.style.overflow = expanded ? 'hidden' : '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!isOpen);
  });

  // Close on link click
  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a, button');
    if (link) setExpanded(false);
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setExpanded(false);
  });
});
