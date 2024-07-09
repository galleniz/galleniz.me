// get url params
const urlParams = new URLSearchParams(window.location.search);

const noAnim = urlParams.get('noAnim');
function isNoAnim() {
    return noAnim;
}
document.addEventListener("DOMContentLoaded", function() {
    //delete for all items the "animation" class
    const items = document.querySelectorAll("*")

    items.forEach(item => {
        if (!noAnim) return;
        [...item.classList].forEach(cl => {
            if (cl.includes("animation")) {
                item.classList.remove(cl);
                item.classList.add("f-"+cl)
            }
        });
    })

})
