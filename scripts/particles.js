// Particle background system
const canvas = document.getElementById('particles');
if (!canvas) throw new Error('Canvas #particles not found');
const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

class Particle {
  constructor() { this.reset(); this.y = Math.random() * canvas.height; }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = -10;
    this.size = Math.random() * 2 + 0.5;
    this.speed = Math.random() * 0.5 + 0.15;
    this.opacity = Math.random() * 0.6 + 0.2;
    this.hue = Math.random() < 0.33 ? 340 : Math.random() < 0.5 ? 280 : 190;
  }
  update() { this.y += this.speed; if (this.y > canvas.height + 10) this.reset(); }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < 80; i++) particles.push(new Particle());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(255,107,157,${0.06 * (1 - dist / 100)})`;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();
