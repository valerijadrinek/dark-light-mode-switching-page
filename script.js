
const toggleSwitch = document.getElementById('switcher');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const h1Title = document.getElementById('h1-title');
const lastH2 = document.getElementById('last-h2');
const modifiedColor1 = document.getElementById('changing-color1');
const modifiedColor2 = document.getElementById('changing-color2');
const modifiedColor3 = document.getElementById('changing-color3');
const dark_theme = 'dark';
const light_theme = 'light';

// styling h2 in image container
function stylingImageh2() {
   modifiedColor1.style.color = 'var(--primary-color-variant)';
   modifiedColor2.style.color = 'var(--primary-color-variant)';
   modifiedColor3.style.color = 'var(--primary-color-variant)';
}

//styling last h2
function staylingH2() {
   lastH2.style.width = '50%';
   lastH2.style.backgroundColor = 'var(--on-background-alt)';
   lastH2.style.textAlign = 'center';
   lastH2.style.borderRadius = '1rem';
}

// Image switcher
function switchImage(color) {
   image1.src = `./assets/img/undraw_proud_coder_${color}.svg`;
   image2.src = `./assets/img/undraw_feeling_proud_${color}.svg`;
   image3.src = `./assets/img/undraw_conceptual_idea_${color}.svg`;
}

//Function that switches light or dark mode
function toggleLightOrDarkMode(dark_theme) {
   nav.style.backgroundColor = dark_theme ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 80%)' ;
   toggleIcon.children[0].textContent = dark_theme ?  'Dark Mode' : 'Light Mode' ;
   dark_theme ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') ;
   dark_theme ? switchImage('dark') : switchImage('light') ;
   stylingImageh2();
   staylingH2();
   h1Title.style.color = 'var(--primary-color)';
} 



// Switch theme dYnamically
function switchTheme(event) {
 let switchChecked = event.target.checked;

 if (switchChecked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleLightOrDarkMode(true);
 } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleLightOrDarkMode(false);
 }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check localStorage for Theme Mode
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
   
   document.documentElement.setAttribute('data-theme', currentTheme);
   if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      toggleLightOrDarkMode(true);
   } else {
      toggleSwitch.checked = false;
      toggleLightOrDarkMode(false);
   }
}