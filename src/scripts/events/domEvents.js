import { deleteBook } from '../../api/bookData';
import { showBooks } from '../components/pages/books';
import { bookDetails, authorDetails } from '../../api/mergedData';
import viewBook from '../components/pages/viewBook';
import { deleteSingleAuthor } from '../../api/authorData';
import { showAuthorDetail, showAuthors } from '../components/pages/authors';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteBook(firebaseKey).then((booksArray) => {
          showBooks(booksArray);
        });
      }
    }

    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('ADD BOOK');
    }

    // TODO: CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      console.warn('EDIT BOOK', e.target.id);
      console.warn(e.target.id.split('--'));
    }
    //  CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      bookDetails(firebaseKey).then((bookAuthorObj) => {
        viewBook(bookAuthorObj);
      });
    }

    // CLICK EVENT FOR VIEW AUTHOR DETAILS W/BOOKS
    if (e.target.id.includes('view-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      authorDetails(firebaseKey).then((authAuthBooksObj) => {
        showAuthorDetail(authAuthBooksObj);
      });
    }

    //  ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteSingleAuthor(firebaseKey).then((authorsArr) => {
          showAuthors(authorsArr);
        });
      }
    }

    // FIXME: ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      console.warn('ADD AUTHOR');
    }
    // FIXME: ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default domEvents;
