import Cart from "../../pages/Cart";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Product from "../../pages/Product";
import ProductList from "../../pages/ProductList";
import Register from "../../pages/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";






const MyRoutes = props => {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/products" element={<ProductList/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </Router>
    );
  };
  
  export default MyRoutes;
  