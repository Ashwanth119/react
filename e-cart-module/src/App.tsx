import "./App.css";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import OrderPage from "./pages/OrderPage.tsx";
import FetchData from "./pages/FetchData.tsx";
import SignUp from "./pages/SignUp.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/orders" element={<OrderPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
      <FetchData />
    </>
  );
}

export default App;
