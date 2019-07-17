import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyMinis = uid => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/minis.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const minis = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          minis.push(res.data[fbKey]);
        });
      }
      resolve(minis);
    })
    .catch(err => reject(err));
});

const deleteMini = miniId => axios.delete(`${baseUrl}/minis/${miniId}.json`);

const getSingleMini = miniId => axios.get(`${baseUrl}/minis/${miniId}.json`);

const postMini = newMini => axios.post(`${baseUrl}/minis.json`, newMini);

const putMini = (updatedMini, miniId) => axios.put(`${baseUrl}/minis/${miniId}.json`, updatedMini);

export default {
  getMyMinis,
  deleteMini,
  getSingleMini,
  postMini,
  putMini,
};
