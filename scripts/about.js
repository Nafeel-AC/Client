// About/Mission JS with Carousel functionality

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.about__carousel-track');
  const slides = document.querySelectorAll('.about__carousel-slide');
  const nextBtn = document.querySelector('.about__carousel-nav--next');
  const prevBtn = document.querySelector('.about__carousel-nav--prev');
  const dots = document.querySelectorAll('.about__carousel-dot');
  
  let index = 0;
  const slidesPerView = 4; // Show 4 slides at once
  const totalSlides = slides.length;

  // Function to update carousel position
  function updateCarousel() {
    const slideWidth = 100 / slidesPerView;
    const translateX = -(index * slideWidth);
    track.style.transform = `translateX(${translateX}%)`;
    
    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    const activeDotIndex = Math.floor(index / slidesPerView);
    if (dots[activeDotIndex]) {
      dots[activeDotIndex].classList.add('active');
    }
  }

  // Next button click
  nextBtn.addEventListener('click', () => {
    if (index < totalSlides - slidesPerView) {
      index += slidesPerView;
    } else {
      index = 0; // Loop back to start
    }
    updateCarousel();
  });

  // Previous button click
  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index -= slidesPerView;
    } else {
      index = totalSlides - slidesPerView; // Loop to end
    }
    updateCarousel();
  });

  // Dot navigation
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i * slidesPerView;
      updateCarousel();
    });
  });

  // Auto-advance carousel every 5 seconds
  setInterval(() => {
    if (index < totalSlides - slidesPerView) {
      index += slidesPerView;
    } else {
      index = 0;
    }
    updateCarousel();
  }, 5000);

  // Initialize carousel
  updateCarousel();
});
