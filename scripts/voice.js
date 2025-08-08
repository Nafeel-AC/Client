document.addEventListener('DOMContentLoaded', function() {
  const voiceSection = document.querySelector('.voice');
  if (!voiceSection) return;

  // Navigation elements
  const prevBtn = voiceSection.querySelector('.voice__nav-btn--prev');
  const nextBtn = voiceSection.querySelector('.voice__nav-btn--next');
  const paginationDots = voiceSection.querySelectorAll('.voice__pagination-dot');
  
  // Testimonial content elements
  const testimonialImage = voiceSection.querySelector('.voice__image');
  const testimonialTitle = voiceSection.querySelector('.voice__testimonial-title');
  const testimonialName = voiceSection.querySelector('.voice__testimonial-name');
  const testimonialBody = voiceSection.querySelector('.voice__testimonial-body');

  // Sample testimonial data
  const testimonials = [
    {
      image: 'assets/business-people-using-tablet-pc.jpg',
      title: 'タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。タイトルが入ります。',
      name: '名前　太郎様',
      body: 'テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=464&h=320&fit=crop',
      title: '素晴らしいサービスでした。とても満足しています。',
      name: '名前　花子様',
      body: '利用させていただいて本当に良かったです。スタッフの方々も親切で、安心してサービスを受けることができました。また機会があれば利用したいと思います。'
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=464&h=320&fit=crop',
      title: '期待以上の結果を得ることができました。',
      name: '名前　次郎様',
      body: '最初は不安でしたが、実際に利用してみると期待以上の結果を得ることができました。プロフェッショナルな対応に感謝しています。'
    },
    {
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=464&h=320&fit=crop',
      title: '丁寧で親切なサービスに感動しました。',
      name: '名前　美咲様',
      body: '細かいところまで気を配ってくださり、本当に感動しました。おかげさまで目標を達成することができました。ありがとうございました。'
    },
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=464&h=320&fit=crop',
      title: '信頼できるパートナーとして選んで良かったです。',
      name: '名前　健一様',
      body: '長期的なサポートをしていただき、信頼できるパートナーとして選んで良かったと実感しています。今後もよろしくお願いします。'
    },
    {
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=464&h=320&fit=crop',
      title: '専門的な知識と経験に基づく提案が素晴らしかったです。',
      name: '名前　恵子様',
      body: '専門的な知識と豊富な経験に基づく提案は、私たちの課題を解決するのに非常に効果的でした。感謝の気持ちでいっぱいです。'
    },
    {
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=464&h=320&fit=crop',
      title: '迅速で的確な対応に感謝しています。',
      name: '名前　正男様',
      body: '緊急の対応が必要でしたが、迅速で的確な対応をしていただき、本当に助かりました。プロフェッショナルな仕事ぶりに感心しました。'
    },
    {
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=464&h=320&fit=crop',
      title: '長期的な関係を築くことができました。',
      name: '名前　由美様',
      body: '単発のサービスではなく、長期的な関係を築くことができました。継続的なサポートにより、着実に成果を上げることができています。'
    }
  ];

  let currentIndex = 0;
  const totalTestimonials = testimonials.length;

  // Update testimonial content
  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    
    // Fade out effect
    testimonialImage.style.opacity = '0';
    testimonialTitle.style.opacity = '0';
    testimonialName.style.opacity = '0';
    testimonialBody.style.opacity = '0';
    
    setTimeout(() => {
      testimonialImage.src = testimonial.image;
      testimonialTitle.textContent = testimonial.title;
      testimonialName.textContent = testimonial.name;
      testimonialBody.textContent = testimonial.body;
      
      // Fade in effect
      testimonialImage.style.opacity = '1';
      testimonialTitle.style.opacity = '1';
      testimonialName.style.opacity = '1';
      testimonialBody.style.opacity = '1';
    }, 300);
  }

  // Update pagination dots
  function updatePagination() {
    paginationDots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('voice__pagination-dot--active');
      } else {
        dot.classList.remove('voice__pagination-dot--active');
      }
    });
  }

  // Navigate to specific testimonial
  function goToTestimonial(index) {
    if (index < 0) {
      currentIndex = totalTestimonials - 1;
    } else if (index >= totalTestimonials) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    
    updateTestimonial(currentIndex);
    updatePagination();
  }

  // Event listeners for navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToTestimonial(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToTestimonial(currentIndex + 1);
    });
  }

  // Event listeners for pagination dots
  paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToTestimonial(index);
    });
  });

  // Add transition styles
  const style = document.createElement('style');
  style.textContent = `
    .voice__image,
    .voice__testimonial-title,
    .voice__testimonial-name,
    .voice__testimonial-body {
      transition: opacity 0.3s ease;
    }
  `;
  document.head.appendChild(style);

  // Initialize
  updatePagination();
});
