
// import { useState } from "react";
// import { Loader } from "../components/Loader";
import ProductData from "../components/ProductData";


 const Product=()=>{
    // const [loading,setLoader]=useState(true)
    
    return(
        <>
        <h1>This is Product page</h1>
        {/* {
            loading? <Loader/> : <ProductData/>
        } */}

        <ProductData/>
        
        </>
    )
}

export default Product;