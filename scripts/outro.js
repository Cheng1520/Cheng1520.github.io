// Outro overlay logic
(function() {
  const outro = document.getElementById('outro-overlay');
  if (!outro) return;
  const starfield = outro.querySelector('.outro-starfield');

  // Generate stars
  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    star.className = 'outro-star';
    star.style.cssText = `
      left:${Math.random()*100}%; top:${Math.random()*100}%;
      width:${Math.random()*3+1}px; height:${Math.random()*3+1}px;
      animation-delay:${Math.random()*3}s;
    `;
    starfield.appendChild(star);
  }

  // Click to close
  outro.addEventListener('click', () => {
    outro.classList.remove('show');
  });

  // Scroll to bottom trigger
  let shown = false;
  window.addEventListener('scroll', () => {
    if (shown) return;
    const scrollBottom = window.innerHeight + window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    if (scrollBottom >= docHeight - 80) {
      shown = true;
      outro.classList.add('show');
    }
  });
})();
