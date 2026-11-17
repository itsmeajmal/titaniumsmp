const copyButton = document.getElementById('copy-ip');
const ip = document.getElementById('server-ip').textContent.trim();
const toast = document.getElementById('toast');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(ip);
    toast.textContent = 'Server address copied!';
  } catch {
    toast.textContent = 'Copy unavailable — select the address and copy it.';
  }
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
});
document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav-links');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
