const projects =document.getElementsByTagName("main")[0].getElementsByTagName("section").portfolio.getElementsByTagName("ul")[0]
const logo = document.getElementsByTagName("header")[0].getElementsByTagName("img")[0]
console.log(projects)
for (let project of this.projects)
{
    let div = document.createElement("li")
    console.log(project)
    div.classList.add("img")
    div.innerHTML = `
        <img src="img/proj/${project.img}.png"> </img> <a href="${project.git}">${project.name}</a>
        <desc>- ${project.description}</desc>
    `
    console.log(div)
    projects.appendChild(div)
}

fetch(`https://api.github.com/users/MrNiz`)
  .then(response => response.json())
  .then(data => {
    const profilePicUrl = data.avatar_url;
    // no sabe programar golpeenlo
    logo.src = profilePicUrl;
    console.log(profilePicUrl);
  })
  .catch(error => console.error(error));