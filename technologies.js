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
    lang1: 'Jupyter Notebooks', 
    lang2: 'Bootstrap 4', 
    
}];


const printTechnologies = (techArr) => {
    let domString = '';
    for (let i = 0; i < techArr.length; i++) {
        const tech = techArr[i];
        domString += `
        <div class="card" id="techPage">
            <ul>
                
                <li>${tech.lang1}</li>
                <li>${tech.lang2}</li>
            </ul>
        </div>
       `
    }
    printToDom(domString, 'technologiesPage')
}  
    

printTechnologies(technologies)

