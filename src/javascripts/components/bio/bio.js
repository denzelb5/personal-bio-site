import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './bio.scss';

console.error('bio page');

const createBio = () => {
  let bioString = '';
  bioString += `
  <div class="card mb-3 bio-card" style="max-width: 840px;">
  <div class="row no-gutters">
    <div class="bio col-md-4">
      <img src="https://media.licdn.com/dms/image/C4D03AQG1gAmC5Jneow/profile-displayphoto-shrink_200_200/0?e=1580947200&v=beta&t=F_c5vrPb_PTt5wnh7v93hFxzf84cdjfRfPA3DNddQ_E" class="card-img rounded-circle" alt="...">
      <h5 class="card-title">Denise Baker</h5>
      <h6 class="card-subtitle mb-2 text-muted">Violinist in Nashville Symphony</h6>
      <small class="text-muted">Member since 1996.</small>
      </div>
    <div class="col-md-8">
      <div class="card-body">
      <p class="card-text">
        As a professional violinist with a career spanning over 25 years, 
        I know what it’s like to have the passion to follow your dreams, 
        combined with the discipline to make that dream a reality.  
        A member of the Nashville Symphony, in my 24th season, 
        I have performed throughout the United States and Europe, 
        played in Carnegie Hall, and participated in over 14 Grammy 
        award winning recordings.  
      </p>
      <p>
      I am drawn to writing software for many of the same reasons 
      I am drawn to music. The creative process of bringing ideas to 
      life, the constant necessity to always keep learning, and the 
      puzzle aspect of trouble shooting and problem solving.   
      </p>
    
      </div>
    </div>
  </div>
</div>
    
    `;
  utilities.printToDom(bioString, 'bioPage');
};

const aboutMe = () => {
  const domString = `
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
        <p class="card-text"></p>`;
  utilities.printToDom(domString, 'about-me');
};

const displayVideos = () => {
  const domString = `
  <img src="https://www.nashvillesymphony.org/media/2461/750_1060-44square.jpg">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ryuIMpOdbpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/qBvrHxT94Mg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/0QST7zXJizc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
  utilities.printToDom(domString, 'video');
};


const showBio = () => {
  $('body').on('click', '#navToBio', aboutMe);
};

export default { createBio, showBio, displayVideos };
