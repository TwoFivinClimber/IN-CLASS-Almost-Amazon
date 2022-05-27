import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const showAuthors = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    // eslint-disable-next-line prefer-destructuring
    const favorite = item.favorite;
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <h6 class="fav-h6 card-subtitle mb-2 text-muted">${favorite ? 'Favorite Author' : ''}</h6>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
        <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#store', domString);
};

const showAuthorDetail = (object) => {
  // eslint-disable-next-line prefer-destructuring
  const favorite = object.favorite;
  let domString = '<div class="auth-view">';
  domString += ` <div class="auth-card card">
    <div class= card-body">
      <h5 class="card-title">${object.first_name} ${object.last_name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${object.email}</h6>
      <h6 class="fav-h6 card-subtitle mb-2 text-muted">${favorite ? 'Favorite Author' : ''}</h6>
      <hr>
      <i class="fas fa-edit btn btn-info" id="update-author--${object.firebaseKey}"></i>
      <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${object.firebaseKey}"></i>
    </div>
  </div>`;
  domString += '<div class="author-books">';
  object.authorBooksArr.forEach((book) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${book.image} alt=${book.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${book.title}</h5>
            <p class="card-text bold">${book.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${book.firebaseKey}"></i>
            <i id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${book.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
  domString += '</div></div>';
  renderToDOM('#store', domString);
};

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

export { showAuthors, emptyAuthors, showAuthorDetail };
