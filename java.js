function navigatePageById(id) {
  
  const element = document.getElementById(id);
  
  element.addEventListener('click', function() {
    
    if (id === 'blog') {
      window.location.href = 'blogpost.html';
    } else if (id === 'contact') {
      window.location.href = 'contact.html';
    } else if (id === 'home') {
      window.location.href = 'index.html';
    }
  });
}

navigatePageById('blog');
navigatePageById('contact');
navigatePageById('home');


const icon1 = document.getElementById('icon1');
const themeStyle = document.getElementById('theme-style');

if (localStorage.getItem('theme')) {
  themeStyle.setAttribute('href', localStorage.getItem('theme'));
}

icon1.addEventListener('click', () => {
  if (themeStyle.getAttribute('href') === 'styles.css') {
    themeStyle.setAttribute('href', 'darkmode.css');
    localStorage.setItem('theme', 'darkmode.css');
  } else {
    themeStyle.setAttribute('href', 'styles.css');
    localStorage.setItem('theme', 'styles.css');
  }
});

const icon2 = document.getElementById('icon2');

icon2.addEventListener('click', function() {
 
  const currentStylesheet = document.querySelector('link[rel="stylesheet"]');

  if (currentStylesheet.getAttribute('href') === 'styles.css') {
    
    currentStylesheet.setAttribute('href', 'textmode.css');
  } else {
    
    currentStylesheet.setAttribute('href', 'styles.css');
  }
});

const textOnlyBtn = document.getElementById('icon2');

let isTextOnlyMode = false;

textOnlyBtn.addEventListener('click', function() {
  const body = document.body;
  body.classList.toggle("text-only-mode");
});

const batteryOptimizedBtn = document.querySelector("#icon3");
const mainContent = document.querySelector("body");
const navbarIcons = document.querySelector(".navbar");

let isBatteryOptimizedMode = localStorage.getItem("isBatteryOptimizedMode") === "true";

if (isBatteryOptimizedMode) {
  switchToBatteryOptimizedMode();
}

function switchToBatteryOptimizedMode() {
  mainContent.style.filter = "brightness(0.8)";
  mainContent.style.color = "rgba(255, 255, 255, 0.8)";

  mainContent.style.backgroundColor = "rgba(0, 0, 0, 0.85)";

  navbarIcons.style.backgroundColor = "rgba(0, 0, 0, 0.85)";

  localStorage.setItem("isBatteryOptimizedMode", "true");

  isBatteryOptimizedMode = true;
}

function switchToNormalMode() {

  mainContent.style.filter = "";
  mainContent.style.color = "";
  mainContent.style.backgroundColor = "";
  navbarIcons.style.backgroundColor = "";

  localStorage.setItem("isBatteryOptimizedMode", "false");
  isBatteryOptimizedMode = false;
}

function handleBatteryChange() {
  navigator.getBattery().then(battery => {
    if (battery.level < 0.1) {
      switchToBatteryOptimizedMode();
    } else {
      switchToNormalMode();
    }
  });
}

batteryOptimizedBtn.addEventListener("click", () => {
  
  if (isBatteryOptimizedMode) {
    switchToNormalMode();
  } else {
    switchToBatteryOptimizedMode();
  }
});

navigator.getBattery().then(battery => {
  battery.addEventListener("levelchange", handleBatteryChange);
});