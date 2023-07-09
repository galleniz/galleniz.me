const projects = document.querySelector("main section#portfolio ul");
const logo = document.querySelector("header img.funkin_papu_imagen_principal");
const body = document.querySelector("body");

body.classList.add("dark-mode");
var darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

themeButton.addEventListener('click', toggleTheme);

function toggleTheme() {
  darkMode = !darkMode;
  update();
}

update();
var curMode = "m";

function update() {
  if (curMode !== (darkMode ? "a" : "b")) {
    themeText.src = `img/when-${!darkMode}.png`;
    themeIcon.src = darkMode ? 'img/light-theme.png' : 'img/dark-theme.png';
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
for (let project of (this.projects)) {
  let div = document.createElement("li");
  div.classList.add("img");
  div.innerHTML = `
    <b style="background-color: ${project.color};">
      <img src="img/proj/${project.img}.png">
      <a href="${project.git}">${project.name}</a>
      <desc class="ignore">- ${project.description}</desc>
      <p></p>
      <descl class="ignore">${project.largeDesc}</descl>
      <center style="background-color: ${project.color};">
        <p></p>
        ${project.refImg ? `<img class="refimg" src="${project.allowSs ? 'img/ss/' + project.refImg +'.png' : project.refImg }">` : ""}
        <p></p>
        ${project.miniScript ? project.miniScript : ""}
      </center>
    </b>
  `;
  projects.appendChild(div);
}

document.querySelector("header h2").innerHTML = splashDescription[Math.floor(Math.random() * splashDescription.length)];

var oldSrc = "";
var clicked = false;
var clicks = [0, 0];
logo.onclick = () => {
  console.log({ currentDay: new Date().getUTCDay(), clicks, clicked });
  for (let i = 0; i < clicks.length; i++) {
    clicks[i] += 1;
  }
  if (clicked === true) return console.log("Is already clicked!!!");

  if (clicks[1] >= new Date().getUTCDay()) {
    clicked = true;
    logo.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SDLG_logo.svg/1200px-SDLG_logo.svg.png";
    setTimeout(() => {
      logo.src = oldSrc;
      clicked = false;
      clicks[1] = 0;
    }, 2500);
    return;
  }

  if (clicks[0] >= 5) {
    clicked = true;
    logo.src = "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif";
    setTimeout(() => {
      logo.src = oldSrc;
      clicked = false;
      clicks[0] = 0;
    }, 2500);
  }
};

fetch(`https://api.github.com/users/MrNiz`)
  .then(response => response.json())
  .then(data => {
    const profilePicUrl = data.avatar_url;
    logo.src = profilePicUrl;
    oldSrc = profilePicUrl;
  })
  .catch(error => console.error(error));
