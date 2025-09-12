// JavaScript for Silicon Design Project
const checkbox = document.getElementById('themeSwitch');

checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', checkbox.checked);
});