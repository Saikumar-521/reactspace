import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-3 mt-5">
      <div className="container">

        {/* Footer Menu */}
        <div className="mb-2">
          <Link to="/" className="text-white mx-3 text-decoration-none">Home</Link>
          <Link to="/product" className="text-white mx-3 text-decoration-none">Product</Link>
          <Link to="/cart" className="text-white mx-3 text-decoration-none">Cart</Link>
        </div>

        <p className="mb-1">© 2025 MyShop. All Rights Reserved.</p>
        <p className="small mb-0">
          Designed & Developed by <strong>Sai Kumar</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
