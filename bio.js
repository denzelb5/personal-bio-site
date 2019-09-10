console.log('bio page');

const createBio = () => {
    let bioString = '';
    bioString += `
    <p>bio info here. blah blah blah blah blah blah blah blah blah blah blah  
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>   
    `
    printToDom(bioString, 'bioPage')
    printToDom('', 'projectsPage')
    printToDom('', 'technologiesPage')
}

document.getElementById('navToBio').addEventListener('click', createBio);