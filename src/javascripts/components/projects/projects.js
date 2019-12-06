// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';


const createProjectCards = (project) => {
  const domString = `
    <div class="card col-3">
      <h5 class="card-title">${project.name}</h5>
      <p>${project.description}</p>
      <img src="${project.screenshot}" class="card-img-top" alt="...">
      <div class="card-body">
        
        <h6 class="card-subtitle mb-2 text-muted">${project.type}</h6>
        
      
        <p class="card-text">${project.technologiesUsed}</p>
      
        <a href="${project.siteUrl}" class="card-link">View Project</a>
      </div>
    </div>`;
  return domString;
};


const printProjects = () => {
  // const projectId = event.target.id;
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      console.error('projects', projects);
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
