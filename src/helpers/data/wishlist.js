import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getMyMinis = uid => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/wishlist.json?orderBy="uid"&equalTo="${uid}"`)
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

const deleteMini = miniId => axios.delete(`${baseUrl}/wishlist/${miniId}.json`);

const getSingleMini = miniId => axios.get(`${baseUrl}/wishlist/${miniId}.json`);

const postMini = newMini => axios.post(`${baseUrl}/wishlist.json`, newMini);


const putMini = (updatedMini, miniId) => axios.put(`${baseUrl}/wishlist/${miniId}.json`, updatedMini);

export default {
  getMyMinis,
  deleteMini,
  getSingleMini,
  postMini,
  putMini,
};
