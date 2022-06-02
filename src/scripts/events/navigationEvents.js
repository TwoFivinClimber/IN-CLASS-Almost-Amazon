import { getBooks } from '../../api/bookData';
import signOut from '../helpers/auth/signOut';
import { emptyBooks, showBooks } from '../components/pages/books';
import { getAuthors } from '../../api/authorData';
import { showAuthors, emptyAuthors } from '../components/pages/authors';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  //  BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    getBooks(uid).then((booksArray) => {
      const saleBooksArr = booksArray.filter((book) => book.sale);
      console.warn(saleBooksArr);
      showBooks(saleBooksArr);
    });
  });

  //  ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks(uid).then((booksArr) => {
      if (booksArr.length) {
        showBooks(booksArr);
      } else {
        emptyBooks();
      }
    });
  });

  // STUDENTS Create an event listener for the Authors
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors(uid).then((authorsArray) => {
      // eslint-disable-next-line no-unused-expressions
      authorsArray.length ? showAuthors(authorsArray) : emptyAuthors();
    });
  });
  // Favorite Authors
  document.querySelector('#fav-authors').addEventListener('click', () => {
    getAuthors(uid).then((authorsArray) => {
      const favArray = authorsArray.filter((author) => author.favorite);
      showAuthors(favArray);
    });
  });

  // STRETCH: SEARCH
  // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
  // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
  // OTHERWISE SHOW THE STORE
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      getBooks(uid).then((booksArr) => {
        // eslint-disable-next-line no-restricted-syntax
        const renderArray = [];
        // eslint-disable-next-line no-restricted-syntax
        for (const book of booksArr) {
          if (book.title.toLowerCase().includes(searchValue)) {
            renderArray.push(book);
          }
        }
        // eslint-disable-next-line no-unused-expressions
        renderArray.length ? showBooks(renderArray) : emptyBooks('Try another Title');
      });
    }
  });
  document.querySelector('#search').value = '';
};

export default navigationEvents;
