// Notice JS (placeholder for future interactivity)

function initPageTopButton() {
  // Wait for notice section to be loaded
  const checkForButton = () => {
    const noticeSection = document.querySelector('.notice');
    const pageTopBtn = document.querySelector('.notice__page-top');
    
    if (pageTopBtn && !pageTopBtn.hasAttribute('data-initialized')) {
      // Mark as initialized to prevent duplicate listeners
      pageTopBtn.setAttribute('data-initialized', 'true');
      
      pageTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('PAGE TOP button clicked'); // Debug log
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
      
      console.log('PAGE TOP button initialized'); // Debug log
    } else if (!pageTopBtn) {
      // Try again after a short delay if button not found
      setTimeout(checkForButton, 100);
    }
  };
  
  checkForButton();
}

document.addEventListener('DOMContentLoaded', function() {
  initPageTopButton();
  
  const noticeSection = document.querySelector('.notice');
  if (!noticeSection) {
    // If notice section not found, try again after delay
    setTimeout(() => {
      initPageTopButton();
    }, 500);
    return;
  }

  // News items
  const newsItems = noticeSection.querySelectorAll('.notice__news-item');

  // News item click handlers
  newsItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      // Add click animation
      item.style.transform = 'scale(0.98)';
      setTimeout(() => {
        item.style.transform = 'scale(1)';
      }, 150);

      // Handle news item click (you can add navigation logic here)

      
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
