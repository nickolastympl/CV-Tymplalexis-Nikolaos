
const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');


const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;


function toggleTheme() {
 
    const currentTheme = themeStyle.getAttribute('href');
 
    const newTheme = currentTheme.includes('lightmode.css') ? 'darkmode.css' : 'lightmode.css';
   
    themeStyle.setAttribute('href', newTheme);
}


themeToggle.addEventListener('click', toggleTheme);


if (prefersDarkMode) {
    themeStyle.setAttribute('href', 'darkmode.css');
}
