// const slider = document.querySelector('#slider');

// function setTheme(themeName) {
//   localStorage.setItem('theme', themeName);
//   document.documentElement.className = themeName;
// }

// // function to toggle between light and dark theme
// function toggleTheme() {
//   if (localStorage.getItem('theme') === 'theme-dark') {
//     setTheme('theme-light');
//   } else {
//     setTheme('theme-dark');
//   }
// }

// slider.addEventListener('click', toggleTheme);

// // Immediately invoked function to set the theme on initial load
// function checkTheme() {
//   if (localStorage.getItem('theme') === 'theme-dark') {
//     setTheme('theme-dark');
//     document.getElementById('slider').checked = false;
//   } else {
//     setTheme('theme-light');
//     document.getElementById('slider').checked = true;
//   }
// }

// ================================================================

const slider = document.querySelector('#slider');

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function changeTheme() {
  if (slider.checked) {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

slider.addEventListener('change', changeTheme);

function checkTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    slider.checked = false;
  } else {
    setTheme('theme-light');
    slider.checked = true;
  }
}

checkTheme();
