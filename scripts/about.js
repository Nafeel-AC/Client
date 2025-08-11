// About/Mission JS with Carousel functionality

function initAboutCarousel() {
  // More aggressive retry mechanism
  function initCarousel() {
    const track = document.querySelector('.about__carousel-track');
    const slides = document.querySelectorAll('.about__carousel-slide');
    const nextBtn = document.querySelector('.about__carousel-nav--next');
    const prevBtn = document.querySelector('.about__carousel-nav--prev');
    const dots = document.querySelectorAll('.about__carousel-dot');

    if (!track || !slides.length || !nextBtn || !prevBtn) {
      setTimeout(initCarousel, 200);
      return;
    }

    // Create circular effect by duplicating slides
    const originalSlides = Array.from(slides);
    const duplicatedSlides = originalSlides.map(slide => slide.cloneNode(true));
    // Add duplicated slides to the end
    duplicatedSlides.forEach(slide => {
      track.appendChild(slide);
    });
    // Update slides reference to include duplicates
    const allSlides = track.querySelectorAll('.about__carousel-slide');

    let index = 1; // Start at second slide to show circular effect on both sides
    let slidesPerView = getSlidesPerView();
    const totalSlides = originalSlides.length;
    const totalDots = Math.ceil(totalSlides / slidesPerView);
    let autoAdvanceTimer;

    // Responsive slides per view
    function getSlidesPerView() {
      const width = window.innerWidth;
      if (width < 768) return 1; // Mobile: show only 1 slide
      if (width < 1024) return 2;
      if (width < 1200) return 3;
      return 4;
    }

    // Function to update carousel position
    function updateCarousel() {
      slidesPerView = getSlidesPerView();
      const slideWidth = 100 / slidesPerView;
      const maxIndex = Math.max(0, totalSlides - slidesPerView);

      // Ensure index is within bounds
      if (index > maxIndex) index = 1; // Loop to start
      if (index < 1) index = maxIndex; // Loop to end

      const translateX = -(index * slideWidth);
      track.style.transform = `translateX(${translateX}%)`;

      // Update slide active states
      allSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i >= index && i < index + slidesPerView) {
          slide.classList.add('active');
        }
      });

      // Update dots (always based on original slides)
      dots.forEach(dot => dot.classList.remove('active'));
      let groupIndex = Math.floor((index - 1) / slidesPerView);
      if (groupIndex < 0) groupIndex = 0;
      if (groupIndex >= totalDots) groupIndex = totalDots - 1;
      if (dots[groupIndex]) {
        dots[groupIndex].classList.add('active');
      }
    }

    // Start auto-advance (disabled)
    function startAutoAdvance() {
      // Auto-advance disabled - carousel will only move on manual interaction
    }

    // Stop auto-advance
    function stopAutoAdvance() {
      if (autoAdvanceTimer) {
        clearInterval(autoAdvanceTimer);
        autoAdvanceTimer = null;
      }
    }

    // Next button click
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        index += slidesPerView;
        updateCarousel();
      });
    }

    // Previous button click
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        index -= slidesPerView;
        updateCarousel();
      });
    }

    // Dot navigation
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = (i * slidesPerView) + 1;
        updateCarousel();
      });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      slidesPerView = getSlidesPerView();
      updateCarousel();
    });

    // Initialize carousel
    updateCarousel();
  }

  // Start initialization
  initCarousel();
}

// Multiple initialization attempts
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAboutCarousel);
} else {
  initAboutCarousel();
}
// Also try after a delay for dynamic loading
setTimeout(initAboutCarousel, 500);
setTimeout(initAboutCarousel, 1000);
setTimeout(initAboutCarousel, 2000);
