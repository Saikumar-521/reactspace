import { Link } from "react-router-dom";

 const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-light" to="/home">MyWebsite</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-10"> 
              <li className="nav-item">
                <Link className="nav-link text-light" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/blog">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">UserForm</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header; 
