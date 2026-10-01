// Mentett téma betöltése
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Nézet váltása és mentése
function toggleMode() {
  document.body.classList.toggle('dark-mode');

  const isDarkMode = document.body.classList.contains('dark-mode');

  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}
