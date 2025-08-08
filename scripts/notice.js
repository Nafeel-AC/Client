// Notice JS (placeholder for future interactivity)

document.addEventListener('DOMContentLoaded', function() {
  const noticeSection = document.querySelector('.notice');
  if (!noticeSection) return;

  // Page top button
  const pageTopBtn = noticeSection.querySelector('.notice__page-top');
  
  // News items
  const newsItems = noticeSection.querySelectorAll('.notice__news-item');

  // Page top functionality
  if (pageTopBtn) {
    pageTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // News item click handlers
  newsItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      // Add click animation
      item.style.transform = 'scale(0.98)';
      setTimeout(() => {
        item.style.transform = 'scale(1)';
      }, 150);

      // Handle news item click (you can add navigation logic here)
      console.log(`News item ${index + 1} clicked`);
      
      // Example: Navigate to news detail page
      // window.location.href = `/news/${index + 1}`;
    });
  });

  // Add hover effects for news items
  newsItems.forEach(item => {
    const arrow = item.querySelector('.notice__news-arrow');
    
    item.addEventListener('mouseenter', function() {
      if (arrow) {
        arrow.style.transform = 'translateX(4px)';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      if (arrow) {
        arrow.style.transform = 'translateX(0)';
      }
    });
  });

  // Add transition styles
  const style = document.createElement('style');
  style.textContent = `
    .notice__news-item {
      transition: transform 0.15s ease, opacity 0.3s ease;
    }
    
    .notice__news-arrow {
      transition: transform 0.3s ease;
    }
    
    .notice__page-top {
      transition: background-color 0.3s ease, transform 0.3s ease;
    }
    
    .notice__page-top:hover {
      transform: translateY(-2px);
    }
  `;
  document.head.appendChild(style);
});
