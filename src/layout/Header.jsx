import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{ fontWeight: 700, fontSize: '25px' }}>
          Loaner
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/request">
                Request Loan
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/transactions">
                Transactions
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to="/auth/login" className="btn btn-outline-dark">
              Login
            </Link>

            <Link
              to="/auth/register"
              className="btn btn-outline-dark ms-3"
              type="submit">
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
