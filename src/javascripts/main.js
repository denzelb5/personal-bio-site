import 'bootstrap';
import '../styles/main.scss';
import tech from './components/technologies/technologies';

console.log('hi');


document.getElementById('navToTechnologies').addEventListener('click', (event) => {
  event.preventDefault();
});

const init = () => {
  tech.displayTech();
};

init();
