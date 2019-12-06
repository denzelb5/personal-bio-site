import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const theProjects = response.data;
      console.error('theProjects', theProjects);
      const projects = [];
      Object.keys(theProjects).forEach((fbid) => {
        theProjects[fbid].id = fbid;
        projects.push(theProjects[fbid]);
      });
      resolve(projects);
      console.error(projects);
    })
    .catch((error) => reject(error));
});

export default { getProjects };
