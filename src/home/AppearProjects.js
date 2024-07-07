const loading = document.getElementById('loading');
loading.classList.remove("animation-up")
var tries = 0;

function onPojectAppear(projects) {

    // get div with id loading
    // delete loading div
    const projectsList = document.querySelector('.project-list');
    projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.className = 'project';

        const formatMap = [
            { regex: /\[(.*?)\]\((.*?)\)/g, replacement: '<a href="$2">$1</a>' },
            { regex: /\*\*(.*?)\*\*/g, replacement: '<b>$1</b>' },
            { regex: /\*(.*?)\*/g, replacement: '<i>$1</i>' },
            { regex: /\`(.*?)\`/g, replacement: '<code>$1</code>' },
            { regex: /\~(.*?)\~/g, replacement: '<strike>$1</strike>' },
            { regex: /\_(.*?)\_/g, replacement: '<u>$1</u>' },
            { regex: /\^(.*?)\^/g, replacement: '<sup>$1</sup>' },
            { regex: /\,(.*?)\,/g, replacement: '<sub>$1</sub>' },
            { regex: /\#(.*?)/g, replacement: '<h1>$1</h1>' },
            { regex: /\#\#(.*?)/g, replacement: '<h2>$1</h2>' },
            { regex: /\#\#\#(.*?)/g, replacement: '<h3>$1</h3>' },
            // Add more formatting rules as needed
        ];

        formatMap.forEach(format => {
            project.description = project.description.replace(format.regex, format.replacement);
        });
        projectItem.innerHTML = `
            <div class="overflow">
             <img src="${project.imgSrc}">
             </div>
            <div id="front">
                    <h3>${project.title}</h3>
                    ${project.status.length > 0 ? `<p class="indev">${project.status}</p>` : "" }
            </div>
            <center><p class="tilin"><b>(${project.projectType})</b></p></center>
            <p>${project.description}</p>
        `;
        if (project.clickLink || project.githubLink){
            projectItem.onclick = () => {
                // redirect to the project page
                window.location.href =project.clickLink || project.githubLink;
            }
            if (project.clickLink) {
                // si no hay clickLink, no se muestra el botón, porque al clickear si o si va al git
                var button = document.createElement("button");
                button.className = "button";
                button.innerHTML = "Ver en GitHub";
                // cuando el mouse está arriba del botón, mostrar que redirige a otro
                button.title = "Revisar el código";
                // Ahora mostrar como el <a href></a>, el link
                button.href = project.githubLink;
                button.onclick = () => {
                    window.location.href = project.githubLink;
                }
                projectItem.appendChild(button);
            }
        } else {
            projectItem.style.cursor = "default";
            // <button class="button" onclick="window.location.href='${project.githubLink}';">Ver en GitHub</button>
        }
        
        // detect if is in pc
        if (window.innerWidth > 768)
        {
            projectItem.classList.add("allow-super-duper-effect");
        }
        projectsList.appendChild(projectItem);
        if (project == projects[projects.length - 1])
        {
            loading.classList.add("animation-down-end")
            loading.addEventListener('animationend', () => {
                loading.remove();
            });
        }
    });
}
function projects() {
    console.log("Trying to load projects, try number: ", tries + 1)
    fetch('src/data/projects.json')

    .then(response => response.json())
    .then(onPojectAppear)
    .catch(error => {
        tries ++;
        setTimeout(() => {
            if (tries < 2)
                {
                    projects();
                    return;
                }
            console.error('Error loading the projects:', error);
            const text = document.createElement('p');
            text.classList.add("error-text")
            text.innerHTML = '(Hubo un error cargando los proyectos)';
            loading.appendChild(text);

        }, 500)
       
    });

}
// when the document is ready
document.addEventListener('DOMContentLoaded', projects);