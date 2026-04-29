// Floating text effect — keywords drift across the background
(function() {
  const layer = document.getElementById('floating-text-layer');
  if (!layer) return;

  const keywords = [
    '貂蝉', '王者荣耀', '新建二中', '程心悦', '387.5', '逆袭',
    '南昌', '高一', '峡谷', '国服', '加油', '可爱', '新建',
    '南昌大学', 'Diaochan', 'Honor of Kings', '江西', '花季',
    '阳光', '青春', '努力', '冲鸭', 'Xinyue', '初二',
  ];

  const active = new Set();
  const MAX = 12;

  function createFloat() {
    if (active.size >= MAX) return;
    const el = document.createElement('span');
    el.className = 'float-text';
    el.textContent = keywords[Math.floor(Math.random() * keywords.length)];
    const size = 14 + Math.random() * 28;
    const x = Math.random() * 100;
    const y = 60 + Math.random() * 40;
    const duration = 15 + Math.random() * 25;
    const opacity = 0.06 + Math.random() * 0.10;
    const delay = Math.random() * 5;

    el.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      font-size: ${size}px;
      opacity: 0;
      animation: floatDrift ${duration}s linear forwards;
      animation-delay: ${delay}s;
    `;

    layer.appendChild(el);
    active.add(el);

    el.addEventListener('animationend', () => {
      el.remove();
      active.delete(el);
    });
  }

  // Spawn floating text periodically
  createFloat();
  setInterval(createFloat, 2500 + Math.random() * 3000);
  // Spawn a few initially
  for (let i = 0; i < 3; i++) setTimeout(createFloat, i * 800);
})();
