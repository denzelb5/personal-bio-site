// import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './bio.scss';

console.error('bio page');

const createBio = () => {
  let bioString = '';
  bioString += `
  <div class="card mb-3" style="max-width: 840px;">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="https://media.licdn.com/dms/image/C4D03AQG1gAmC5Jneow/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=F_c5vrPb_PTt5wnh7v93hFxzf84cdjfRfPA3DNddQ_E" class="card-img rounded-circle" alt="...">
      <h5 class="card-title">Denise Baker</h5>
      <h6 class="card-subtitle mb-2 text-muted">Violinist in Nashville Symphony</h6>
      </div>
    <div class="col-md-8">
      <div class="card-body">
        
    <p class="card-text">    
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
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    
    `;
  utilities.printToDom(bioString, 'bioPage');
  // utilities.printToDom('', 'projectsPage');
  // utilities.printToDom('', 'technologiesPage');
};

// const showBio = () => {
//   $('body').on('click', '#navToBio', createBio);
// };

export default { createBio };
