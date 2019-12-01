import utilities from '../../helpers/utilities';

console.log('bio page');

const createBio = () => {
  let bioString = '';
  bioString += `
    <p>
    <li>Professional Violinist for the last 25 years</li>
    <li>Member of Nashville Symphony for 23 years, permanent 4th chair</li>
    <li>Winner of 14 Grammy Awards as member of Nashville Symphony</li>
    <li>Recordings with professional artists including Garth Brooks, Matchbox 20, Taylor Swift</li>
    <li>Music video with Tim McGraw</li>
    <li>Movie soundtrack for Bridget Jones Diary</li>
    <li>4 Xmas tours with Amy Grant</li>
    <li>Extensive performances throughout Europe</li>
    <li>Performances at Carnegie Hall</li>
    <li>Solo Concerto performances with the Nashville Philharmonic, Nashville Concerto Orchestra, Western
        Piedmont Symphony
    </li>
    <li>Solo performances include Bachinalia Festival, Merkin Hall in NYC, Blair School of Music, Renaissance
        Center
    </li>
    <li>Adjunct Professor of Violin at Blair School of Music for 14 years.
    
    </p>   
    `;
  utilities.printToDom(bioString, 'bioPage');
  utilities.printToDom('', 'projectsPage');
  utilities.printToDom('', 'technologiesPage');
};

document.getElementById('navToBio').addEventListener('click', createBio);