import utilities from '../../helpers/utilities';
import techData from '../../helpers/data/techData';
import './technologies.scss';


const printTechnologies = () => {
  let domString = '';
  techData.getTechnologies()
    .then((technologies) => {
      technologies.forEach((tech) => {
        domString += `
        <div class="card-deck logo-card col-2"
          <div class="card-body logos">
            <img class="card-img logo-image" src="${tech.imageUrl}">
          </div>
        </div>
    `;
        utilities.printToDom(domString, 'technologiesPage');
      });
    })
    .catch((error) => console.error(error));
};

export default { printTechnologies };
