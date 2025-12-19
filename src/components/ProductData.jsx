import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Loader } from "./Loader";


const ProductData = () => {
  const [product, setproduct] = useState([]);

  const [search, setsearch] = useState("");
  const [category, setcategory] = useState("");
  const [categorylist, setcategorylist] = useState([]);
  const [page, setpage] = useState(1);
  const [totalproductB, setbtn] = useState(0);

  const perPage = 10;

  // Get category list once
  useEffect(() => {
    async function categoryAPI() {
      let { data } = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      console.log(data);
      setcategorylist(data);
    }
    categoryAPI();
  }, []);

  // Get products based on search / category / page
  useEffect(() => {
    let api;

    if (category) {
      api = `https://dummyjson.com/products/category/${category}`;
    } else if (search) {
      api = `https://dummyjson.com/products/search?q=${search}`;
    } else {
      api = `https://dummyjson.com/products?limit=100`;
    }

    async function getAPI() {
      let { data } = await axios.get(api);

      let allProducts = data.products || [];
      setbtn(allProducts.length); // total products count

      let pagination = allProducts.slice(
        (page - 1) * perPage,
        page * perPage
      );
      setproduct(pagination);
    }

    getAPI();
  }, [page, category, search]);

  let viewBtns = Math.ceil(totalproductB / perPage);

  return (
    <>
      <div className="container my-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold">🛍️ Product Store</h2>
          <p className="text-muted">
            Browse products by category, search, and pagination.
          </p>
        </div>

        {/* Search + Category */}
        <div className="row mb-4 g-3 align-items-center">
          <div className="col-md-6">
            <input
              placeholder="Search products..."
              className="border border-2 rounded form-control"
              type="text"
              value={search}
              onChange={(e) => {
                setsearch(e.target.value);
                setcategory("");
                setpage(1); // reset to first page
              }}
            />
          </div>
          <div className="col-md-6">
            <select
              className="p-2 text-bold border rounded form-select"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
                setsearch("");
                setpage(1); // reset to first page
              }}
            >
              <option value="">ALL Category</option>
              {categorylist.map((value, i) => (
                <option key={i} value={value} className="text-bold text-2xl">
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Cards */}
        <div className="row g-3">
      {product.map((pr, index) => (
        <motion.div
          key={pr.id}
          className="col-md-4 col-lg-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          whileHover={{ scale: 1.02 }}
        >
          <Link
            to={`/product/${pr.id}`}
            className="text-decoration-none text-dark"
          >
            <div className="card shadow-sm h-100 hover-card">
              <img
                src={pr.thumbnail}
                alt={pr.title}
                className="card-img-top"
                style={{
                  height: "220px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="card-title fw-bold mb-1">
                  {pr.title.length > 40
                    ? pr.title.slice(0, 40) + "..."
                    : pr.title}
                </h6>
                <p className="mb-1 text-muted small">
                  Brand: <strong>{pr.brand}</strong>
                </p>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold text-success">₹{pr.price}</span>
                  <span className="badge bg-warning text-dark">
                    ⭐ {pr.rating}
                  </span>
                </div>

                <p className="small text-muted mb-2">
                  {pr.description.length > 70
                    ? pr.description.slice(0, 70) + "... 😎"
                    : pr.description}
                </p>

                <span className="badge bg-light text-dark border mt-auto">
                  {pr.category}
                </span>
              </div>

              <div className="card-footer bg-white border-0">
                <button className="btn btn-outline-primary w-100">
                  View Details
                </button>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}

      {product.length === 0 && (
        <div className="col-12 text-center mt-4">
          <h5 className="text-muted"><Loader/></h5>
        </div>
      )}
    </div>

        {/* Pagination Buttons */}
        {viewBtns > 0 && (
          <div className="mt-4 d-flex flex-wrap gap-2 justify-content-center">
            {Array.from({ length: viewBtns }, (_, i) => i + 1).map((btn) => (
              <button
                key={btn}
                className={`btn ${
                  page === btn ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setpage(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* small custom hover css idea (you can put in your css file)
          .hover-card:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); transition: 0.2s; }
      */}
    </>
  );
};

export default ProductData;
