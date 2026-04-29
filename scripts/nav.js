// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Set active nav link based on current page
(function() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/index.html';
  const currentPage = currentPath.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else if (currentPage === 'index.html' && (href === '/' || href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
