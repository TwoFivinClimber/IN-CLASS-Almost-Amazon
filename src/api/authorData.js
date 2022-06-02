import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// FIXME:  GET ALL AUTHORS
const getAuthors = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// FIXME: CREATE AUTHOR
const createAuthor = (authorObj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObj)
    .then((response) => {
      const addFirebase = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, addFirebase)
        .then(() => {
          getAuthors(uid).then((authorArr) => resolve(authorArr));
        });
    }).catch((error) => reject(error));
});

// FIXME: GET SINGLE AUTHOR
const getSingleAuthor = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${authorId}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// FIXME: DELETE AUTHOR
const deleteSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors().then((authorsArr) => resolve(authorsArr));
    })
    .catch((error) => reject(error));
});

// FAVORITE AUTHORS
const favoriteAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((favArray) => resolve(Object.values(favArray.data)))
    .catch((error) => reject(error));
});

//  UPDATE AUTHOR
const updateAuthor = (authObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${authObj.firebaseKey}.json`, authObj)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

// TODO: GET A SINGLE AUTHOR'S BOOKS
const getAuthorBooks = () => {};

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  getAuthorBooks,
  favoriteAuthors,
};
