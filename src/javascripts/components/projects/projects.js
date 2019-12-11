// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';
import './projects.scss';


const createProjectCards = (project) => {
  const domString = `
  
    <div class="card border-dark project-card col-2">
    <h5 class="card-header border-danger project-header">${project.name}</h5>
      
      <div class="card-body">
      <img src="${project.screenshot}" class="project-image card-img-top" alt="...">
        
        
      </div>
    </div>
    `;
  return domString;
};


const printProjects = () => {
  let domString = '<h1 id="project-title" class="text-center">Recent Projects</h1>';
  domString += '<div class="d-flex flex-wrap">';
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += createProjectCards(project);
      });
      domString += '</div>';
      utilities.printToDom(domString, 'projectContainer');
    })
    .catch((error) => console.error(error));
};
// <p id="techUsed" class="card-subtitle mb-2 text-muted">${project.technologiesUsed}</p>
// <a href="${project.siteUrl}" class="card-link">View Project</a>

// document.getElementById('navToProjects').addEventListener('click', assignProjects);

// const showProjects = () => {
//   $('body').on('click', '#navToProjects', printProjects);
//   $('#projectsPage').show();
// };

// for (let i = 0; i < projectList.length; i += 1) {
//   const projects = projectList[i];
//   domString += `
//       <div id="projectsPage" class="projectCard">
//           <h2 id="title">${projects.title}</h2>
//           <img src='${projects.screenshot}' alt='Image of ${projects.title}'>
//           <p>${projects.description}</p>
//           <p>${projects.technologiesUsed}</p>
//           <p>${projects.available}</p>
//           <p>'${projects.url}'</p>
//           <p>'${projects.githubUrl}'</p>
//       </div>
//       `;
// }

export default { printProjects };
