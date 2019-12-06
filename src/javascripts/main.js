import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import '../styles/main.scss';
// import tech from './components/technologies/technologies';
import projects from './components/projects/projects';

console.log('hi');


// document.getElementById('navToTechnologies').addEventListener('click', (event) => {
//   event.preventDefault();
// });

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  // tech.displayTech();
  projects.printProjects();
};

init();
