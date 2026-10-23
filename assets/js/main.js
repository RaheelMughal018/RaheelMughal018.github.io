document.getElementById('year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const navLinks = [...document.querySelectorAll('.nav a')];
const sections = [...document.querySelectorAll('main section')];
function highlightNav() {
  const atBottom = innerHeight + scrollY >= document.body.scrollHeight - 2;
  const current = atBottom
    ? sections[sections.length - 1]
    : sections.filter((s) => s.getBoundingClientRect().top <= innerHeight * 0.4).pop() ?? sections[0];
  navLinks.forEach((a) => a.classList.toggle('active', a.hash === `#${current.id}`));
}
addEventListener('scroll', highlightNav, { passive: true });
highlightNav();
