// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';
import './projects.scss';


const createProjectCards = (project) => {
  const domString = `
  
    <div class="card text-center border-dark project-card col-2">
    <h5 class="card-header border-danger project-header">${project.name}</h5>
      <div class="card-body">
        <img src="${project.screenshot}" class="project-image card-img-top" alt="...">
      </div>
      <div>
        <a href="${project.siteUrl}" id="view-project" class="btn btn-sm btn-danger project-link">Firebase</a>
        <a href="${project.githubUrl}" id="view-github" class="btn btn-sm btn-primary project-link">Github</a>
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

export default { printProjects };
