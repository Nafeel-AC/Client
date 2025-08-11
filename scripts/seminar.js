function initSeminarSection() {
  console.log('initSeminarSection called');
  const seminarSection = document.querySelector('.seminar');
  
  if (!seminarSection) {
    console.log('Seminar section not found, retrying...');
    setTimeout(initSeminarSection, 100);
    return;
  }
  
  console.log('Seminar section found, initializing...');

  const cardsWrapper = seminarSection.querySelector('.seminar__cards-wrapper');
  const cards = seminarSection.querySelectorAll('.seminar__card');
  const prevBtn = seminarSection.querySelector('.seminar__nav-btn--prev');
  const nextBtn = seminarSection.querySelector('.seminar__nav-btn--next');
  const counter = seminarSection.querySelector('.seminar__carousel-counter');
  
  let currentIndex = 0;
  const totalCards = cards.length;
  const cardsPerSet = 4;
  const totalSets = Math.ceil(totalCards / cardsPerSet);

  // Check if we're on mobile
  function isMobile() {
    return window.innerWidth <= 900;
  }

  // Update counter display
  function updateCounter() {
    if (counter) {
      if (isMobile()) {
        counter.textContent = `${currentIndex + 1} / ${totalCards}`;
      } else {
        const setIndex = Math.floor(currentIndex / cardsPerSet);
        counter.textContent = `${setIndex + 1} / ${totalSets}`;
      }
    }
  }

  // Show specific card with smooth transition
  function showCard(index, direction = 'right') {
    if (index < 0 || index >= totalCards) return;
    currentIndex = index;
    if (isMobile()) {
      // In mobile, each card is 270px wide, so move by index * 270px
      const translateX = -(index * 270);
      cardsWrapper.style.transform = `translateX(${translateX}px)`;
      // Add animation class to current card
      cards.forEach((card, i) => {
        card.classList.remove('slide-in-left', 'slide-in-right');
        if (i === index) {
          card.classList.add(direction === 'left' ? 'slide-in-left' : 'slide-in-right');
        }
      });
    } else {
      // Desktop: show 4 cards at once, grouped by sets
      const setIndex = Math.floor(index / cardsPerSet);
      cardsWrapper.style.transform = `translateX(0%)`;
      // Show only the current set of 4 cards
      cards.forEach((card, i) => {
        const cardSetIndex = Math.floor(i / cardsPerSet);
        if (cardSetIndex === setIndex) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
    updateCounter();
    updateButtonStates();
    console.log(`Showing card ${index + 1} of ${totalCards}`);
  }

  // Update button states
  function updateButtonStates() {
    if (isMobile()) {
      if (prevBtn) {
        prevBtn.disabled = currentIndex === 0;
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
      }
      if (nextBtn) {
        nextBtn.disabled = currentIndex === totalCards - 1;
        nextBtn.style.opacity = currentIndex === totalCards - 1 ? '0.5' : '1';
      }
    } else {
      const setIndex = Math.floor(currentIndex / cardsPerSet);
      if (prevBtn) {
        prevBtn.disabled = setIndex === 0;
        prevBtn.style.opacity = setIndex === 0 ? '0.5' : '1';
      }
      if (nextBtn) {
        nextBtn.disabled = setIndex === totalSets - 1;
        nextBtn.style.opacity = setIndex === totalSets - 1 ? '0.5' : '1';
      }
    }
  }

  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (isMobile()) {
        if (currentIndex < totalCards - 1) {
          showCard(currentIndex + 1, 'right');
        }
      } else {
        // Desktop: move to next set of 4 cards
        const setIndex = Math.floor(currentIndex / cardsPerSet);
        if (setIndex < totalSets - 1) {
          showCard((setIndex + 1) * cardsPerSet, 'right');
        }
      }
    });
  }

  // Previous button click
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (isMobile()) {
        if (currentIndex > 0) {
          showCard(currentIndex - 1, 'left');
        }
      } else {
        // Desktop: move to previous set of 4 cards
        const setIndex = Math.floor(currentIndex / cardsPerSet);
        if (setIndex > 0) {
          showCard((setIndex - 1) * cardsPerSet, 'left');
        }
      }
    });
  }

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && currentIndex < totalCards - 1) {
        // Swipe left - next card
        showCard(currentIndex + 1, 'right');
      } else if (diff < 0 && currentIndex > 0) {
        // Swipe right - previous card
        showCard(currentIndex - 1, 'left');
      }
    }
  }

  // Add touch events for mobile
  if (cardsWrapper) {
    cardsWrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
    cardsWrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
  }

  // Card hover effects
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      if (!isMobile()) {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0px 5px 20px 0px rgba(32, 134, 180, 0.3)';
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      }
    });
    card.addEventListener('mouseleave', function() {
      if (!isMobile()) {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0px 0px 10px 0px rgba(32, 134, 180, 0.2)';
      }
    });
    // Card click functionality
    card.addEventListener('click', function() {
      console.log('Card clicked:', this.querySelector('.seminar__card-title')?.textContent);
      // Add your card click functionality here
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

  // Initialize view
  function initializeView() {
    showCard(0);
    // Reset any previous styles
    cards.forEach(card => {
      card.style.display = '';
      card.classList.remove('slide-in-left', 'slide-in-right');
    });
    // Set initial transform
    cardsWrapper.style.transform = 'translateX(0%)';
  }

  // Initialize
  initializeView();

  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Reset to first card when switching between mobile/desktop
      currentIndex = 0;
      initializeView();
    }, 250);
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
