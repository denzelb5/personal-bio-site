import utilities from '../../helpers/utilities';

const technologies = [{
  lang1: 'HTML',
  lang2: 'CSS',
},
{
  lang1: 'Javascript',
  lang2: 'Python',
},
{
  lang1: 'GIT',
  lang2: 'Github',
},
{
  lang1: 'Jupyter',
  lang2: 'Bootstrap 4',
}];


const createTechnologies = (techArr) => {
  let domString = '';
  for (let i = 0; i < techArr.length; i += 1) {
    const tech = techArr[i];
    domString += `
        <div class="fullPage" id="technologiesPage">
            <ul>
                <li>${tech.lang1}</li>
                <li>${tech.lang2}</li>
            </ul>
        </div>
       `;
  }
  utilities.printToDom(domString, 'technologiesPage');
  utilities.printToDom('', 'bioPage');
  utilities.printToDom('', 'projectsPage');
};

const printTechnologies = () => {
  createTechnologies(technologies);
};

// Show an element
// const hideContent = () => {
// document.getElementById('technologiesPage').style.display = 'none';
// };

// // Hide an element
// var hide = function (elem) {
// elem.style.display = 'none';
// };

// const displayTech = () => {
//   const techLink = document.getElementById('navToTechnologies');
//   //  techLink.addEventListener('click', hideContent);
//   // techLink.addEventListener('click', printTechnologies);
// };

export default { };
