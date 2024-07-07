const baseSpeed = isNoAnim() ? 0.25 : 1;
const header = document.getElementById('header');
const nizText = document.getElementById("h1_h");
nizText.onclick = () => {
    var body = document.querySelector("body");
    body.style.transition ="all 0.5s";
    invertTheme();
}
const flags = document.getElementById("flags");
const bg = document.getElementById("bg_p");
const navToggler = document.getElementById("nav-toggle");
const lis = [document.getElementById("contact"), document.getElementById("projects"), document.getElementById("aboutme")];
const nav = document.getElementById("nav-weas");
let clicked = false;
let width = window.innerWidth;

function updateFix() {
    navToggler.style.display = "block";
    header.style.height = clicked ? "125px" : "100px";
    for (let li of lis) {
        li.style.marginTop = clicked ? "25px" : "0";
        li.style.marginLeft = clicked ? "-25px" : "0";
        li.style.display = clicked ? "block" : "none";
    }
}

function checkSizedLis() {
    updateFix();

    if (width < 375 || width > 550) {
        navToggler.style.display = "none";
        header.style.height = "100px";
        nav.style.margin = "0 10px";
        for (let li of lis) {
            if (width < 375)
                break;
            li.style.marginTop = "0";
            li.style.display ="block";
            li.style.marginLeft = "0";
        }

    } else {
        navToggler.style.display = "block";
        for (let li of lis) {
            li.style.marginTop = "0";
            li.style.marginLeft = "0";
        }
    }
}

navToggler.onclick = () => {
    clicked = !clicked;
    updateFix();
};

checkSizedLis();
window.addEventListener("DOMContentLoaded", checkSizedLis);

window.addEventListener("resize", function () {
    width = window.innerWidth;
    checkSizedLis();
});
