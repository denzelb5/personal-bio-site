import utilities from '../../helpers/utilities';
import techData from '../../helpers/data/techData';

const technologies = [{
  lang1: 'HTML',
  lang2: 'CSS',
},
{
  lang1: 'Javascript',
  lang2: 'Bootstrap 4',
},
{
  lang1: 'Webpack',
  lang2: 'Firebase',
}];


const technologiesCard = (tech) => {
  let domString = '';
    domString += `
      <div class="card-body">
        <img class="card-img" src="${tech.imageUrl}">
      </div>
    `;
  
  return domString;
};

const printTechnologies = () => {
  let domString = '';
  techData.getTechnologies()
  .then(technologies) => {
    domString += technologiesCard(technologies);
  }
  
};

// // Show an element
// // const hideContent = () => {
// // document.getElementById('technologiesPage').style.display = 'none';
// // };

// // // Hide an element
// // var hide = function (elem) {
// // elem.style.display = 'none';
// // };

// // const displayTech = () => {
// //   const techLink = document.getElementById('navToTechnologies');
// //   //  techLink.addEventListener('click', hideContent);
// //   // techLink.addEventListener('click', printTechnologies);
// // };

// export default { };
