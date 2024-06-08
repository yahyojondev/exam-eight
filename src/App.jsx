import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/index";
import SingleRoute from "./pages/singleRoute/index";
import NotFound from "./pages/notFound/index";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import Basket from "./pages/basket/index";
import Blog from "./pages/blog/index";
import Catolog from "./pages/catolog/index";
import Garant from "./pages/garant/index";
import Payment from "./pages/payment/index";
import Product from "./pages/product/index";
import Return from "./pages/return/index";
import Contact from "./pages/contact/index";
import Favorite from "./pages/favorite/index";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catolog" element={<Catolog />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/garant" element={<Garant />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product" element={<Product />} />
          <Route path="/return" element={<Return />} />
          <Route path="/product/:id" element={<SingleRoute />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
