
// get system color 
const systemColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
// get in local storage the theme
var theme = urlParams.get("theme")|| localStorage.getItem('theme') || systemColor;
console.log(theme)
let body = document.querySelector("body")

const root = body; // Accede al elemento <html>
console.log(root.getAttribute('data-theme'))
root.setAttribute('data-theme', theme); // Cambia al tema oscuro
console.log(root.getAttribute('data-theme'))

localStorage.setItem('theme', theme);
function invertTheme() {
    theme = theme === "dark" ? "light" : "dark";
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}