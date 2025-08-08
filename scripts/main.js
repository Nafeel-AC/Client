const sections = [
  'header', 'mv', 'about', 'concept', 'concept-highlight', 'seminar', 'voice', 'notice', 'contact', 'footer'
];
sections.forEach(section => {
  fetch(`components/${section}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(section).innerHTML = html;
      if (section !== 'header') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `styles/${section}.css`;
        document.head.appendChild(link);
      }
    });
});
// Load section JS if needed
sections.forEach(section => {
  const scriptPath = `scripts/${section}.js`;
  fetch(scriptPath).then(res => {
    if (res.ok) {
      const script = document.createElement('script');
      script.src = scriptPath;
      document.body.appendChild(script);
    }
  });
});

// Mobile menu toggle - inline for immediate loading
function initMobileMenu() {
  const toggle = document.querySelector('.header__menu-toggle');
  const nav = document.getElementById('headerNav');
  const closeBtn = document.querySelector('.header__nav-close');
  
  console.log('Looking for mobile menu elements...');
  console.log('Toggle found:', !!toggle);
  console.log('Nav found:', !!nav);
  console.log('Close button found:', !!closeBtn);
  
  if (!toggle || !nav) {
    console.log('Mobile menu elements not found, retrying...');
    return false;
  }

  console.log('Mobile menu elements found, setting up event listeners...');

  function setExpanded(expanded) {
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    nav.classList.toggle('is-open', expanded);
    document.body.style.overflow = expanded ? 'hidden' : '';
    console.log('Menu state changed to:', expanded ? 'OPEN' : 'CLOSED');
  }

  // Remove any existing listeners first
  toggle.removeEventListener('click', toggle.clickHandler);
  
  // Add hamburger click handler
  toggle.clickHandler = function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('Hamburger clicked!');
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!isOpen);
  };
  
  toggle.addEventListener('click', toggle.clickHandler);

  // Add close button handler
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Close button clicked!');
      setExpanded(false);
    });
  }

  // Close on navigation link click
  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.classList.contains('header__nav-link')) {
      console.log('Navigation link clicked, closing menu');
      setExpanded(false);
    }
  });

  // Close on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      console.log('ESC pressed, closing menu');
      setExpanded(false);
    }
  });
  
  console.log('Mobile menu initialized successfully!');
  return true;
}

// Try multiple times to initialize
let retryCount = 0;
function tryInit() {
  retryCount++;
  console.log(`Attempting to initialize mobile menu (attempt ${retryCount})...`);
  
  if (initMobileMenu()) {
    console.log('Mobile menu initialization successful!');
    return;
  }
  
  if (retryCount < 10) {
    setTimeout(tryInit, 500);
  } else {
    console.log('Failed to initialize mobile menu after 10 attempts');
  }
}

// Start initialization attempts
document.addEventListener('DOMContentLoaded', tryInit);
setTimeout(tryInit, 100);
