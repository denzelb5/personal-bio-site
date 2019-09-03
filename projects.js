console.log('what am i doing?');

const projects = [{
  title: "Cool Project", 
  screenshot: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Cool Project", 
  screenshot: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: false,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Cool Project", 
  screenshot: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: false,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Cool Project", 
  screenshot: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Cool Project", 
  screenshot: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: false,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    title: "Cool Project", 
  screenshot: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG", 
  description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
  technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
  available: true,
  url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
  githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}]



const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const createProjectCards = (projectList) => {
    let domString = '';
    for (let i = 0; i < projectList.length; i++) {
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
        `
    }
    printToDom(domString, 'projectsPage')

}
createProjectCards(projects)



const availableProjects = (projectArr) => {
    
    const availableProject = [];
    for (let i = 0; i < projectArr.length; i++) {
        let project = projectArr[i];
        if (projects.available === true) {
            availableProject.push(project)
            
        }
        return availableProject
    }
    createProjectCards(availableProject)
}

availableProjects(projects)

/*const availableProjects = (projectArray) => {
    let project = projects.available;
    for (let i = 0; i < projectArray.length; i++) {
        if (project === true) {
            return project
        }
    }
}
 console.log(availableProjects(projects))
 */

const assignProjects = (event) => {
    const projectAvailability = event.target.id;
    const selectedProject = [];
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        if (projects.available === projectAvailability) {
            selectedProject.push(project)
        }
    }
    createProjectCards(availableProjects(availableProject));
}
document.getElementById('projectsPage').addEventListener('click', assignProjects)