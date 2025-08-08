function initSeminarSection() {
  const seminarSection = document.querySelector('.seminar');
  
  if (!seminarSection) {
    setTimeout(initSeminarSection, 100);
    return;
  }

  const cards = seminarSection.querySelectorAll('.seminar__card');
  const prevBtn = seminarSection.querySelector('.seminar__nav-btn--prev');
  const nextBtn = seminarSection.querySelector('.seminar__nav-btn--next');
  const counter = seminarSection.querySelector('.seminar__carousel-counter');
  const cardsContainer = seminarSection.querySelector('.seminar__cards');
  
  let currentIndex = 0;
  const totalCards = cards.length;
  
  // Check if we're on mobile
  function isMobile() {
    return window.innerWidth <= 900;
  }
  
  // Update carousel position
  function updateCarousel() {
    if (isMobile()) {
      const cardWidth = 100;
      const translateX = -(currentIndex * cardWidth);
      cardsContainer.style.transform = `translateX(${translateX}%)`;
    } else {
      // Reset transform on desktop
      cardsContainer.style.transform = 'translateX(0)';
    }
    
    // Update counter
    if (counter) {
      counter.textContent = `${currentIndex + 1} / ${totalCards}`;
    }
  }
  
  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalCards - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });
  }
  
  // Previous button click
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalCards - 1;
      }
      updateCarousel();
    });
  }
  
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
    });
  });
  
  // CTA button functionality
  const ctaBtn = seminarSection.querySelector('.seminar__cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
      // Add your CTA button functionality here
    });
  }
  
  // Initialize carousel
  updateCarousel();
  
  // Handle window resize
  window.addEventListener('resize', updateCarousel);
}

// Multiple initialization attempts
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSeminarSection);
} else {
  initSeminarSection();
}

// Also try after a delay for dynamic loading
setTimeout(initSeminarSection, 500);
setTimeout(initSeminarSection, 1000);
setTimeout(initSeminarSection, 2000);
