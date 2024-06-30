import React from 'react';

const Header = () => {
  return (
    <>
      <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <h4>R.E. Solver</h4>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="index.html" className="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" className="nav-link px-2">Batch</a></li>
        <li><a href="#" className="nav-link px-2">Plug Flow</a></li>
        <li><a href="#" className="nav-link px-2">CSTR</a></li>
        <li><a href="#" className="nav-link px-2 link-secondary">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2">Login</button>
        <button type="button" className="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
    </>
  );
}

export default Header;
