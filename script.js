document.addEventListener('DOMContentLoaded', (event) => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('dark-mode');
  if (savedTheme === 'true') {
      body.classList.add('dark-mode');
  }
});