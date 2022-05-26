import { getSingleAuthor } from './authorData';
import { authorsBooks, getSingleBook } from './bookData';

const bookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObj) => {
      getSingleAuthor(bookObj.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObj });
        });
    }).catch((error) => reject(error));
});

const authorDetails = (authFirebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(authFirebaseKey)
    .then((authorObj) => {
      authorsBooks(authFirebaseKey)
        .then((authorBooksArr) => {
          resolve({ authorBooksArr, ...authorObj });
        }).catch((error) => reject(error));
    });
});

export { bookDetails, authorDetails };
