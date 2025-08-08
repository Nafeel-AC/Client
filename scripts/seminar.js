document.addEventListener('DOMContentLoaded', function() {
  const seminarSection = document.querySelector('.seminar');
  
  if (!seminarSection) return;

  const cards = seminarSection.querySelectorAll('.seminar__card');
  
  // Card hover effects
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0px 5px 20px 0px rgba(32, 134, 180, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0px 0px 10px 0px rgba(32, 134, 180, 0.2)';
    });
    
    // Card click functionality
    card.addEventListener('click', function() {
      // Add your card click functionality here
      console.log('Seminar card clicked');
    });
  });
  
  // CTA button functionality
  const ctaBtn = seminarSection.querySelector('.seminar__cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
      // Add your CTA button functionality here
      console.log('View more seminars clicked');
    });
  }
});
