import { getAuthors, getSingleAuthor } from '../../../api/authorData';
import renderToDOM from '../../helpers/renderToDom';

const selectAuthor = (authorId) => {
  let domString = `<label for="author">Select an Author</label>
    <select class="form-control" id="author_id" required>
    <option value="">Select an Author</option>`;
  if (authorId) {
    getSingleAuthor(authorId).then((authorObj) => {
      console.warn(authorObj.data);
      domString += `
        <option 
          value="${authorObj.firebaseKey}" 'selected'>
            ${authorObj.first_name} ${authorObj.last_name}
            <option value="test_value"></option>
        </option></select>`;
    });
    renderToDOM('#select-author', domString);
  } else {
    getAuthors().then((authorsArray) => {
      authorsArray.forEach((author) => {
        domString += `
          <option 
            value="${author.firebaseKey}" 
            ${authorId === author.firebaseKey ? 'selected' : ''}>
              ${author.first_name} ${author.last_name}
          </option>`;
      });
      domString += '</select>';
      renderToDOM('#select-author', domString);
    });
  }
};

export default selectAuthor;
