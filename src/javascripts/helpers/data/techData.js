import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((response) => {
      const demTechs = response.data;
      const technologies = [];
      Object.keys(demTechs).forEach((fbid) => {
        demTechs[fbid].id = fbid;
        technologies.push(demTechs[fbid]);
      });
      resolve(technologies);
    })
    .catch((error) => reject(error));
});

export default { getTechnologies };
