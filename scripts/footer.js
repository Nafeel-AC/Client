// Footer JS

document.addEventListener('DOMContentLoaded', function() {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  // Get all footer links
  const footerLinks = footer.querySelectorAll('.footer__link');
  
  // Handle footer link clicks
  footerLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const linkText = this.textContent.trim();
      
      // Handle different link types
      switch(linkText) {
        case 'TOP':
          // Scroll to top of page
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          break;
        case '事例紹介':
          // Navigate to case studies section
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'サービス紹介':
          // Navigate to services section
          const conceptSection = document.getElementById('concept');
          if (conceptSection) {
            conceptSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'セミナー':
          // Navigate to seminar section
          const seminarSection = document.getElementById('seminar');
          if (seminarSection) {
            seminarSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case '会社概要':
          // Navigate to company info section (could be contact or about)
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        default:
          // For any other links, you can add custom navigation logic
          console.log(`Navigating to: ${linkText}`);
          break;
      }
    });
  });

  // Handle privacy policy link
  const privacyLink = footer.querySelector('.footer__privacy');
  if (privacyLink) {
    privacyLink.addEventListener('click', function(e) {
      e.preventDefault();
      // Add privacy policy navigation logic here
      console.log('Privacy Policy clicked');
      // Example: window.location.href = '/privacy-policy';
    });
  }

  // Add hover effects for better UX
  const allFooterLinks = footer.querySelectorAll('a');
  allFooterLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-1px)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Add transition styles
  const style = document.createElement('style');
  style.textContent = `
    .footer__link,
    .footer__privacy {
      transition: opacity 0.3s ease, transform 0.2s ease;
    }
  `;
  document.head.appendChild(style);
});
