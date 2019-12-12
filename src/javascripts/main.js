import firebase from 'firebase';
import apiKeys from './helpers/apiKeys.json';
import 'bootstrap';
import '../styles/main.scss';
import tech from './components/technologies/technologies';
import projects from './components/projects/projects';
import bio from './components/bio/bio';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projects.printProjects();
  bio.init();
  tech.printTechnologies();
};

init();
