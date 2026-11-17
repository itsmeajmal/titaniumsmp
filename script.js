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

// TitaniumSMP Feedback System
const feedbackForm = document.getElementById('feedback-form');

if (feedbackForm) {
  feedbackForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const status = document.getElementById('feedback-status');
    const submitButton = feedbackForm.querySelector('button[type="submit"]');

    const username = document.getElementById('feedback-username').value.trim();
    const rating = document.getElementById('feedback-rating').value;
    const message = document.getElementById('feedback-message').value.trim();

    submitButton.disabled = true;
    status.textContent = 'Sending feedback...';

    try {
      const response = await fetch(
        'https://titaniumsmp.muhammedajmal4009.workers.dev',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, rating, message })
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send feedback');
      }

      status.textContent = '✅ Feedback sent successfully!';
      feedbackForm.reset();

    } catch (error) {
      status.textContent = '❌ Could not send feedback. Please try again.';
      console.error(error);

    } finally {
      submitButton.disabled = false;
    }
  });
}
