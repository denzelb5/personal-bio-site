// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';
import './projects.scss';


const createProjectCards = (project) => {
  const domString = `
    <div class="card project-card col-2">
      
      <img src="${project.screenshot}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${project.name}</h5>
        <p>${project.description}</p>
        <p id="techUsed" class="card-subtitle mb-2 text-muted">${project.technologiesUsed}</p>
        <a href="${project.siteUrl}" class="card-link">View Project</a>
      </div>
    </div>`;
  return domString;
};


const printProjects = () => {
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += createProjectCards(project);
      });
      utilities.printToDom(domString, 'projectContainer');
    })
    .catch((error) => console.error(error));
};

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
