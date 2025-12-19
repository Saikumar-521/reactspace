import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Loader } from "./Loader";
import { useDispatch } from "react-redux";
import { ADDCART } from "../features/cart/CartSlice";
import { ToastMSG } from "../features/cart/ToastMSG";

export const ProductDetails = () => {
  let { id } = useParams()
  const [product, setproduct] = useState({})
  
  // let select=useSelector(state=>state.cart)
  const [toast, settoast] = useState("");
  let dispatch=useDispatch()

  useEffect(() => {
    async function getAPI() {
      let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      // console.log(data);
      setproduct(data)
    }
    getAPI()
  }, [id])

  if (!product.title) return <h2 className="text-center mt-5"><Loader/></h2>;

  function handleCart(){


    settoast(`${product.title} added to cart`)
        dispatch(ADDCART({ ...product, quantity: 1 }))

    setTimeout(() => {
      settoast("")
    }, 3000);

  }

  return (
    <>
      <div className="container mt-4">
        <div className="row shadow-lg p-4 rounded bg-light">

          {/* LEFT IMAGE SECTION */}
          <div className="col-md-6 text-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid rounded mb-3 border"
              style={{ height: "350px", objectFit: "contain", background: "#fff" }}
            />

            {/* Multiple Images thumbnails */}
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              {product.images?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="border rounded"
                  style={{ width: "80px", height: "80px", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => setproduct({ ...product, thumbnail: img })}
                />
              ))}
            </div>
          </div>

          {/* RIGHT DETAILS SECTION */}
          <div className="col-md-6">
            <h2 className="fw-bold">{product.title}</h2>
            <p className="text-muted">Brand: {product.brand}</p>

            <h4 className="text-success fw-bold">
              ₹{product.price} &nbsp;
              <span className="text-danger fs-6">({product.discountPercentage}% OFF)</span>
            </h4>

            <p className="mt-3">{product.description}</p>

            <span className="badge bg-warning text-dark fs-6 p-2">
              ⭐ Rating: {product.rating}
            </span>

            <p className="mt-3">
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Stock Available:</strong> {product.stock}
            </p>
            <p>
              <strong>Warranty:</strong> 1 Year Replacement Warranty
            </p>

            {/* Buttons */}
            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-dark w-50" onClick={handleCart} >Add to Cart 🛒</button>
              <button className="btn btn-success w-50">Buy Now ⚡</button>
            </div>

            <Link to="/product" className="btn btn-outline-secondary mt-4">
              ⬅ Back to Products
            </Link>
          </div>
        </div>
      </div>
      <ToastMSG  name={toast}/>
    </>
  );
};




// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"

// export const ProductDetails=()=>{
//     let {id}=useParams()
//     const[product,setproduct]=useState({})

//     useEffect(()=>{
//         async function getAPI() {
//             let {data}=await axios.get(`https://dummyjson.com/products/${id}`);
//             console.log(`https://dummyjson.com/products/${id}`);
//             setproduct(data)
//         }
//         getAPI()
//     },[])
//     return(
//         <>
//          <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-6">
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             className="img-fluid rounded"
//           />
//         </div>
//         <div className="col-md-6">
//           <h2>{product.title}</h2>
//           <p className="text-muted">{product.brand}</p>
//           <h4>₹{product.price}</h4>
//           <p>{product.description}</p>
//           <p>
//             <strong>Rating:</strong> {product.rating}
//           </p>
//           <p>
//             <strong>Stock:</strong> {product.stock}
//           </p>
//         </div>
//       </div>
//     </div>
        
//         </>
//     )
// }