import { getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';

const bookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObj) => {
      getSingleAuthor(bookObj.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObj });
        });
    }).catch((error) => reject(error));
});

export default bookDetails;
