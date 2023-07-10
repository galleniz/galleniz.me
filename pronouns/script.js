var darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

const body = document.querySelector("body");
function toggleTheme() {
  darkMode = !darkMode;
  update();
}

update();
var curMode = "m";

function update() {
  if (curMode !== (darkMode ? "a" : "b")) { 
    body.classList.remove("dark-mode", "white-mode");
    body.classList.add(darkMode ? "dark-mode" : "white-mode");
    for (let d of document.getElementsByTagName("*")) {
      if (!d.classList.contains("ignore")){
      d.classList.remove("dark-mode", "white-mode");
      d.classList.add(darkMode ? "dark-mode" : "white-mode");
    }
    }
    curMode = darkMode ? "a" : "b";
  }
  setTimeout(update, 0.1);
}
