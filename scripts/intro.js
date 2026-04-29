// Intro overlay logic
(function() {
  const overlay = document.getElementById('intro-overlay');
  if (!overlay) return;
  const starfield = overlay.querySelector('.intro-starfield');

  // Generate stars
  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.className = 'intro-star';
    star.style.cssText = `
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      width:${Math.random()*3+1}px; height:${Math.random()*3+1}px;
      animation-delay:${Math.random()*3}s;
    `;
    starfield.appendChild(star);
  }

  const heroPhoto = document.querySelector('.hero-photo');
  const closeIntro = () => {
    overlay.classList.add('hidden');
    setTimeout(() => {
      if (heroPhoto) heroPhoto.classList.add('spin-in');
    }, 300);
    setTimeout(() => overlay.remove(), 800);
  };
  overlay.addEventListener('click', closeIntro);
  setTimeout(closeIntro, 5000);
})();
