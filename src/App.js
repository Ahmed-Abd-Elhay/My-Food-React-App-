import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginSign from "./Pages/LoginSign";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";
import DishesShow from "./Pages/DishesShow";
import ScrollToTop from "./Components/ScrollToTop";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";

function App() {
  return (
    <>
      <BrowserRouter >

        <ScrollToTop />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/plates" element={<DishesShow />}>
            <Route path=":plateId" element={<DishesShow />} />
          </Route>
          <Route path="/login" element={<LoginSign />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-info" element={<PlaceOrder />} />
        </Routes>

        <Footer />

      </BrowserRouter>

    </>
  );
}

export default App;
