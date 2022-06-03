import renderToDOM from '../helpers/renderToDom';

const navBar = (target) => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#" disable>Almost Amazon</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="nav-items navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="${target === 'allBooks' ? 'highlight' : ''} nav-link" href="#" id="all-books">
                All Books <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="${target === 'saleBooks' ? 'highlight' : ''} nav-link" href="#" id="sale-books">Books on Sale</a>
            </li>
            <li class="nav-item">
              <a class="${target === 'authors' ? 'highlight' : ''} nav-link" href="#" id="authors">Authors</a>
            </li>
            <li class="nav-item">
              <a class="${target === 'favAuthors' ? 'highlight' : ''} nav-link" href="#" id="fav-authors">Fav Authors</a>
            </li>
            <li class="search">
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search Book Titles"
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="logout-button"></div>
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
