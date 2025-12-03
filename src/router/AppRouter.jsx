import { Routes,Route, useLocation } from "react-router-dom"
import Blog from "../pages/Cart"
import Product from "../pages/Product"
import UserForm from "../pages/UserForm"
import Footer from "../pages/Footer"
import Header from "../pages/Header";

export const AppRouter=()=>{
  let location=useLocation()

  let hidden=location.pathname==='/'
    return(
        <>
        {!hidden && <Header/>}
        <Routes>
        <Route path="/home" element={<h2>Home Page</h2>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/" element={<UserForm/>}/>
      </Routes>

      {!hidden && <Footer/>}
        </>
    )
}