const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
