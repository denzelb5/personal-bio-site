import utilities from '../../helpers/utilities';


const createProjectCards = (projectList) => {
  let domString = '';
  for (let i = 0; i < projectList.length; i += 1) {
    const projects = projectList[i];
    domString += `
        <div id="projectsPage" class="projectCard">
            <h2 id="title">${projects.title}</h2>
            <img src='${projects.screenshot}' alt='Image of ${projects.title}'>
            <p>${projects.description}</p>
            <p>${projects.technologiesUsed}</p>
            <p>${projects.available}</p>
            <p>'${projects.url}'</p>
            <p>'${projects.githubUrl}'</p>
        </div>
        `;
  }
  utilities.printToDom(domString, 'projectsPage');
  utilities.printToDom('', 'bioPage');
  utilities.printToDom('', 'technologiesPage');
};


const assignProjects = (event) => {
  const projectAvailability = event.target.id;
  console.log(projectAvailability);
  const selectedProject = [];
  for (let i = 0; i < projects.length; i += 1) {
    const project = projects[i];
    if (project.available) {
      selectedProject.push(project);
    }
  }
  console.log(selectedProject);
  createProjectCards(selectedProject);
};
document.getElementById('navToProjects').addEventListener('click', assignProjects)