function initVoiceSection() {
  const voiceSection = document.querySelector('.voice');
  if (!voiceSection) {
    setTimeout(initVoiceSection, 100);
    return;
  }

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
      image: 'assets/asian-businessman-phone.jpg',
      title: 'リファラルリクルーティングで最高の仲間を見つけることができました',
      name: '田中　太郎様',
      body: '採用に悩んでいた時に、リファラルリクルーティングという手法に出会いました。従来の採用方法とは全く違い、社員の紹介を通じて本当に優秀な人材と出会うことができました。特に、社内の雰囲気や仕事の内容をよく理解した上で紹介してくれるので、ミスマッチが少なく、すぐに戦力として活躍してくれています。'
    },
    {
      image: 'assets/close-up-two-business-woman-looking-with-paper-document-together-while-walking-office-business-people-concept.jpg',
      title: '素晴らしいサービスでした。とても満足しています。',
      name: '佐藤　花子様',
      body: '利用させていただいて本当に良かったです。スタッフの方々も親切で、安心してサービスを受けることができました。また機会があれば利用したいと思います。'
    },
    {
      image: 'assets/voice__testimonial-image.png',
      title: '期待以上の結果を得ることができました。',
      name: '山田　次郎様',
      body: '最初は不安でしたが、実際に利用してみると期待以上の結果を得ることができました。プロフェッショナルな対応に感謝しています。'
    },
    {
      image: 'assets/voice__testimonial-image.png',
      title: '丁寧で親切なサービスに感動しました。',
      name: '鈴木　美咲様',
      body: '細かいところまで気を配ってくださり、本当に感動しました。おかげさまで目標を達成することができました。ありがとうございました。'
    },
    {
      image: 'assets/business-meeting-1.jpg',
      title: '信頼できるパートナーとして選んで良かったです。',
      name: '高橋　健一様',
      body: '長期的なサポートをしていただき、信頼できるパートナーとして選んで良かったと実感しています。今後もよろしくお願いします。'
    },
    {
      image: 'assets/business-team-2.jpg',
      title: '専門的な知識と経験に基づく提案が素晴らしかったです。',
      name: '渡辺　恵子様',
      body: '専門的な知識と豊富な経験に基づく提案は、私たちの課題を解決するのに非常に効果的でした。感謝の気持ちでいっぱいです。'
    },
    {
      image: 'assets/business-presentation-3.jpg',
      title: '迅速で的確な対応に感謝しています。',
      name: '中村　正男様',
      body: '緊急の対応が必要でしたが、迅速で的確な対応をしていただき、本当に助かりました。プロフェッショナルな仕事ぶりに感心しました。'
    },
    {
      image: 'assets/business-handshake-4.jpg',
      title: '長期的な関係を築くことができました。',
      name: '小林　由美様',
      body: '単発のサービスではなく、長期的な関係を築くことができました。継続的なサポートにより、着実に成果を上げることができています。'
    }
  ];

  let currentIndex = 0;
  const totalTestimonials = testimonials.length;

  // Update testimonial content
  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    console.log('Updating testimonial to index:', index, testimonial.name);
    
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
    console.log('Updating pagination, current index:', currentIndex);
    paginationDots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('voice__pagination-dot--active');
        console.log('Dot', index, 'is now active (black)');
      } else {
        dot.classList.remove('voice__pagination-dot--active');
        console.log('Dot', index, 'is now inactive (grey)');
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
}

// Multiple initialization attempts
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVoiceSection);
} else {
  initVoiceSection();
}

// Also try after a delay for dynamic loading
setTimeout(initVoiceSection, 500);
setTimeout(initVoiceSection, 1000);
setTimeout(initVoiceSection, 2000);
