const ul = document.querySelector('footer #contact ul');
var ids = [];

fetch('src/data/footer.links.json')
    .then(response => response.json())
    .then(links => {
        links.forEach(link => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${link.href}" ><img id="${link.id}" src="${link.imgSrc}" class="hoverZoom"></a>`;
            ul.appendChild(li);
            ids.push(link.id);
        });
    })
    .catch(error => console.error('Error loading the links:', error));

const arrow = document.getElementById("arrow");
arrow.style.opacity = 0;

function clickContact() {
    console.log("When");
    // go to all down
    window.scrollTo(0, document.body.scrollHeight);
    arrow.style.opacity = 1;
    arrow.animate(
        [
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-10px)' },
            { transform: 'translateY(0px)' }
        ],
        {
            duration: 250,
            iterations: Infinity
        }
    );

    setTimeout(bump, 1000);
}

function bump() {
    for (let k of ids) {
        let element = document.getElementById(k);
        element.style.transform = "scale(1.5)";
        setTimeout(() => {
            element.style.transform = "";
        }, 2000);
    }

    setTimeout(() => {
        arrow.animate(
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            {
                duration: 500
            }
        );
        arrow.style.opacity = 0;
    }, 2000);
}
