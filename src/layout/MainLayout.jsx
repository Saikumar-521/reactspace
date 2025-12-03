import { Routes, Route } from "react-router-dom";
// import Header from "../pages/Header";
import { AppRouter } from "../router/AppRouter";
// import Footer from "../pages/Footer";

export const MainLayout = () => {

  
  return (
    <>
      {/* <Header /> */}
      {/* <Product/>
      <Blog/> */}

      {/* <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
      </Routes> */}

      <AppRouter/>

      {/* <Footer/> */}
      
    </>
  );
};
