function initSeminarSection() {
  console.log('initSeminarSection called');
  const seminarSection = document.querySelector('.seminar');
  
  if (!seminarSection) {
    console.log('Seminar section not found, retrying...');
    setTimeout(initSeminarSection, 100);
    return;
  }
  
  console.log('Seminar section found, initializing...');

  const cardSets = seminarSection.querySelectorAll('.seminar__cards');
  const prevBtn = seminarSection.querySelector('.seminar__nav-btn--prev');
  const nextBtn = seminarSection.querySelector('.seminar__nav-btn--next');
  const counter = seminarSection.querySelector('.seminar__carousel-counter');
  
  let currentSetIndex = 0;
  const totalSets = cardSets.length;
  
  // Check if we're on mobile
  function isMobile() {
    return window.innerWidth <= 900;
  }
  
  // Show specific card set
  function showCardSet(index) {
    cardSets.forEach((set, i) => {
      if (i === index) {
        set.style.display = 'flex';
      } else {
        set.style.display = 'none';
      }
    });
    
    // Update counter
    if (counter) {
      counter.textContent = `${index + 1} / ${totalSets}`;
    }
    
    console.log(`Showing card set ${index + 1} of ${totalSets}`);
  }
  
  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSetIndex < totalSets - 1) {
        currentSetIndex++;
      } else {
        currentSetIndex = 0;
      }
      showCardSet(currentSetIndex);
    });
  }
  
  // Previous button click
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentSetIndex > 0) {
        currentSetIndex--;
      } else {
        currentSetIndex = totalSets - 1;
      }
      showCardSet(currentSetIndex);
    });
  }
  
  // Card hover effects for all cards in all sets
  cardSets.forEach(set => {
    const cards = set.querySelectorAll('.seminar__card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0px 5px 20px 0px rgba(32, 134, 180, 0.3)';
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0px 0px 10px 0px rgba(32, 134, 180, 0.2)';
      });
      
      // Card click functionality
      card.addEventListener('click', function() {
        console.log('Card clicked:', this.querySelector('.seminar__card-title')?.textContent);
        // Add your card click functionality here
      });
    });
  });
  
  // CTA button functionality
  const ctaBtn = seminarSection.querySelector('.seminar__cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function() {
      console.log('CTA button clicked');
      // Add your CTA button functionality here
    });
  }
  
  // Initialize - show first card set
  showCardSet(currentSetIndex);
  
  // Handle window resize
  window.addEventListener('resize', () => {
    // Re-initialize on resize to handle mobile/desktop transitions
    showCardSet(currentSetIndex);
  });
  
  console.log('Seminar section initialized successfully');
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
