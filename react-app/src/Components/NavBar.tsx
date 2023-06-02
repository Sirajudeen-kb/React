

function NavBar() {
  return (

<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
            <img
              src="https://img.icons8.com/external-nawicon-flat-nawicon/64/external-book-back-to-school-nawicon-flat-nawicon-2.png"
              alt="Book"
              width="40"
              height="40"
            />
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">View Books</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default NavBar;
