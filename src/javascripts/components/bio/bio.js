import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './bio.scss';
import pic from './Denise-with-Michael.jpg';

const createBio = () => {
  let bioString = '';
  bioString += `
  <div class="card mb-3 bio-card" style="max-width: 800px;">
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
      I have had an exciting journey through the world of music.  
      A member of the Nashville Symphony, in my 24th season, 
      I have performed throughout the United States and Europe, 
      played in Carnegie Hall, and participated in over 14 Grammy 
      award winning recordings. After years of playing 5 to 7 hours per day, 
      the job has taken its toll on my shoulder. I've decided that a 
      career shift is necessary. All my research points toward software 
      development, as many of the skills overlap with my background in music, 
      such as creativity, problem-solving, teamwork, and clear communication. 
      In a symphony orchestra we work together in real time to create our product.
      Preparation and cooperation are key to making the music happen as an 80-120 
      piece group, while individually still instilling your own creativity 
      within that framework.  Both music and software development emphasize 
      a continuous learning for improvement and delivering a quality end result. I
      am looking forward to this new adventure!
  
      </p>
      <a id="navToBio" class="link" href="#video">More About Me</a>
      </div>
      
    </div>
  </div>
</div>
    `;
  bioString += '<img id="nso-pic" src="https://www.nashvillesymphony.org/media/2461/750_1060-44square.jpg">';
  utilities.printToDom(bioString, 'bioPage');
};

const aboutMe1 = () => {
  let domString = '';
  domString += `
  <div class="card mb-3 about-card">
    <div class="row no-gutters">
      
      <div class="col-md-4">
        <img src="${pic}" id="denise" class="card-img" alt="...">
      </div>
    
      <div class="col-md-8 right-column">
        <div class="card-body">
          <h5 class="card-title">Career Highlights</h5>
          <li>Professional Violinist for the last 25 years</li>
          <li>Member of Nashville Symphony for 23 years, permanent 4th chair</li>
          <li>Winner of 14 Grammy Awards as member of Nashville Symphony</li>
          <li>Recordings with professional artists including Garth Brooks, Matchbox 20, Taylor Swift</li>
          <li>Music video with Tim McGraw</li>
          <li>Movie soundtrack for Bridget Jones Diary</li>
          <li>Four Christmas tours with Amy Grant</li>
          <li>Extensive performances throughout Europe</li>
          <li>Performances at Carnegie Hall</li>
          <li>Solo Concerto performances with the Nashville Philharmonic, Nashville Concerto Orchestra, Western
              Piedmont Symphony
          </li>
          <li>Solo performances include Bachinalia Festival, Merkin Hall in NYC, Blair School of Music, Renaissance
              Center
          </li>
          <li>Adjunct Professor of Violin at Blair School of Music for 14 years.</li>
        </div>
      </div>
  

    <div id="video-container" class="col-sm">
      <iframe width="400" height="275" src="https://www.youtube.com/embed/ryuIMpOdbpQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>     
      <iframe width="400" height="275" src="https://www.youtube.com/embed/qBvrHxT94Mg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="400" height="275" src="https://www.youtube.com/embed/0QST7zXJizc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
    </div>
  </div>
</div>`;
  utilities.printToDom(domString, 'video');
};


const showBio = () => {
  $('body').on('click', '#navToBio', () => {
    aboutMe1();
    $('#bioPage').hide();
  });
};

const init = () => {
  showBio();
  createBio();
};

export default { init };
