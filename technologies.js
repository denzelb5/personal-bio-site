const technologies = [{
    lang1: 'HTML',
    lang2: 'CSS'
},
{
    lang1: 'Javascript', 
    lang2: 'Python'
},
{ 
    
    lang1: 'GIT', 
    lang2: 'Github'
},
{
    
    lang1: 'Jupyter', 
    lang2: 'Bootstrap 4' 
    
}];


const createTechnologies = (techArr) => {
    let domString = '';
    for (let i = 0; i < techArr.length; i++) {
        const tech = techArr[i];
        domString += `
        <div class="fullPage" id="technologiesPage">
            
            <ul>
                
                <li>${tech.lang1}</li>
                <li>${tech.lang2}</li>
            </ul>
        </div>
       `
    }
    printToDom(domString, 'technologiesPage')
    printToDom('', 'bioPage')
    printToDom('', 'projectsPage')
}  

const printTechnologies = (event) => {
    createTechnologies(technologies)
}

// Show an element
// const hideContent = () => {
// 	document.getElementById('technologiesPage').style.display = 'none';
// };

// // Hide an element
// var hide = function (elem) {
// 	elem.style.display = 'none';
// };

const techLink = document.getElementById("navToTechnologies");
//techLink.addEventListener('click', hideContent);
techLink.addEventListener("click", printTechnologies);

    
  