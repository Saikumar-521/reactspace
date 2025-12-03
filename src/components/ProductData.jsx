import axios from "axios";
import { useEffect, useState } from "react";

const ProductData = () => {
  const [item, setData] = useState([]);
  const [page,setpage]=useState(1)

  let currentpage=12;

  let indexend=page*currentpage;
  let indexstart=indexend-currentpage
  let pagenation=item.slice(indexstart,indexend)
  
  useEffect(() => {
    async function getData() {
      let { data } = await axios.get("https://dummyjson.com/products/?limit=200");
      console.log(data.products);
      setData(data.products);
      
    }
    getData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
  {pagenation.map((pr) => (
    <div key={pr.id} className="col-md-4 mb-3">
      <div className="card shadow-lg">
        <img
          src={pr.thumbnail}
          alt={pr.title}
          className="card-img-top"
          style={{ height: "250px", objectFit: "contain", backgroundColor: "#fff" }}
        />
        <div className="card-body">
          <h5 className="card-title">{pr.title}</h5>
          <p className="card-text text-muted">Price: ${pr.price}</p>
          <button className="btn btn-primary w-100">{pr.description.length > 100 ? pr.description.slice(0,100) +"...😎":pr.description}</button>
        </div>
      </div>
    </div>
  ))}
</div>

      

      <div className="d-flex mx-10 justify-content-center">
        {
          [1,2,3,4,5,6,7,8,9,10].map(btn=>
            <div className="btn bg-primary text-white p-2 m-3" onClick={()=>setpage(btn)}>{btn}</div>
          )
        }
      </div>
    </div>
  );
};

export default ProductData;

// import axios from "axios";
// import { useEffect, useState } from "react";

// const ProductData = () => {
//   const [item, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6; // how many products per page

//   useEffect(() => {
//     async function getData() {
//       let { data } = await axios.get("https://dummyjson.com/products");
//       setData(data.products);
//     }
//     getData();
//   }, []);

//   // 1️⃣ Calculate current page data
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = item.slice(indexOfFirstItem, indexOfLastItem);

//   // 2️⃣ Total pages
//   const totalPages = Math.ceil(item.length / itemsPerPage);

//   // 3️⃣ Handlers
//   const goToPage = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const goToNext = () => {
//     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//   };

//   const goToPrev = () => {
//     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {currentItems.map((pr) => (
//           <div key={pr.id} className="col-md-4 mb-3">
//             <div className="card shadow-lg h-100">
//               <img
//                 src={pr.thumbnail}
//                 alt={pr.title}
//                 className="card-img-top"
//                 style={{ height: "200px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{pr.title}</h5>
//                 <p className="card-text text-muted">Price: ${pr.price}</p>
//                 <button className="btn btn-primary w-100">Buy Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 4️⃣ Pagination Controls */}
//       <nav className="mt-4">
//         <ul className="pagination justify-content-center">

//           {/* Previous Button */}
//           <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
//             <button className="page-link" onClick={goToPrev}>
//               Previous
//             </button>
//           </li>

//           {/* Page Numbers */}
//           {Array.from({ length: totalPages }, (_, index) => (
//             <li
//               key={index + 1}
//               className={`page-item ${
//                 currentPage === index + 1 ? "active" : ""
//               }`}
//             >
//               <button
//                 className="page-link"
//                 onClick={() => goToPage(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             </li>
//           ))}

//           {/* Next Button */}
//           <li
//             className={`page-item ${
//               currentPage === totalPages ? "disabled" : ""
//             }`}
//           >
//             <button className="page-link" onClick={goToNext}>
//               Next
//             </button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default ProductData;
