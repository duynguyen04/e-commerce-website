import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import DetailPage from "./pages/DetailPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartProvider from "./store/CartProvider";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Layout>
          <Routes>
            <Route  path="/" element={<HomePage />} />
            <Route  path="/shop" element={<ShopPage />} />
            <Route  path="/detail/:detailId" element={<DetailPage />} />
            <Route  path="/register" element={<RegisterPage />} />
            <Route  path="/detail" element={<LoginPage />} />
            <Route  path="/cart" element={<CartPage />} />
            <Route  path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </div>
  );
}

export default App;
