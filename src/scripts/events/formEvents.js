import { createAuthor, getAuthors, updateAuthor } from '../../api/authorData';
import { createBook, getBooks, updateBook } from '../../api/bookData';
import { showAuthors } from '../components/pages/authors';
// import addBookForm from '../components/forms/addBookForm';
import { showBooks } from '../components/pages/books';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    //  CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      const bookObj = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').value,
        author_id: document.querySelector('#author_id').value,
      };
      createBook(bookObj).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      const bookObj = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').value,
        author_id: document.querySelector('#author_id').value,
        firebaseKey
      };
      updateBook(bookObj).then(() => {
        getBooks().then((response) => showBooks(response));
      });
    }

    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      const authorObj = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value
      };
      createAuthor(authorObj).then((authorArr) => {
        showAuthors(authorArr);
      });
    }
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      const [, firebaseKey] = e.target.id.split('--');
      const authorObj = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        firebaseKey
      };
      console.warn(authorObj);
      updateAuthor(authorObj).then(() => {
        getAuthors().then((authorArr) => showAuthors(authorArr));
      });
    }
  });
};

export default formEvents;
