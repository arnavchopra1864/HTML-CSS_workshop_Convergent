document.addEventListener('DOMContentLoaded', (event) => {
  const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
  const body = document.body;

  function switchTheme(e) {
      if (e.target.checked) {
          body.classList.add('dark-mode');
          localStorage.setItem('dark-mode', 'true');
      } else {
          body.classList.remove('dark-mode');
          localStorage.setItem('dark-mode', 'false');
      }    
  }

  toggleSwitch.addEventListener('change', switchTheme);

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('dark-mode');
  if (savedTheme === 'true') {
      body.classList.add('dark-mode');
      toggleSwitch.checked = true;
  }
});