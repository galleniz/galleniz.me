fetch('src/data/projects.json')
    .then(response => response.json())
    .then(projects => {
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
                <img src="${project.imgSrc}">
                <div id="front">
                        <h3>${project.title}</h3>
                        ${project.status.length > 0 ? `<p class="indev">${project.status}</p>` : "" }
                </div>
                <center><p class="tilin"><b>(${project.projectType})</b></p></center>
                <p>${project.description}</p>
                <button class="button" onclick="window.location.href='${project.githubLink}';">Ver en GitHub</button>
            `;
            projectsList.appendChild(projectItem);
        });
    })
    .catch(error => console.error('Error loading the projects:', error));
